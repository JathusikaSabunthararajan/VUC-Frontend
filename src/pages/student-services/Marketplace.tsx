import { ShoppingCart, Book, Laptop } from "lucide-react";

export default function Marketplace() {
  const items = [
    {
      id: 1,
      title: "Data Structures Textbook",
      category: "Books",
      price: "LKR 2,500",
      seller: "ICT Student",
    },
    {
      id: 2,
      title: "Used Laptop (i5, 8GB RAM)",
      category: "Electronics",
      price: "LKR 85,000",
      seller: "Final Year Student",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <ShoppingCart className="text-teal-700" />
          Student Marketplace
        </h3>
        <p className="text-gray-600">
          A secure platform for students to buy and sell academic materials and essentials.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="text-sm mt-1">Seller: {item.seller}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="font-bold text-teal-700">{item.price}</span>
              <button className="px-3 py-1 text-sm bg-teal-700 text-white rounded">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
