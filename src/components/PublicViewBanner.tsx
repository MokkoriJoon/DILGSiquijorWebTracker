import { Eye } from 'lucide-react';

export default function PublicViewBanner() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-5 mb-6">
      <div className="flex items-start gap-3">
        <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
          <Eye className="text-blue-600" size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-blue-900 text-sm sm:text-base">
            Public Viewing Mode
          </h3>
          <p className="text-blue-700 text-xs sm:text-sm mt-1">
            You are viewing the dashboard in read-only mode. Task details and completion actions are only available to authenticated staff.
          </p>
        </div>
      </div>
    </div>
  );
}
