import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { 
  CurrencyDollarIcon, 
  FolderIcon, 
  ClockIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const Overview = () => {
  // Mock data for charts
  const earningsData = [
    { month: 'Jan', earnings: 4000 },
    { month: 'Feb', earnings: 3000 },
    { month: 'Mar', earnings: 5000 },
    { month: 'Apr', earnings: 4500 },
    { month: 'May', earnings: 6000 },
    { month: 'Jun', earnings: 5500 },
  ];

  const projectStatusData = [
    { status: 'Completed', count: 12 },
    { status: 'In Progress', count: 8 },
    { status: 'Pending', count: 3 },
    { status: 'On Hold', count: 2 },
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Completed project "E-commerce Website"',
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: 2,
      action: 'Started work on "Mobile App Design"',
      time: '1 day ago',
      type: 'info'
    },
    {
      id: 3,
      action: 'Received payment for "Logo Design"',
      time: '2 days ago',
      type: 'success'
    },
    {
      id: 4,
      action: 'Client feedback on "UI/UX Design"',
      time: '3 days ago',
      type: 'warning'
    }
  ];

  const stats = [
    {
      name: 'Total Earnings',
      value: '$24,500',
      change: '+12%',
      changeType: 'positive',
      icon: CurrencyDollarIcon,
      color: 'bg-green-500'
    },
    {
      name: 'Active Projects',
      value: '8',
      change: '+2',
      changeType: 'positive',
      icon: FolderIcon,
      color: 'bg-blue-500'
    },
    {
      name: 'Hours Worked',
      value: '156',
      change: '+8%',
      changeType: 'positive',
      icon: ClockIcon,
      color: 'bg-purple-500'
    },
    {
      name: 'Completed',
      value: '12',
      change: '+1',
      changeType: 'positive',
      icon: CheckCircleIcon,
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your freelance work.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-600 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Earnings Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Earnings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="earnings" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Project Status Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Project Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectStatusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-green-400' :
                  activity.type === 'info' ? 'bg-blue-400' :
                  'bg-yellow-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
