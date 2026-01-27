import { useState } from "react";
import Marketplace from "./Marketplace";
import Hostel from "./Hostel";
import LostAndFound from "./LostAndFound";
import Donations from "./Donations";

export default function StudentServices() {
  const [activeService, setActiveService] = useState("lost");

  const renderService = () => {
    switch (activeService) {
      case "marketplace":
        return <Marketplace />;
      case "hostel":
        return <Hostel />;
      case "donations":
        return <Donations />;
      case "lost":
      default:
        return <LostAndFound />;
    }
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-4">Student Services</h2>

      {/* Sub Tabs */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setActiveService("marketplace")}
          className={`pb-2 font-medium ${
            activeService === "marketplace"
              ? "border-b-2 border-teal-700 text-teal-700"
              : "text-gray-600"
          }`}
        >
          Marketplace
        </button>

        <button
          onClick={() => setActiveService("hostel")}
          className={`pb-2 font-medium ${
            activeService === "hostel"
              ? "border-b-2 border-teal-700 text-teal-700"
              : "text-gray-600"
          }`}
        >
          Hostel
        </button>

        <button
          onClick={() => setActiveService("lost")}
          className={`pb-2 font-medium ${
            activeService === "lost"
              ? "border-b-2 border-teal-700 text-teal-700"
              : "text-gray-600"
          }`}
        >
          Lost & Found
        </button>

        <button
          onClick={() => setActiveService("donations")}
          className={`pb-2 font-medium ${
            activeService === "donations"
              ? "border-b-2 border-teal-700 text-teal-700"
              : "text-gray-600"
          }`}
        >
          Donations
        </button>
      </div>

      {/* Content */}
      {renderService()}
    </div>
  );
}
