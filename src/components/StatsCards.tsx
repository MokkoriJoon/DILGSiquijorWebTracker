import { ClipboardList, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

interface StatCard {
  label: string;
  value: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

export default function StatsCards() {
  const stats: StatCard[] = [
    {
      label: 'Total Tasks',
      value: 0,
      icon: <ClipboardList size={24} />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      label: 'Completed',
      value: 0,
      icon: <CheckCircle size={24} />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      label: 'Pending',
      value: 0,
      icon: <Clock size={24} />,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      label: 'Overdue',
      value: 0,
      icon: <AlertTriangle size={24} />,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-xs sm:text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <button className="text-blue-600 text-xs mt-2 hover:underline">
                Click to filter
              </button>
            </div>
            <div className={`${stat.iconBg} ${stat.iconColor} rounded-full p-3`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
