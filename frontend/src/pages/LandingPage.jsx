import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap, 
  Award, 
  Target, 
  UserCheck, 
  Building, 
  LogIn, 
  UserPlus,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  BarChart3,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  ChevronDown,
  Menu,
  X,
  Play
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Team Collaboration",
      description: "AI-powered team coordination with real-time communication and seamless task sharing across all departments",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Intelligent Time Tracking",
      description: "Automated attendance monitoring with smart insights and predictive analytics for better workforce management",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time performance dashboards with AI-driven insights and comprehensive reporting for data-driven decisions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Military-grade security with role-based access control and advanced encryption for complete data protection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Instant notifications, real-time updates, and blazing-fast performance optimized for modern workflows",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Excellence",
      description: "Comprehensive performance tracking with goal setting, feedback systems, and achievement recognition",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const userRoles = [
    {
      id: 'admin',
      title: 'System Administrator',
      description: 'Complete system control and management',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-red-500 to-pink-500',
      features: ['User Management', 'System Configuration', 'Security Controls', 'Advanced Analytics'],
      users: '2.5K+',
      satisfaction: '98%'
    },
    {
      id: 'hr',
      title: 'HR Professional',
      description: 'Streamlined human resource operations',
      icon: <UserCheck className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Employee Records', 'Recruitment Pipeline', 'Performance Reviews', 'Compliance Tracking'],
      users: '8.2K+',
      satisfaction: '96%'
    },
    {
      id: 'manager',
      title: 'Team Manager',
      description: 'Powerful team and project oversight',
      icon: <Building className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      features: ['Team Analytics', 'Project Management', 'Resource Planning', 'Performance Monitoring'],
      users: '15.7K+',
      satisfaction: '97%'
    },
    {
      id: 'employee',
      title: 'Team Member',
      description: 'Intuitive personal workspace',
      icon: <Briefcase className="w-8 h-8" />,
      gradient: 'from-purple-500 to-violet-500',
      features: ['Task Management', 'Time Tracking', 'Team Collaboration', 'Personal Dashboard'],
      users: '45.3K+',
      satisfaction: '95%'
    },
    {
      id: 'intern',
      title: 'Intern & Trainee',
      description: 'Comprehensive learning platform',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-orange-500 to-yellow-500',
      features: ['Learning Modules', 'Mentorship Tools', 'Progress Tracking', 'Skill Development'],
      users: '12.1K+',
      satisfaction: '94%'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director at TechCorp",
      content: "TMS Pro has revolutionized our HR operations. The automation and insights have saved us countless hours.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Team Lead at StartupXYZ",
      content: "The best team management solution we've ever used. Our productivity increased by 40% in just 3 months.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      content: "Incredible platform! The real-time analytics and reporting features are game-changing for our business.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Zap className="w-6 h-6" /> },
    { number: "40%", label: "Productivity Boost", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <MessageSquare className="w-6 h-6" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">TMS Pro</span>
              <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs rounded-full font-semibold">
                2025
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#roles" className="text-white/80 hover:text-white transition-colors">Solutions</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Reviews</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <Link 
                to="/login" 
                className="text-white/80 hover:text-white transition-colors flex items-center space-x-1"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-4">
                <a href="#features" className="block text-white/80 hover:text-white transition-colors">Features</a>
                <a href="#roles" className="block text-white/80 hover:text-white transition-colors">Solutions</a>
                <a href="#testimonials" className="block text-white/80 hover:text-white transition-colors">Reviews</a>
                <Link to="/login" className="block text-white/80 hover:text-white transition-colors">Sign In</Link>
                <Link to="/register" className="block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-center">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-white/90 text-sm">Trusted by 50,000+ teams worldwide</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI-Driven Success.
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Redefining the Future.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
                Transform your team management with intelligent automation, 
                real-time insights, and seamless collaboration.
              </p>
              
              <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
                Join the next generation of team management with AI-powered solutions 
                that adapt to your workflow and scale with your success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                to="/register"
                className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to manage, track, and optimize your team's performance 
              with cutting-edge AI technology and intuitive design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tailored Solutions for Every Role
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Specialized dashboards and features designed for each role in your organization, 
              from executives to interns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => navigate(`/login?role=${role.id}`)}
              >
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${role.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {role.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                  <p className="text-white/70 mb-6">{role.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {role.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{role.users}</div>
                      <div className="text-xs text-white/60">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{role.satisfaction}</div>
                      <div className="text-xs text-white/60">Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-6">
                    <Link
                      to={`/login?role=${role.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold hover:shadow-lg transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Sign In
                    </Link>
                    <Link
                      to={`/register?role=${role.id}`}
                      className="flex-1 bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-center text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Try Free
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-white/70">
              See what our customers are saying about TMS Pro
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonials[activeTestimonial].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Team?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join thousands of teams already using TMS Pro to streamline operations, 
              boost productivity, and achieve unprecedented success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/login"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </Link>
            </div>
            
            <p className="text-white/50 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">TMS Pro</span>
              </div>
              <p className="text-white/60 mb-6 max-w-md">
                Empowering teams worldwide with intelligent management solutions 
                that drive success and innovation.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a></li>
                <li><a href="#roles" className="text-white/60 hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2025 TMS Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;