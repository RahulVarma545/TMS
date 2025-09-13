import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  TrendingUp, 
  Calendar,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Search,
  Filter,
  FileText
} from 'lucide-react';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import DashboardCard from '../components/common/DashboardCard';
import DataTable from '../components/common/DataTable';
import { ThemeProvider } from '../components/common/ThemeProvider';

const HRDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalEmployees: 247,
    newHires: 12,
    attendanceRate: 94.5,
    openPositions: 8
  });

  const [employees] = useState([
    { id: 1, name: 'John Doe', department: 'Engineering', position: 'Senior Developer', joinDate: '2023-01-15', status: 'Active', attendance: 96 },
    { id: 2, name: 'Sarah Chen', department: 'Design', position: 'UI/UX Designer', joinDate: '2023-03-20', status: 'Active', attendance: 98 },
    { id: 3, name: 'Mike Rodriguez', department: 'Marketing', position: 'Marketing Manager', joinDate: '2022-11-10', status: 'Active', attendance: 92 },
    { id: 4, name: 'Emma Wilson', department: 'Engineering', position: 'Frontend Developer', joinDate: '2023-06-01', status: 'On Leave', attendance: 89 }
  ]);

  const [candidates] = useState([
    { id: 1, name: 'Alex Johnson', position: 'Backend Developer', stage: 'Interview', experience: '5 years', applied: '2024-01-15' },
    { id: 2, name: 'Lisa Wang', position: 'Product Manager', stage: 'Technical Review', experience: '7 years', applied: '2024-01-12' },
    { id: 3, name: 'David Brown', position: 'Data Analyst', stage: 'HR Review', experience: '3 years', applied: '2024-01-10' },
    { id: 4, name: 'Maria Garcia', position: 'QA Engineer', stage: 'Final Interview', experience: '4 years', applied: '2024-01-08' }
  ]);

  const [recentActivities] = useState([
    { id: 1, type: 'hire', message: 'New employee onboarded: Alex Johnson', time: '2 hours ago' },
    { id: 2, type: 'review', message: 'Performance review completed for Sarah Chen', time: '1 day ago' },
    { id: 3, type: 'leave', message: 'Leave request approved for Mike Rodriguez', time: '2 days ago' },
    { id: 4, type: 'interview', message: 'Interview scheduled with Lisa Wang', time: '3 days ago' }
  ]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const employeeColumns = [
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department' },
    { key: 'position', label: 'Position' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' :
          value === 'On Leave' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    { 
      key: 'attendance', 
      label: 'Attendance',
      render: (value) => (
        <div className="flex items-center space-x-2">
          <div className="w-12 bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                value >= 95 ? 'bg-green-500' : 
                value >= 90 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm text-gray-600">{value}%</span>
        </div>
      )
    },
    { key: 'joinDate', label: 'Join Date' }
  ];

  const candidateColumns = [
    { key: 'name', label: 'Name' },
    { key: 'position', label: 'Position' },
    { 
      key: 'stage', 
      label: 'Stage',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Final Interview' ? 'bg-green-100 text-green-800' :
          value === 'Interview' ? 'bg-blue-100 text-blue-800' :
          value === 'Technical Review' ? 'bg-purple-100 text-purple-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'experience', label: 'Experience' },
    { key: 'applied', label: 'Applied Date' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Employees"
          value={stats.totalEmployees}
          change="+8 this month"
          changeType="positive"
          icon={Users}
          color="blue"
          loading={loading}
        />
        <DashboardCard
          title="New Hires"
          value={stats.newHires}
          change="This month"
          changeType="positive"
          icon={UserPlus}
          color="green"
          loading={loading}
        />
        <DashboardCard
          title="Attendance Rate"
          value={`${stats.attendanceRate}%`}
          change="+2.1% from last month"
          changeType="positive"
          icon={CheckCircle}
          color="purple"
          loading={loading}
        />
        <DashboardCard
          title="Open Positions"
          value={stats.openPositions}
          change="5 urgent"
          changeType="neutral"
          icon={AlertCircle}
          color="orange"
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
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Add Employee</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Onboard new team member</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Performance Review</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Conduct employee evaluation</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Generate Report</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Create HR analytics report</p>
            </div>
          </div>
        </motion.div>
      </div>
export default HRDashboard;

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
                  activity.type === 'hire' ? 'bg-green-500' :
                  activity.type === 'review' ? 'bg-blue-500' :
                  activity.type === 'leave' ? 'bg-yellow-500' :
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
  );

  const renderEmployees = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Employee Management</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <UserPlus className="w-4 h-4" />
            <span>Add Employee</span>
          </button>
        </div>
      </div>
      
      <DataTable
        data={employees}
        columns={employeeColumns}
        searchable
        sortable
        loading={loading}
      />
    </div>
  );

  const renderRecruitment = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recruitment</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          <UserPlus className="w-4 h-4" />
          <span>Post Job</span>
        </button>
      </div>
      
      <DataTable
        data={candidates}
        columns={candidateColumns}
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
      case 'employees':
        return renderEmployees();
      case 'recruitment':
        return renderRecruitment();
      case 'performance':
        return <div className="text-center py-12 text-gray-500">Performance management coming soon...</div>;
      case 'reports':
        return <div className="text-center py-12 text-gray-500">HR reports coming soon...</div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar
          userRole="HR"
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={() => console.log('Logout')}
        />
        
        <div className="ml-280">
          <Header
            user={{ name: 'HR Manager', email: 'hr@company.com', role: 'HR Manager' }}
            notifications={[
              { title: 'New job application', message: 'Alex Johnson applied for Backend Developer', time: '30 minutes ago', read: false },
              { title: 'Performance review due', message: 'Sarah Chen review due tomorrow', time: '2 hours ago', read: true }
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