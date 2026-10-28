import { Calendar } from 'lucide-react';

export default function UpcomingTasks() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <span>📅</span>
          <span>Upcoming Tasks (Next 7 Days)</span>
        </h2>
        <button className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
          <span>🔔</span>
          Reminder View
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-16">
        <div className="bg-gray-100 rounded-full p-6 mb-4">
          <Calendar className="text-gray-400" size={48} />
        </div>
        <p className="text-gray-500 text-center text-sm sm:text-base">
          No upcoming tasks in the next 7 days
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Tasks will appear here once they are scheduled
        </p>
      </div>
    </div>
  );
}
