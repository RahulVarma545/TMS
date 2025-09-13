import React from 'react';
import { motion } from 'framer-motion';

const DashboardCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon: Icon, 
  color = 'blue',
  loading = false,
  onClick,
  children,
  className = ''
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-yellow-500',
    red: 'from-red-500 to-pink-500',
    gray: 'from-gray-500 to-slate-500'
  };

  const changeColors = {
    positive: 'text-green-600 bg-green-100 dark:bg-green-900/20',
    negative: 'text-red-600 bg-red-100 dark:bg-red-900/20',
    neutral: 'text-gray-600 bg-gray-100 dark:bg-gray-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700
        ${onClick ? 'cursor-pointer hover:shadow-xl' : ''}
        ${loading ? 'loading' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            {Icon && (
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses[color]} flex items-center justify-center shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {title}
              </h3>
              {value && (
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {loading ? (
                    <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  ) : (
                    value
                  )}
                </p>
              )}
            </div>
          </div>

          {change && (
            <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${changeColors[changeType]}`}>
              <span className="mr-1">
                {changeType === 'positive' ? '↗' : changeType === 'negative' ? '↘' : '→'}
              </span>
              {change}
            </div>
          )}

          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;