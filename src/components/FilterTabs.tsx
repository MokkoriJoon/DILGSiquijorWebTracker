import { useState } from 'react';

interface FilterTab {
  label: string;
  icon: string;
  key: string;
}

export default function FilterTabs() {
  const tabs: FilterTab[] = [
    { label: 'All Upcoming', icon: '', key: 'all' },
    { label: 'Daily', icon: '🔄', key: 'daily' },
    { label: 'Weekly', icon: '📅', key: 'weekly' },
    { label: 'Monthly', icon: '📅', key: 'monthly' },
    { label: 'Quarterly', icon: '📊', key: 'quarterly' },
    { label: 'Semester', icon: '📅', key: 'semester' },
    { label: 'Yearly', icon: '🎯', key: 'yearly' },
    { label: 'One-time', icon: '📌', key: 'one-time' },
  ];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === tab.key
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
