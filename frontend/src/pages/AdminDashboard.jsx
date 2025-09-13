import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Shield, 
  Activity, 
  Database,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Settings,
  UserPlus,
  Lock
} from 'lucide-react';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import DashboardCard from '../components/common/DashboardCard';
import DataTable from '../components/common/DataTable';
import { ThemeProvider } from '../components/common/ThemeProvider';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeUsers: 892,
    systemHealth: 98.5,
    securityAlerts: 3
  });

  const [recentUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@company.com', role: 'Employee', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Sarah Chen', email: 'sarah@company.com', role: 'Manager', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Mike Rodriguez', email: 'mike@company.com', role: 'HR', status: 'Inactive', lastLogin: '3 days ago' },
    { id: 4, name: 'Emma Wilson', email: 'emma@company.com', role: 'Intern', status: 'Active', lastLogin: '5 minutes ago' }
  ]);

  const [systemAlerts] = useState([
    { id: 1, type: 'warning', message: 'High CPU usage detected on server 2', time: '10 minutes ago' },
    { id: 2, type: 'info', message: 'Database backup completed successfully', time: '1 hour ago' },
    { id: 3, type: 'error', message: 'Failed login attempts from IP 192.168.1.100', time: '2 hours ago' }
  ]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const userColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { 
      key: 'role', 
      label: 'Role',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Admin' ? 'bg-red-100 text-red-800' :
          value === 'Manager' ? 'bg-green-100 text-green-800' :
          value === 'HR' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      )
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'lastLogin', label: 'Last Login' }
  ];

  const userActions = [
    { icon: Settings, label: 'Edit', onClick: (user) => console.log('Edit user:', user) },
    { icon: Lock, label: 'Suspend', onClick: (user) => console.log('Suspend user:', user), variant: 'danger' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          color="blue"
          loading={loading}
        />
        <DashboardCard
          title="Active Users"
          value={stats.activeUsers.toLocaleString()}
          change="+8% from last month"
          changeType="positive"
          icon={Activity}
          color="green"
          loading={loading}
        />
        <DashboardCard
          title="System Health"
          value={`${stats.systemHealth}%`}
          change="Excellent"
          changeType="positive"
          icon={Database}
          color="purple"
          loading={loading}
        />
        <DashboardCard
          title="Security Alerts"
          value={stats.securityAlerts}
          change="2 resolved today"
          changeType="neutral"
          icon={AlertTriangle}
          color="orange"
          loading={loading}
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Users</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {user.lastLogin}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Alerts</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.type === 'error' ? 'bg-red-500' :
                    alert.type === 'warning' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {alert.time}
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

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          <UserPlus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>
      
      <DataTable
        data={recentUsers}
        columns={userColumns}
        actions={userActions}
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
      case 'users':
        return renderUsers();
      case 'analytics':
        return <div className="text-center py-12 text-gray-500">Analytics coming soon...</div>;
      case 'security':
        return <div className="text-center py-12 text-gray-500">Security settings coming soon...</div>;
      case 'settings':
        return <div className="text-center py-12 text-gray-500">System settings coming soon...</div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar
          userRole="Admin"
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={() => console.log('Logout')}
        />
        
        <div className="ml-280">
          <Header
            user={{ name: 'Admin User', email: 'admin@company.com', role: 'Administrator' }}
            notifications={[
              { title: 'New user registered', message: 'John Doe has joined the system', time: '5 minutes ago', read: false },
              { title: 'System backup completed', message: 'Daily backup finished successfully', time: '1 hour ago', read: true }
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

export default AdminDashboard;
