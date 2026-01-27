import { useState, useEffect } from 'react';
import { Users, Search, Plus } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Club {
  id: string;
  name: string;
  faculty: string;
  description: string;
  member_count: number;
  image_url: string;
}

export default function ClubsOrganizations() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const { data, error } = await supabase
        .from('clubs')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setClubs(data || []);
    } catch (error) {
      console.error('Error fetching clubs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Clubs & Organizations</h2>
        </div>
        <button className="bg-[#7D1230] text-white px-4 py-2 rounded-lg hover:bg-[#9D1240] transition-colors flex items-center gap-2">
          <Plus size={18} />
          Add New Club
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search clubs..."
          className="w-full max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                  <Users size={32} className="text-gray-500" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-1">{club.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{club.faculty}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {club.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span>{club.member_count} Members</span>
                  </div>
                  <button className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
