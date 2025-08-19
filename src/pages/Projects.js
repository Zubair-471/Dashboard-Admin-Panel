import React, { useState } from 'react';
import { 
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'E-commerce Website',
      client: 'TechCorp Inc.',
      status: 'completed',
      progress: 100,
      budget: 5000,
      startDate: '2024-01-15',
      endDate: '2024-03-20',
      description: 'Full-stack e-commerce website with payment integration and admin panel.'
    },
    {
      id: 2,
      name: 'Mobile App Design',
      client: 'StartupXYZ',
      status: 'in-progress',
      progress: 75,
      budget: 3500,
      startDate: '2024-02-01',
      endDate: '2024-04-15',
      description: 'UI/UX design for a mobile application with modern interface.'
    },
    {
      id: 3,
      name: 'Logo Design',
      client: 'BrandNew Co.',
      status: 'completed',
      progress: 100,
      budget: 800,
      startDate: '2024-01-20',
      endDate: '2024-02-05',
      description: 'Brand identity and logo design for a new company.'
    },
    {
      id: 4,
      name: 'UI/UX Design',
      client: 'DigitalAgency',
      status: 'pending',
      progress: 0,
      budget: 2800,
      startDate: '2024-04-01',
      endDate: '2024-05-30',
      description: 'Complete user interface and experience design for web application.'
    },
    {
      id: 5,
      name: 'Content Management System',
      client: 'MediaCorp',
      status: 'in-progress',
      progress: 45,
      budget: 4200,
      startDate: '2024-03-01',
      endDate: '2024-06-15',
      description: 'Custom CMS with advanced features and user management.'
    },
    {
      id: 6,
      name: 'Portfolio Website',
      client: 'CreativeStudio',
      status: 'on-hold',
      progress: 30,
      budget: 1500,
      startDate: '2024-02-15',
      endDate: '2024-04-01',
      description: 'Personal portfolio website with modern design and animations.'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'on-hold':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      case 'on-hold':
        return 'On Hold';
      default:
        return status;
    }
  };

  const filteredProjects = selectedStatus === 'all' 
    ? projects 
    : projects.filter(project => project.status === selectedStatus);

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">Manage your freelance projects and track their progress.</p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
            <PlusIcon className="h-5 w-5" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex space-x-2">
          {['all', 'completed', 'in-progress', 'pending', 'on-hold'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedStatus === status
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {status === 'all' ? 'All' : getStatusText(status)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.client}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-medium">${project.budget.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Start Date:</span>
                  <span>{new Date(project.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">End Date:</span>
                  <span>{new Date(project.endDate).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-indigo-50 text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 flex items-center justify-center space-x-1">
                  <EyeIcon className="h-4 w-4" />
                  <span>View</span>
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
                  <PencilIcon className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button className="bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found with the selected status.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
