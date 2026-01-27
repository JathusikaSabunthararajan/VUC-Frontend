import { useState, useEffect } from 'react';
import { Calendar, AlertCircle, Book, FileText, XCircle, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Notice {
  id: string;
  title: string;
  faculty: string;
  date: string;
}

export default function AcademicNotices() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const { data, error } = await supabase
        .from('academic_notices')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setNotices(data || []);
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (index: number) => {
    const icons = [Calendar, AlertCircle, Book, FileText, XCircle];
    return icons[index % icons.length];
  };

  const getColorClass = (index: number) => {
    const colors = [
      'bg-teal-100 text-teal-700',
      'bg-purple-100 text-purple-700',
      'bg-orange-100 text-orange-700',
      'bg-purple-100 text-purple-700',
      'bg-teal-100 text-teal-700',
    ];
    return colors[index % colors.length];
  };

  const getBorderColor = (index: number) => {
    const colors = [
      'border-l-teal-500',
      'border-l-purple-500',
      'border-l-orange-500',
      'border-l-purple-500',
      'border-l-teal-500',
    ];
    return colors[index % colors.length];
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
      <div className="bg-purple-100 rounded-lg p-6 mb-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
          <GraduationCap size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Academic Notices</h2>
          <p className="text-gray-600 text-sm">
            Stay updated on exam schedules, lecture changes, and study leave announcements.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900">All Notices</h3>
          <div className="flex gap-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>All Faculties</option>
              <option>Faculty of Applied Science</option>
              <option>Faculty of Business Studies</option>
              <option>Faculty of Technological Studies</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {notices.map((notice, index) => {
              const Icon = getIcon(index);
              return (
                <div
                  key={notice.id}
                  className={`border-l-4 ${getBorderColor(index)} bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${getColorClass(index)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {notice.title}
                      </h4>
                      <p className="text-sm text-gray-600">{notice.faculty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-2">{formatDate(notice.date)}</p>
                    <button className="text-sm text-red-700 hover:text-red-800 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function GraduationCap({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
