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
  Building,
  Zap,
  Target,
  Award,
  Clock,
  MessageSquare,
  FileText,
  TrendingUp
} from 'lucide-react';

const ModernSidebar = ({ userRole, activeSection, onSectionChange, onLogout, collapsed = false, onToggleCollapse }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const roleConfigs = {
    Admin: {
      color: 'from-red-500 to-pink-500',
      icon: Shield,
      sections: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'users', label: 'User Management', icon: Users },
        { id: 'analytics', label: 'System Analytics', icon: BarChart3 },
        { id: 'security', label: 'Security Center', icon: Shield },
        { id: 'settings', label: 'System Settings', icon: Settings }
      ]
    },
    Manager: {
      color: 'from-green-500 to-emerald-500',
      icon: Building,
      sections: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'team', label: 'Team Overview', icon: Users },
        { id: 'projects', label: 'Project Management', icon: Briefcase },
        { id: 'performance', label: 'Performance Hub', icon: TrendingUp },
        { id: 'calendar', label: 'Schedule', icon: Calendar }
      ]
    },
    HR: {
      color: 'from-blue-500 to-cyan-500',
      icon: User,
      sections: [
        { id: 'dashboard', label: 'HR Dashboard', icon: Home },
        { id: 'employees', label: 'Employee Records', icon: Users },
        { id: 'recruitment', label: 'Talent Acquisition', icon: Search },
        { id: 'performance', label: 'Performance Reviews', icon: Award },
        { id: 'reports', label: 'HR Analytics', icon: BarChart3 }
      ]
    },
    Employee: {
      color: 'from-purple-500 to-violet-500',
      icon: Briefcase,
      sections: [
        { id: 'dashboard', label: 'My Workspace', icon: Home },
        { id: 'tasks', label: 'Task Center', icon: Target },
        { id: 'team', label: 'Team Hub', icon: Users },
        { id: 'performance', label: 'My Performance', icon: TrendingUp },
        { id: 'profile', label: 'Profile Settings', icon: User }
      ]
    },
    Intern: {
      color: 'from-orange-500 to-yellow-500',
      icon: GraduationCap,
      sections: [
        { id: 'overview', label: 'Learning Hub', icon: Home },
        { id: 'learning', label: 'Resources', icon: GraduationCap },
        { id: 'tasks', label: 'Assignments', icon: Target },
        { id: 'mentorship', label: 'Mentorship', icon: Users },
        { id: 'progress', label: 'Progress Tracker', icon: TrendingUp }
      ]
    }
  };

  const config = roleConfigs[userRole] || roleConfigs.Employee;
  const RoleIcon = config.icon;

  const sidebarVariants = {
    expanded: { width: 280 },
    collapsed: { width: 80 }
  };

  const contentVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 }
  };

  return (
    <motion.div
      variants={sidebarVariants}
      animate={collapsed ? 'collapsed' : 'expanded'}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-full bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-r border-gray-200 dark:border-gray-700"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="flex items-center space-x-3"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${config.color} flex items-center justify-center shadow-lg`}>
                  <RoleIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">TMS Pro</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{userRole} Portal</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {config.sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <motion.button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              onMouseEnter={() => setHoveredItem(section.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 relative ${
                isActive
                  ? `bg-gradient-to-r ${config.color} text-white shadow-lg`
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
              
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="font-medium"
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Tooltip for collapsed state */}
              <AnimatePresence>
                {collapsed && hoveredItem === section.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50"
                  >
                    {section.label}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="space-y-2"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Quick Actions</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <MessageSquare className="w-4 h-4 text-gray-600 dark:text-gray-400 mx-auto" />
                  </button>
                  <button className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Bell className="w-4 h-4 text-gray-600 dark:text-gray-400 mx-auto" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut className="w-6 h-6" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="font-medium"
              >
                Sign Out
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
};

export default ModernSidebar;