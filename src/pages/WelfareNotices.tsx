import { useState, useEffect } from 'react';
import { Heart, GraduationCap, Home, Lightbulb, Book, Trophy, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface WelfareNotice {
  id: string;
  title: string;
  description: string;
  icon_type: string;
  posted_date: string;
  action_text: string;
}

export default function WelfareNotices() {
  const [notices, setNotices] = useState<WelfareNotice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const { data, error } = await supabase
        .from('welfare_notices')
        .select('*')
        .order('posted_date', { ascending: false });

      if (error) throw error;
      setNotices(data || []);
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (iconType: string) => {
    const iconMap: Record<string, any> = {
      scholarship: GraduationCap,
      home: Home,
      heart: Heart,
      trophy: Trophy,
      book: Book,
      info: Lightbulb,
    };
    return iconMap[iconType] || Lightbulb;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="p-6">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welfare Notices</h2>
        <p className="text-gray-600">
          Stay updated on scholarships, housing, and other welfare services.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-700"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notices.map((notice) => {
            const Icon = getIcon(notice.icon_type);
            return (
              <div
                key={notice.id}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-teal-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{notice.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {notice.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Posted: {formatDate(notice.posted_date)}
                  </span>
                  <button className="text-sm text-teal-700 hover:text-teal-800 font-medium flex items-center gap-1">
                    {notice.action_text}
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
