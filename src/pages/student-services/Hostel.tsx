import { useState } from "react";
import { Home, Wrench } from "lucide-react";

export default function Hostel() {
  // ✅ State for Publish Notice
  const [hostelType, setHostelType] = useState("");
  const [block, setBlock] = useState("");
  const [issue, setIssue] = useState("");

  // ✅ State for Maintenance Request
  const [maintenanceIssue, setMaintenanceIssue] = useState("");

  // ✅ Handle Publish Notice submission
  const handlePublishNotice = () => {
    if (!hostelType || !block || !issue) {
      alert("Please fill all fields before publishing the notice.");
      return;
    }
    console.log("Notice Published:", { hostelType, block, issue });
    alert(`Notice Published for ${hostelType}, Block ${block}`);
    // Reset form
    setHostelType("");
    setBlock("");
    setIssue("");
  };

  // ✅ Handle Maintenance submission
  const handleMaintenanceRequest = () => {
    if (!maintenanceIssue) {
      alert("Please describe the maintenance issue.");
      return;
    }
    console.log("Maintenance Request Submitted:", maintenanceIssue);
    alert("Maintenance Request Submitted!");
    setMaintenanceIssue("");
  };

  return (
    <div className="space-y-6">
      {/* Hostel Services Header */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Home className="text-teal-700" />
          Hostel Services
        </h3>
        <p className="text-gray-600 mt-1">
          Manage hostel-related notices, facilities, and maintenance requests.
        </p>
      </div>

      {/* Forms Section */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Publish Notice Section */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Home size={16} />
            Publish Notice
          </h4>

          {/* Hostel Type Dropdown */}
          <label className="block mb-2 text-sm font-medium text-gray-700">Hostel Type</label>
          <select
            className="w-full border rounded p-2 mb-3"
            value={hostelType}
            onChange={(e) => setHostelType(e.target.value)}
          >
            <option value="" disabled>
              Select Hostel
            </option>
            <option value="Boys Hostel">Boys Hostel</option>
            <option value="Girls Hostel">Girls Hostel</option>
          </select>

          {/* Block Input */}
          <label className="block mb-2 text-sm font-medium text-gray-700">Block</label>
          <input
            type="text"
            placeholder="Enter block (e.g., A, B, C)"
            className="w-full border rounded p-2 mb-3"
            value={block}
            onChange={(e) => setBlock(e.target.value)}
          />

          {/* Issue / Notice Textarea */}
          <label className="block mb-2 text-sm font-medium text-gray-700">Issue / Notice</label>
          <textarea
            placeholder="Describe the issue or notice"
            className="w-full border rounded p-2 mb-3"
            rows={3}
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />

          <button
            onClick={handlePublishNotice}
            className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition"
          >
            Publish Notice
          </button>
        </div>

        {/* Maintenance Request Section */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Wrench size={16} />
            Maintenance Request
          </h4>

          <textarea
            placeholder="Describe the issue (water, electricity, furniture...)"
            className="w-full border p-2 rounded mb-2"
            rows={3}
            value={maintenanceIssue}
            onChange={(e) => setMaintenanceIssue(e.target.value)}
          />

          <button
            onClick={handleMaintenanceRequest}
            className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
