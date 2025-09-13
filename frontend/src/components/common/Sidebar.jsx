import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  Calendar, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  Shield,
  Briefcase,
  GraduationCap,
  Building
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Sidebar = ({ userRole, activeSection, onSectionChange, onLogout }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const roleConfigs = {
    Admin: {
      color: 'from-red-500 to-pink-500',
      icon: Shield,
      sections: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'users', label: 'User Management', icon: Users },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'settings', label: 'Settings', icon: Settings }
      ]
    },
    Manager: {
      color: 'from-green-500 to-emerald-500',
      icon: Building,
      sections: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'team', label: 'Team Overview', icon: Users },
        { id: 'projects', label: 'Projects', icon: Briefcase },
        { id: 'performance', label: 'Performance', icon: BarChart3 },
        { id: 'calendar', label: 'Calendar', icon: Calendar }
      ]
    },
    HR: {
      color: 'from-blue-500 to-cyan-500',
      icon: User,
      sections: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'employees', label: 'Employees', icon: Users },
        { id: 'recruitment', label: 'Recruitment', icon: Search },
        { id: 'performance', label: 'Performance', icon: BarChart3 },
        { id: 'reports', label: 'Reports', icon: BarChart3 }
      ]
    },
    Employee: {
      color: 'from-purple-500 to-violet-500',
      icon: Briefcase,
      sections: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'tasks', label: 'My Tasks', icon: Calendar },
        { id: 'team', label: 'Team', icon: Users },
        { id: 'performance', label: 'Performance', icon: BarChart3 },
        { id: 'profile', label: 'Profile', icon: User }
      ]
    },
    Intern: {
      color: 'from-orange-500 to-yellow-500',
      icon: GraduationCap,
      sections: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'learning', label: 'Learning', icon: GraduationCap },
        { id: 'tasks', label: 'Tasks', icon: Calendar },
        { id: 'mentorship', label: 'Mentorship', icon: Users },
        { id: 'progress', label: 'Progress', icon: BarChart3 }
      ]
    }
  };

  const config = roleConfigs[userRole] || roleConfigs.Employee;
  const RoleIcon = config.icon;

  return (
    <motion.div
      initial={{ x: -280 }}
      animate={{ x: 0, width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-r border-gray-200 dark:border-gray-700`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-3"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${config.color} flex items-center justify-center shadow-lg`}>
                  <RoleIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">TMS Pro</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{userRole}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {config.sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <motion.button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? `bg-gradient-to-r ${config.color} text-white shadow-lg`
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="font-medium"
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-medium"
              >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        
        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-medium"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;