import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, Search, ExternalLink } from 'lucide-react';
import { STORES } from '../data';
import { cn } from '../lib/utils';

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStores = STORES.filter(store => 
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-5xl font-black mb-4 tracking-tighter">FIND A STORE</h1>
          <p className="text-gray-500 font-medium">Over 10 locations across Ibadan, ready to serve you.</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 h-[70vh]">
          {/* Sidebar */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Enter area or street name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-mcd-red"
              />
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4 no-scrollbar">
              {filteredStores.map((store) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card p-6 hover:border-mcd-yellow transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-black text-xl group-hover:text-mcd-red transition-colors">{store.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin size={14} /> {store.address}
                      </p>
                    </div>
                    <div className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-md">
                      OPEN NOW
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm font-bold text-gray-400 mb-6">
                    <span className="flex items-center gap-1"><Clock size={16} /> 24 Hours</span>
                    <span className="flex items-center gap-1"><Navigation size={16} /> {store.distance}</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="btn-primary flex-1 py-2 text-sm">Order Here</button>
                    <button className="bg-gray-100 p-2 rounded-full hover:bg-mcd-yellow transition-colors">
                      <Phone size={20} />
                    </button>
                    <button className="bg-gray-100 p-2 rounded-full hover:bg-mcd-yellow transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-inner border border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white p-8 rounded-full shadow-2xl mb-6 mx-auto w-24 h-24 flex items-center justify-center">
                  <MapPin size={48} className="text-mcd-red animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-gray-400 italic">Interactive Map Loading...</h3>
                <p className="text-gray-400 max-w-xs mx-auto mt-2">We're pinpointing the best burgers in Ibadan for you.</p>
              </div>
            </div>
            
            {/* Simulated Map UI */}
            <div className="absolute top-6 right-6 flex flex-col gap-2">
              <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50">+</button>
              <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50">-</button>
            </div>
            <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold">
              <div className="w-3 h-3 bg-mcd-red rounded-full" /> McDonald's Stores
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
