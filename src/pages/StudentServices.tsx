import { useState, useEffect } from 'react';
import { Package, DollarSign } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface DonationDrive {
  id: string;
  title: string;
  description: string;
  amount_raised: number;
  goal_amount: number;
}

interface LostItem {
  id: string;
  item_name: string;
  location: string;
}

export default function StudentServices() {
  const [itemName, setItemName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [donations, setDonations] = useState<DonationDrive[]>([]);
  const [lostItems, setLostItems] = useState<LostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [donationsRes, itemsRes] = await Promise.all([
        supabase.from('donation_drives').select('*').order('created_at', { ascending: false }),
        supabase.from('lost_items').select('*').order('created_at', { ascending: false }).limit(10)
      ]);

      if (donationsRes.data) setDonations(donationsRes.data);
      if (itemsRes.data) setLostItems(itemsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from('lost_items')
        .insert([{ item_name: itemName, location }]);

      if (error) throw error;

      setItemName('');
      setLocation('');
      setDescription('');
      fetchData();
    } catch (error) {
      console.error('Error reporting item:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Services</h2>
        <p className="text-gray-600">
          Access resources for lost items and donation opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <Package size={20} className="text-teal-700" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Lost and Found</h3>
              <p className="text-sm text-gray-600">Report a lost item or browse found items.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Item Name
              </label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="e.g., Student ID Card"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Seen Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Library, Canteen"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide a brief description of the item."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-800 transition-colors font-medium"
            >
              Report Lost Item
            </button>
          </form>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">Recently Found Items</h4>
            <div className="space-y-2">
              {lostItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-sm text-gray-900">{item.item_name}</span>
                  <span className="text-sm text-gray-500">{item.location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <DollarSign size={20} className="text-teal-700" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Donations</h3>
              <p className="text-sm text-gray-600">Contribute to university initiatives.</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Current Donation Drives</h4>
            <div className="space-y-6">
              {donations.map((drive) => {
                const percentage = Math.round((drive.amount_raised / drive.goal_amount) * 100);
                return (
                  <div key={drive.id} className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{drive.title}</h5>
                    <p className="text-sm text-gray-600 mb-3">{drive.description}</p>

                    <div className="mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{percentage}% Raised</span>
                      <span className="font-semibold text-gray-900">
                        LKR {drive.amount_raised.toLocaleString()} / {drive.goal_amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}

              <button className="w-full bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-800 transition-colors font-medium">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
