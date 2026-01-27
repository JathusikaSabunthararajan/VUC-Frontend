import { LayoutDashboard, GraduationCap, Heart, Briefcase, Users, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ activeTab, onTabChange, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'General', icon: LayoutDashboard },
    { id: 'academic', label: 'Academic', icon: GraduationCap },
    { id: 'welfare', label: 'Welfare', icon: Heart },
    { id: 'student', label: 'Student Services', icon: Briefcase },
    { id: 'clubs', label: 'Societies', icon: Users },
    { id: 'sports', label: 'Sports', icon: Users }, // ✅ Correct id
  ];

  return (
    <div className="w-48 bg-[#7D1230] text-white h-screen flex flex-col">
      <div className="p-4 border-b border-red-900">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-700 rounded flex items-center justify-center">
            <GraduationCap size={20} />
          </div>
          <h1 className="font-bold text-lg">VUC Portal</h1>
        </div>
      </div>

      <nav className="flex-1 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full px-4 py-3 flex items-center gap-3 transition-colors ${
                isActive ? 'bg-yellow-400 text-gray-900' : 'text-white hover:bg-red-900'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button
        onClick={onLogout}
        className="px-4 py-3 flex items-center gap-3 hover:bg-red-900 border-t border-red-900 mt-auto"
      >
        <LogOut size={18} />
        <span className="text-sm">Logout</span>
      </button>
    </div>
  );
}
