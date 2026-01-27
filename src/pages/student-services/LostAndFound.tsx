import { Package } from "lucide-react";

export default function LostAndFound() {
  const items = [
    { id: 1, name: "Student ID Card", location: "Library" },
    { id: 2, name: "Black Backpack", location: "Canteen" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Package className="text-teal-700" />
          Lost & Found
        </h3>
        <p className="text-gray-600 mt-1">
          Report lost items or check recently found items.
        </p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-3">Report Lost Item</h4>

        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Item Name"
        />
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Last Seen Location"
        />

        <button className="bg-teal-700 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-3">Recently Found Items</h4>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-2 text-sm"
          >
            <span>{item.name}</span>
            <span className="text-gray-500">{item.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
