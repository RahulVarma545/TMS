import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Calendar,
  Users,
  TrendingUp,
  AlertCircle,
  Plus,
  Filter,
  MessageSquare,
  Target
} from 'lucide-react';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import DashboardCard from '../components/common/DashboardCard';
import DataTable from '../components/common/DataTable';
import { ThemeProvider } from '../components/common/ThemeProvider';

const Employee = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalTasks: 18,
    completedTasks: 12,
    pendingTasks: 4,
    attendanceRate: 96
  });

  const [tasks] = useState([
    { id: 1, title: 'Update user dashboard', description: 'Implement new design for user dashboard', status: 'In Progress', priority: 'High', dueDate: '2024-02-15', assignedBy: 'Sarah Chen' },
    { id: 2, title: 'Fix login bug', description: 'Resolve authentication issue on mobile', status: 'Completed', priority: 'Critical', dueDate: '2024-01-20', assignedBy: 'Mike Rodriguez' },
    { id: 3, title: 'Write API documentation', description: 'Document new REST API endpoints', status: 'Pending', priority: 'Medium', dueDate: '2024-02-20', assignedBy: 'Emma Wilson' },
    { id: 4, title: 'Code review', description: 'Review pull requests from team members', status: 'In Progress', priority: 'Low', dueDate: '2024-02-10', assignedBy: 'David Kim' }
  ]);

  const [teamMembers] = useState([
    { id: 1, name: 'Sarah Chen', role: 'Team Lead', status: 'Online', lastActive: 'Now' },
    { id: 2, name: 'Mike Rodriguez', role: 'Senior Developer', status: 'Away', lastActive: '30 min ago' },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Online', lastActive: '5 min ago' },
    { id: 4, name: 'David Kim', role: 'Backend Developer', status: 'Offline', lastActive: '2 hours ago' }
  ]);

  const [recentActivities] = useState([
    { id: 1, type: 'task', message: 'Completed "Fix login bug" task', time: '2 hours ago' },
    { id: 2, type: 'meeting', message: 'Attended daily standup meeting', time: '1 day ago' },
    { id: 3, type: 'review', message: 'Code review completed for PR #123', time: '2 days ago' },
    { id: 4, type: 'task', message: 'Started working on dashboard update', time: '3 days ago' }
  ]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const taskColumns = [
    { key: 'title', label: 'Task' },
    { key: 'description', label: 'Description' },
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
      key: 'priority', 
      label: 'Priority',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Critical' ? 'bg-red-100 text-red-800' :
          value === 'High' ? 'bg-orange-100 text-orange-800' :
          value === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'assignedBy', label: 'Assigned By' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Tasks"
          value={stats.totalTasks}
          change="4 new this week"
          changeType="positive"
          icon={Target}
          color="blue"
          loading={loading}
        />
        <DashboardCard
          title="Completed Tasks"
          value={stats.completedTasks}
          change="+3 this week"
          changeType="positive"
          icon={CheckCircle}
          color="green"
          loading={loading}
        />
        <DashboardCard
          title="Pending Tasks"
          value={stats.pendingTasks}
          change="2 due today"
          changeType="neutral"
          icon={Clock}
          color="orange"
          loading={loading}
        />
        <DashboardCard
          title="Attendance Rate"
          value={`${stats.attendanceRate}%`}
          change="Excellent"
          changeType="positive"
          icon={Calendar}
          color="purple"
          loading={loading}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Create Task</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Add a new task to your list</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Team Chat</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Connect with team members</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">View Performance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Check your progress</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Tasks */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Tasks</h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {tasks.slice(0, 3).map((task) => (
              <div key={task.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className={`w-3 h-3 rounded-full ${
                  task.status === 'Completed' ? 'bg-green-500' :
                  task.status === 'In Progress' ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">{task.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{task.description}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {task.status}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Due: {task.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Members */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Members</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      member.status === 'Online' ? 'bg-green-500' :
                      member.status === 'Away' ? 'bg-yellow-500' :
                      'bg-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{member.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.status === 'Online' ? 'bg-green-100 text-green-800' :
                      member.status === 'Away' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {member.status}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {member.lastActive}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activities</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'task' ? 'bg-blue-500' :
                    activity.type === 'meeting' ? 'bg-green-500' :
                    'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTasks = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Tasks</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>
      </div>
      
      <DataTable
        data={tasks}
        columns={taskColumns}
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
      case 'tasks':
        return renderTasks();
      case 'team':
        return <div className="text-center py-12 text-gray-500">Team collaboration coming soon...</div>;
      case 'performance':
        return <div className="text-center py-12 text-gray-500">Performance tracking coming soon...</div>;
      case 'profile':
        return <div className="text-center py-12 text-gray-500">Profile settings coming soon...</div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar
          userRole="Employee"
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={() => console.log('Logout')}
        />
        
        <div className="ml-280">
          <Header
            user={{ name: 'Employee User', email: 'employee@company.com', role: 'Software Developer' }}
            notifications={[
              { title: 'New task assigned', message: 'Update user dashboard due Feb 15', time: '1 hour ago', read: false },
              { title: 'Meeting reminder', message: 'Daily standup in 15 minutes', time: '2 hours ago', read: true }
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

export default Employee;