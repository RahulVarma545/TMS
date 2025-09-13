import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Calendar,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Plus,
  Filter
} from 'lucide-react';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import DashboardCard from '../components/common/DashboardCard';
import DataTable from '../components/common/DataTable';
import { ThemeProvider } from '../components/common/ThemeProvider';

const ManagerDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    teamMembers: 24,
    activeProjects: 8,
    completedTasks: 156,
    teamPerformance: 87
  });

  const [projects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 75, team: 5, deadline: '2024-02-15' },
    { id: 2, name: 'Mobile App', status: 'Planning', progress: 25, team: 3, deadline: '2024-03-01' },
    { id: 3, name: 'API Integration', status: 'Completed', progress: 100, team: 4, deadline: '2024-01-20' },
    { id: 4, name: 'Database Migration', status: 'In Progress', progress: 60, team: 2, deadline: '2024-02-28' }
  ]);

  const [teamMembers] = useState([
    { id: 1, name: 'Sarah Chen', role: 'Senior Developer', tasks: 8, completed: 6, performance: 92 },
    { id: 2, name: 'Mike Rodriguez', role: 'UI/UX Designer', tasks: 5, completed: 4, performance: 88 },
    { id: 3, name: 'Emma Wilson', role: 'Frontend Developer', tasks: 7, completed: 5, performance: 85 },
    { id: 4, name: 'David Kim', role: 'Backend Developer', tasks: 6, completed: 6, performance: 95 }
  ]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const projectColumns = [
    { key: 'name', label: 'Project Name' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Completed' ? 'bg-green-100 text-green-800' :
          value === 'In Progress' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {value}
        </span>
      )
    },
    { 
      key: 'progress', 
      label: 'Progress',
      render: (value) => (
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm text-gray-600">{value}%</span>
        </div>
      )
    },
    { key: 'team', label: 'Team Size' },
    { key: 'deadline', label: 'Deadline' }
  ];

  const teamColumns = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'tasks', label: 'Active Tasks' },
    { key: 'completed', label: 'Completed' },
    { 
      key: 'performance', 
      label: 'Performance',
      render: (value) => (
        <div className="flex items-center space-x-2">
          <div className="w-12 bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                value >= 90 ? 'bg-green-500' : 
                value >= 80 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm text-gray-600">{value}%</span>
        </div>
      )
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Team Members"
          value={stats.teamMembers}
          change="+2 this month"
          changeType="positive"
          icon={Users}
          color="blue"
          loading={loading}
        />
        <DashboardCard
          title="Active Projects"
          value={stats.activeProjects}
          change="3 due this week"
          changeType="neutral"
          icon={Briefcase}
          color="green"
          loading={loading}
        />
        <DashboardCard
          title="Completed Tasks"
          value={stats.completedTasks}
          change="+15% from last week"
          changeType="positive"
          icon={CheckCircle}
          color="purple"
          loading={loading}
        />
        <DashboardCard
          title="Team Performance"
          value={`${stats.teamPerformance}%`}
          change="+5% improvement"
          changeType="positive"
          icon={TrendingUp}
          color="orange"
          loading={loading}
        />
      </div>

      {/* Project Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Overview</h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">{project.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{project.team} team members</span>
                    <span>Due {project.deadline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Performance</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{member.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {member.completed}/{member.tasks} tasks completed
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              member.performance >= 90 ? 'bg-green-500' : 
                              member.performance >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${member.performance}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{member.performance}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team Overview</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
        </div>
      </div>
      
      <DataTable
        data={teamMembers}
        columns={teamColumns}
        searchable
        sortable
        loading={loading}
      />
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>
      
      <DataTable
        data={projects}
        columns={projectColumns}
        searchable
        sortable
        loading={loading}
      />
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'team':
        return renderTeam();
      case 'projects':
        return renderProjects();
      case 'performance':
        return <div className="text-center py-12 text-gray-500">Performance analytics coming soon...</div>;
      case 'calendar':
        return <div className="text-center py-12 text-gray-500">Calendar view coming soon...</div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar
          userRole="Manager"
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={() => console.log('Logout')}
        />
        
        <div className="ml-280">
          <Header
            user={{ name: 'Manager User', email: 'manager@company.com', role: 'Team Manager' }}
            notifications={[
              { title: 'Project deadline approaching', message: 'Website Redesign due in 3 days', time: '1 hour ago', read: false },
              { title: 'Team member completed task', message: 'Sarah Chen finished API integration', time: '2 hours ago', read: true }
            ]}
            onProfileClick={() => console.log('Profile clicked')}
            onLogout={() => console.log('Logout')}
          />
          
          <main className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderContent()}
            </motion.div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ManagerDashboard;
