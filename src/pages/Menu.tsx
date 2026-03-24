import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ShoppingCart, Plus, Star, ChevronRight } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { cn } from '../lib/utils';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUpsell, setShowUpsell] = useState<string | null>(null);

  const categories = ['All', 'Burgers', 'Fries', 'Drinks', 'Breakfast', 'Desserts'];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-5xl font-black mb-4 tracking-tighter">OUR MENU</h1>
          <p className="text-gray-500 font-medium">Freshly prepared, just for you in Ibadan.</p>
        </header>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for your favorites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-mcd-red"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all",
                  activeCategory === cat 
                    ? "bg-mcd-red text-white shadow-lg shadow-mcd-red/20" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="card group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-mcd-yellow text-mcd-black text-[10px] font-black px-2 py-1 rounded-md flex items-center gap-1">
                      <Star size={10} fill="currentColor" /> POPULAR
                    </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-lg leading-tight">{item.name}</h3>
                    <span className="font-black text-mcd-red">₦{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-6 line-clamp-2 flex-1">{item.description}</p>
                  
                  <button 
                    onClick={() => setShowUpsell(item.id)}
                    className="btn-primary w-full py-2 text-sm"
                  >
                    <Plus size={16} /> Add to Cart
                  </button>
                </div>

                {/* Smart Upsell Overlay */}
                <AnimatePresence>
                  {showUpsell === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      className="absolute inset-0 bg-white z-10 p-5 flex flex-col"
                    >
                      <button 
                        onClick={() => setShowUpsell(null)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-mcd-black"
                      >
                        <Plus size={24} className="rotate-45" />
                      </button>
                      <h4 className="font-black text-mcd-red mb-1">MAKE IT A MEAL?</h4>
                      <p className="text-xs text-gray-500 mb-4">Add medium fries and a drink for only ₦1500 more!</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl border border-mcd-yellow/30">
                          <img src={MENU_ITEMS.find(f => f.category === 'Fries')?.image} className="w-12 h-12 rounded-lg object-cover" />
                          <div className="flex-1">
                            <p className="text-xs font-bold">Medium Fries</p>
                            <p className="text-[10px] text-gray-400">Golden & Crispy</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl border border-mcd-yellow/30">
                          <img src={MENU_ITEMS.find(f => f.category === 'Drinks')?.image} className="w-12 h-12 rounded-lg object-cover" />
                          <div className="flex-1">
                            <p className="text-xs font-bold">Medium Coke</p>
                            <p className="text-[10px] text-gray-400">Ice Cold Refreshment</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto space-y-2">
                        <button className="btn-secondary w-full py-2 text-sm">
                          Yes, Upgrade Me! (+₦1500)
                        </button>
                        <button 
                          onClick={() => setShowUpsell(null)}
                          className="w-full py-2 text-xs font-bold text-gray-400 hover:text-mcd-black"
                        >
                          No thanks, just the burger
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No items found</h3>
            <p className="text-gray-500">Try searching for something else or change the category.</p>
          </div>
        )}
      </div>

      {/* Sticky Mobile Cart Preview */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
        <button className="btn-primary w-full shadow-2xl flex justify-between items-center px-8">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <ShoppingCart size={20} />
            </div>
            <span className="font-bold">View Cart (2 items)</span>
          </div>
          <span className="font-black">₦5,300</span>
        </button>
      </div>
    </div>
  );
}
