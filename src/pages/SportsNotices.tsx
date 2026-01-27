import { useState } from "react";
import { Trophy, Calendar } from "lucide-react";

interface SportsNotice {
  id: number;
  title: string;
  description: string;
  eventDate: string;
  postedOn: string;
}

export default function SportsNotices() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");

  // Sample data (replace with backend later)
  const [notices, setNotices] = useState<SportsNotice[]>([
    {
      id: 1,
      title: "Inter-University Sports Meet",
      description:
        "Scheduled on 15th March 2026 at University Grounds.",
      eventDate: "2026-03-15",
      postedOn: "2026-03-01",
    },
    {
      id: 2,
      title: "Annual Cricket Tournament",
      description: "Team registrations are now open.",
      eventDate: "2026-02-28",
      postedOn: "2026-02-20",
    },
  ]);

  const handlePublish = () => {
    if (!title || !description || !eventDate) return;

    const newNotice: SportsNotice = {
      id: Date.now(),
      title,
      description,
      eventDate,
      postedOn: new Date().toISOString().split("T")[0],
    };

    setNotices([newNotice, ...notices]);
    setTitle("");
    setDescription("");
    setEventDate("");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Sports Notices</h2>
        <p className="text-gray-600">
          Stay updated on sports events, tournaments, and activities.
        </p>
      </div>

      {/* Upload Notice (Admin) */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-lg mb-4">
          Upload Sports Notice (Admin)
        </h3>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Notice Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7D1230]"
          />

          <textarea
            placeholder="Notice Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#7D1230]"
          />

          <div className="relative">
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-[#7D1230]"
            />
            <Calendar
              className="absolute right-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>

          <button
            onClick={handlePublish}
            className="w-full bg-[#7D1230] text-white py-2 rounded-lg hover:bg-[#651025]"
          >
            Publish Notice
          </button>
        </div>
      </div>

      {/* All Sports Notices */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-lg mb-4">
          All Sports Notices
        </h3>

        <div className="space-y-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="border-b last:border-0 pb-4"
            >
              <h4 className="font-semibold text-[#7D1230]">
                {notice.title}
              </h4>

              <p className="text-gray-700 mt-1">
                {notice.description}
              </p>

              <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                <Trophy size={14} />
                <span>Event Date: {notice.eventDate}</span>
                <span>• Posted on: {notice.postedOn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
