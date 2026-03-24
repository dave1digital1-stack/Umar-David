import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, MapPin, Smartphone, Tag, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Menu', path: '/menu', icon: Menu },
    { name: 'Deals', path: '/deals', icon: Tag },
    { name: 'Stores', path: '/stores', icon: MapPin },
    { name: 'App', path: '/app', icon: Smartphone },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-mcd-red rounded-lg flex items-center justify-center">
            <span className="text-mcd-yellow font-black text-2xl italic">M</span>
          </div>
          <span className={cn(
            "font-black text-xl tracking-tighter",
            scrolled ? "text-mcd-red" : "text-white drop-shadow-md"
          )}>
            McD Ibadan
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-bold transition-colors",
                location.pathname === link.path 
                  ? "text-mcd-red" 
                  : scrolled ? "text-mcd-black hover:text-mcd-red" : "text-white hover:text-mcd-yellow"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-secondary py-2 px-4 text-sm">
            <ShoppingCart size={18} />
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2", scrolled ? "text-mcd-black" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 p-3 rounded-xl font-bold",
                    location.pathname === link.path ? "bg-mcd-red/10 text-mcd-red" : "text-mcd-black"
                  )}
                >
                  <link.icon size={20} />
                  {link.name}
                </Link>
              ))}
              <button className="btn-primary w-full mt-2">
                <ShoppingCart size={20} />
                Start Your Order
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
