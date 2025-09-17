import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const ModernDashboardCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon: Icon, 
  gradient = 'from-blue-500 to-cyan-500',
  loading = false,
  onClick,
  children,
  className = '',
  size = 'default'
}) => {
  const changeColors = {
    positive: 'text-green-600 bg-green-100 dark:bg-green-900/20',
    negative: 'text-red-600 bg-red-100 dark:bg-red-900/20',
    neutral: 'text-gray-600 bg-gray-100 dark:bg-gray-700'
  };

  const changeIcons = {
    positive: TrendingUp,
    negative: TrendingDown,
    neutral: Minus
  };

  const ChangeIcon = changeIcons[changeType];

  const sizeClasses = {
    small: 'p-4',
    default: 'p-6',
    large: 'p-8'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700
        ${onClick ? 'cursor-pointer hover:shadow-2xl' : ''}
        ${loading ? 'animate-pulse' : ''}
        transition-all duration-300
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Icon and Title */}
          <div className="flex items-center space-x-4 mb-4">
            {Icon && (
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                {title}
              </h3>
              {value && (
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {loading ? (
                    <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  ) : (
                    value
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Change Indicator */}
          {change && (
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${changeColors[changeType]}`}>
              <ChangeIcon className="w-4 h-4 mr-1" />
              {change}
            </div>
          )}

          {/* Additional Content */}
          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 rounded-3xl flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </motion.div>
  );
};

export default ModernDashboardCard;