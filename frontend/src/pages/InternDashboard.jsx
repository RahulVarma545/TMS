import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  Target, 
  BookOpen, 
  MessageCircle, 
  User, 
  Settings, 
  FileText,
  TrendingUp,
  Award,
  CheckCircle,
  Clock3,
  AlertCircle,
  Users,
  Bell,
  Zap,
  Star,
  Trophy,
  Lightbulb
} from 'lucide-react';
import TaskOverview from '../components/intern/TaskOverview';
import PerformanceMetrics from '../components/intern/PerformanceMetrics';
import FeedbackSection from '../components/intern/FeedbackSection';
import LearningResources from '../components/intern/LearningResources';
import AttendanceTracker from '../components/intern/AttendanceTracker';
import CommunicationHub from '../components/intern/CommunicationHub';
import GoalsMilestones from '../components/intern/GoalsMilestones';
import ProfileSettings from '../components/intern/ProfileSettings';
import ReportGenerator from '../components/intern/ReportGenerator';
import ModernSidebar from '../components/common/ModernSidebar';
import ModernHeader from '../components/common/ModernHeader';
import { ThemeProvider } from '../components/common/ThemeProvider';

const InternDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    role: 'Software Development Intern',
    department: 'Engineering',
    startDate: '2024-01-15',
    avatar: '/api/placeholder/32/32'
  });

  const [stats, setStats] = useState({
    totalTasks: 12,
    completedTasks: 8,
    pendingTasks: 3,
    inProgressTasks: 1,
    attendanceRate: 95,
    avgTaskCompletionTime: 2.5,
    feedbackScore: 4.7,
    learningHours: 15
  });

  const navigationItems = [
    { id: 'overview', label: 'Task Overview', icon: Target },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'feedback', label: 'Feedback', icon: Award },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'attendance', label: 'Attendance', icon: Clock },
    { id: 'communication', label: 'Team Hub', icon: Users },
    { id: 'goals', label: 'Goals', icon: CheckCircle },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'overview':
        return <TaskOverview stats={stats} />;
      case 'performance':
        return <PerformanceMetrics stats={stats} />;
      case 'feedback':
        return <FeedbackSection />;
      case 'learning':
        return <LearningResources />;
      case 'attendance':
        return <AttendanceTracker />;
      case 'communication':
        return <CommunicationHub />;
      case 'goals':
        return <GoalsMilestones />;
      case 'reports':
        return <ReportGenerator />;
      case 'profile':
        return <ProfileSettings user={user} />;
      default:
        return <TaskOverview stats={stats} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <ModernSidebar
          userRole="Intern"
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onLogout={() => console.log('Logout')}
        />
        
        <ModernHeader
          user={user}
          notifications={[
            { title: 'New learning module available', message: 'Advanced React Patterns is now ready', time: '10 minutes ago', read: false },
            { title: 'Task deadline reminder', message: 'API Integration task due tomorrow', time: '1 hour ago', read: false },
            { title: 'Feedback received', message: 'Your mentor left feedback on your latest work', time: '2 hours ago', read: true }
          ]}
          onProfileClick={() => setActiveSection('profile')}
          onLogout={() => console.log('Logout')}
          sidebarCollapsed={sidebarCollapsed}
        />


        <main className={`pt-20 p-8 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-280'
        }`}>
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-8 mb-8 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
            <div className="relative flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-6 h-6 text-yellow-300" />
                  <span className="text-yellow-200 text-sm font-medium">Learning Journey</span>
                </div>
                <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}!</h1>
                <p className="text-white/90 text-lg">
                  You're making amazing progress in your <span className="font-bold">{user.role}</span> journey!
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-center">
                  <Trophy className="w-8 h-8 text-yellow-300 mx-auto mb-1" />
                  <div className="text-2xl font-bold">Level 3</div>
                  <div className="text-white/80 text-sm">Achiever</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-orange-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                  <CheckCircle className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed Tasks</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.completedTasks}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-yellow-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-lg">
                  <Clock3 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Tasks</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.pendingTasks}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-blue-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Attendance</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.attendanceRate}%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-purple-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Feedback Score</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.feedbackScore}/5</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Active Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-xl p-8"
          >
            {renderActiveSection()}
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  );
};
          </div>
        </main>
      </div>
      {/* Decorative bottom shape */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 opacity-20 blur-3xl z-0" />
    </div>
  );
};

export default InternDashboard;
