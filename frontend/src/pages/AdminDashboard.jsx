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
  Lock,
  Zap,
  Globe,
  Server,
  Eye
} from 'lucide-react';
import ModernSidebar from '../components/common/ModernSidebar';
import ModernHeader from '../components/common/ModernHeader';
import ModernDashboardCard from '../components/common/ModernDashboardCard';
import DataTable from '../components/common/DataTable';
import { ThemeProvider } from '../components/common/ThemeProvider';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeUsers: 892,
    systemHealth: 98.5,
    securityAlerts: 3,
    serverUptime: 99.9,
    dataProcessed: '2.4TB'
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
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Administrator!</h1>
          <p className="text-white/90 text-lg">
            System running smoothly with {stats.activeUsers} active users online
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ModernDashboardCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          gradient="from-blue-500 to-cyan-500"
          loading={loading}
        />
        <ModernDashboardCard
          title="Active Users"
          value={stats.activeUsers.toLocaleString()}
          change="+8% from last month"
          changeType="positive"
          icon={Activity}
          gradient="from-green-500 to-emerald-500"
          loading={loading}
        />
        <ModernDashboardCard
          title="System Health"
          value={`${stats.systemHealth}%`}
          change="Excellent"
          changeType="positive"
          icon={Server}
          gradient="from-purple-500 to-pink-500"
          loading={loading}
        />
        <ModernDashboardCard
          title="Security Alerts"
          value={stats.securityAlerts}
          change="2 resolved today"
          changeType="neutral"
          icon={AlertTriangle}
          gradient="from-orange-500 to-red-500"
          loading={loading}
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Users */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Users</h3>
              <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                <Eye className="w-4 h-4" />
                <span>View All</span>
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
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
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/20' : 'bg-red-100 text-red-800 dark:bg-red-900/20'
                    }`}>
                      {user.status}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {user.lastLogin}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* System Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Metrics</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.serverUptime}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
                <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.dataProcessed}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Processed</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">CPU Usage</span>
                  <span className="font-medium text-gray-900 dark:text-white">45%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Memory Usage</span>
                  <span className="font-medium text-gray-900 dark:text-white">67%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '67%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Storage Usage</span>
                  <span className="font-medium text-gray-900 dark:text-white">23%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '23%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Alerts</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {systemAlerts.map((alert) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl"
              >
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  alert.type === 'error' ? 'bg-red-500' :
                  alert.type === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {alert.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {alert.time}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <Settings className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage system users and their permissions</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300"
        >
          <UserPlus className="w-5 h-5" />
          <span>Add User</span>
        </motion.button>
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <ModernSidebar
          userRole="Admin"
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onLogout={() => console.log('Logout')}
        />
        
        <ModernHeader
          user={{ name: 'Admin User', email: 'admin@company.com', role: 'System Administrator' }}
          notifications={[
            { title: 'New user registered', message: 'John Doe has joined the system', time: '5 minutes ago', read: false },
            { title: 'System backup completed', message: 'Daily backup finished successfully', time: '1 hour ago', read: true },
            { title: 'Security alert resolved', message: 'Suspicious login attempt blocked', time: '2 hours ago', read: true }
          ]}
          onProfileClick={() => console.log('Profile clicked')}
          onLogout={() => console.log('Logout')}
          sidebarCollapsed={sidebarCollapsed}
        />
        
        <main className={`pt-20 p-8 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-280'
        }`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default AdminDashboard;