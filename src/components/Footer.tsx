import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-mcd-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-mcd-red rounded-xl flex items-center justify-center">
                <span className="text-mcd-yellow font-black text-3xl italic">M</span>
              </div>
              <span className="font-black text-2xl tracking-tighter">McD Ibadan</span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Serving the freshest burgers and crispiest fries in the heart of Ibadan. Quality you can taste, speed you can trust.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-mcd-red transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-xl mb-8 uppercase italic tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/menu" className="hover:text-mcd-yellow transition-colors">Full Menu</Link></li>
              <li><Link to="/deals" className="hover:text-mcd-yellow transition-colors">Exclusive Deals</Link></li>
              <li><Link to="/stores" className="hover:text-mcd-yellow transition-colors">Store Locator</Link></li>
              <li><Link to="/app" className="hover:text-mcd-yellow transition-colors">Mobile App</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-black text-xl mb-8 uppercase italic tracking-wider">Support</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-mcd-yellow transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-mcd-yellow transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-mcd-yellow transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-mcd-yellow transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-black text-xl mb-8 uppercase italic tracking-wider">Stay Updated</h4>
            <p className="text-gray-400 mb-6">Get the latest deals and menu items delivered to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full bg-white/10 border-none rounded-xl py-4 px-4 text-sm focus:ring-2 focus:ring-mcd-red"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-mcd-red p-2 rounded-lg hover:bg-red-700 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
          <p>© 2026 McDonald's Ibadan. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
