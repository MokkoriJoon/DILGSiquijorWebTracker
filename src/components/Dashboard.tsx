import PublicViewBanner from './PublicViewBanner';
import StatsCards from './StatsCards';
import FilterTabs from './FilterTabs';
import UpcomingTasks from './UpcomingTasks';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Public Viewing Mode Banner */}
      <PublicViewBanner />

      {/* Stats Cards */}
      <StatsCards />

      {/* Filter Tabs */}
      <FilterTabs />

      {/* Upcoming Tasks Section */}
      <UpcomingTasks />
    </div>
  );
}
