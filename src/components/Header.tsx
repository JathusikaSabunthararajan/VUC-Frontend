import { Bell, Star, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  userInfo?: {
    name: string;
    id: string;
  };
}

export default function Header({ title, userInfo }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Star size={20} className="text-gray-600" />
          </button>
          {userInfo && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-amber-700">
                  {userInfo.name.charAt(0)}
                </span>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">{userInfo.name}</div>
                <div className="text-xs text-gray-500">{userInfo.id}</div>
              </div>
            </div>
          )}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
            <Menu size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
