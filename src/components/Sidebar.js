import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  FolderIcon, 
  UserIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ onClose }) => {
  const navigation = [
    { name: 'Overview', href: '/', icon: HomeIcon },
    { name: 'Projects', href: '/projects', icon: FolderIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
  ];

  return (
    <div className="flex flex-col w-64 h-full bg-gray-800">
      <div className="flex flex-col h-0 flex-1">
        <div className="flex items-center justify-between flex-shrink-0 px-4 py-4 border-b border-gray-700">
          <h1 className="text-white text-xl font-bold">Dashboard</h1>
          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={onClose} // Close sidebar on mobile when clicking a link
                className={({ isActive }) =>
                  `group flex items-center px-2 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                <item.icon
                  className="mr-3 flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
