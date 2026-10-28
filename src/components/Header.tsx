import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <header className="bg-[#1e3a8a] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side: Logo + Title */}
          <div className="flex items-center gap-4">
            {/* DILG Logo Circle */}
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                <span className="text-white font-bold text-xs text-center leading-tight">DILG</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">D.E.N.N.I.S</h1>
              <p className="text-blue-200 text-xs leading-tight hidden sm:block">
                DILG Employee Navigation & Notices Information System
              </p>
            </div>
          </div>

          {/* Right side: Login Button */}
          {!isAuthPage && (
            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Shield size={18} />
              <span className="hidden sm:inline">Staff Login</span>
              <span className="sm:hidden">Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
