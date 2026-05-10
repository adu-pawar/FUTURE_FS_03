import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import AuthModal from '../auth/AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout, isAdmin } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black italic tracking-tighter text-white">
              TITAN<span className="text-primary">FITNESS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-300 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link to={isAdmin ? "/admin" : "/dashboard"} className="text-gray-300 hover:text-primary transition-colors">
                  <User size={20} />
                </Link>
                <button onClick={logout} className="text-gray-300 hover:text-primary transition-colors">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
              >
                Join Now
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass absolute w-full left-0 top-full py-6 px-4 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-primary transition-colors font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
            {currentUser ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-gray-300 font-medium text-lg">Dashboard</Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="text-left text-primary font-medium text-lg">Logout</button>
              </>
            ) : (
              <button 
                onClick={() => { setIsAuthOpen(true); setIsOpen(false); }}
                className="bg-primary text-white px-6 py-3 rounded-full font-bold"
              >
                Join Now
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
};

export default Navbar;
