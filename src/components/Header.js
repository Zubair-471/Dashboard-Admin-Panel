import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Mock notification data
  const notifications = [
    {
      id: 1,
      message: 'New project "E-commerce Website" assigned',
      time: '2 hours ago',
      type: 'project'
    },
    {
      id: 2,
      message: 'Payment received for "Mobile App Design"',
      time: '1 day ago',
      type: 'payment'
    },
    {
      id: 3,
      message: 'Client feedback on "Logo Design" project',
      time: '2 days ago',
      type: 'feedback'
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notification Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <BellIcon className="h-6 w-6" />
                <span className="sr-only">View notifications</span>
              </button>

              {isNotificationOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="text-sm font-medium text-gray-900">Recent Activities</h3>
                    </div>
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className={`w-2 h-2 rounded-full ${
                              notification.type === 'project' ? 'bg-blue-400' :
                              notification.type === 'payment' ? 'bg-green-400' :
                              'bg-yellow-400'
                            }`}></div>
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="text-sm text-gray-900">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="px-4 py-2 border-t border-gray-200">
                      <button className="text-sm text-indigo-600 hover:text-indigo-500">
                        View all notifications
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">MZ</span>
              </div>
              <span className="text-sm font-medium text-gray-700">M. Zubair Tariq</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
