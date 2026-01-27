export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">
          Welcome to the VUC Portal. Access all your university services in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">Academic Notices</h3>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-purple-700">5</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">New Updates</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">Welfare Notices</h3>
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-teal-700">5</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">New Updates</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">Clubs</h3>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-yellow-700">6</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">New Updates</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">Services</h3>
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-red-700">2</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">New Updates</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
          <div className="space-y-3">
            <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">Library Services</div>
              <div className="text-sm text-gray-600">Access online resources and book reservations</div>
            </a>
            <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">Exam Results</div>
              <div className="text-sm text-gray-600">Check your academic performance</div>
            </a>
            <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">Course Registration</div>
              <div className="text-sm text-gray-600">Register for upcoming semester courses</div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex flex-col items-center justify-center">
                <span className="text-xs text-purple-700 font-medium">OCT</span>
                <span className="text-lg font-bold text-purple-700">26</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Final Examination</div>
                <div className="text-sm text-gray-600">Year II Semester I begins</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex flex-col items-center justify-center">
                <span className="text-xs text-teal-700 font-medium">OCT</span>
                <span className="text-lg font-bold text-teal-700">30</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Sports Meet</div>
                <div className="text-sm text-gray-600">Inter-Faculty competition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
