import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import AcademicNotices from './pages/AcademicNotices';
import WelfareNotices from './pages/WelfareNotices';
import StudentServices from './pages/StudentServices';
import ClubsOrganizations from './pages/ClubsOrganizations';
import Login from './pages/Login';

function App() {
  const [activeTab, setActiveTab] = useState('academic');

  // ✅ Initialize authentication based on localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const userInfo = {
    name: 'John Doe',
    id: 'FAC/AS/20/001'
  };

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    setIsAuthenticated(false);        // redirect to login
    setActiveTab('academic');         // reset active tab
  };

  // ✅ Show Login page if not authenticated
  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  // ✅ Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'academic':
        return <AcademicNotices />;
      case 'welfare':
        return <WelfareNotices />;
      case 'student':
        return <StudentServices />;
      case 'clubs':
        return <ClubsOrganizations />;
      default:
        return <AcademicNotices />;
    }
  };

  // ✅ Get page title for Header
  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Dashboard';
      case 'academic':
        return 'Academic Notices';
      case 'welfare':
        return 'Welfare Notices';
      case 'student':
        return 'Student Services';
      case 'clubs':
        return 'Clubs & Organizations';
      default:
        return 'VUC Portal';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout} // ✅ Logout from sidebar
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header
          title={getPageTitle()}
          userInfo={userInfo}
          //onLogout={handleLogout} // ✅ Optional: header logout
        />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
