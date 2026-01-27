import { DollarSign, Heart } from "lucide-react";

export default function Donations() {
  const drives = [
    {
      id: 1,
      title: "Student Welfare Fund",
      raised: 150000,
      goal: 300000,
    },
    {
      id: 2,
      title: "Library Development Fund",
      raised: 90000,
      goal: 150000,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <DollarSign className="text-teal-700" />
          Donations
        </h3>
        <p className="text-gray-600 mt-1">
          Support university initiatives through transparent donation drives.
        </p>
      </div>

      {drives.map((drive) => {
        const percent = Math.round((drive.raised / drive.goal) * 100);

        return (
          <div key={drive.id} className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">{drive.title}</h4>

            <div className="w-full bg-gray-200 h-2 rounded mb-2">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: `${percent}%` }}
              />
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>{percent}% raised</span>
              <span>
                LKR {drive.raised.toLocaleString()} /{" "}
                {drive.goal.toLocaleString()}
              </span>
            </div>

            <button className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded">
              <Heart size={16} /> Donate
            </button>
          </div>
        );
      })}
    </div>
  );
}
