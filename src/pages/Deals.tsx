import React from 'react';
import { motion } from 'motion/react';
import { Tag, Clock, ArrowRight, Zap, Gift, Sparkles } from 'lucide-react';
import { DEALS } from '../data';
import { Link } from 'react-router-dom';

export default function DealsPage() {
  const currentHour = new Date().getHours();
  const timeOfDay = currentHour < 11 ? 'Breakfast' : currentHour < 16 ? 'Lunch' : 'Dinner';

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-mcd-yellow/20 text-mcd-red px-4 py-2 rounded-full font-black text-sm mb-6"
          >
            <Sparkles size={16} /> EXCLUSIVE IBADAN OFFERS
          </motion.div>
          <h1 className="text-6xl font-black mb-4 tracking-tighter italic">BIG SAVINGS, <br />BIGGER SMILES</h1>
          <p className="text-gray-500 font-medium text-xl">Personalized deals just for you this {timeOfDay}.</p>
        </header>

        {/* Featured Urgency Deal */}
        <section className="mb-16">
          <div className="bg-mcd-red rounded-[2.5rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-mcd-yellow/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-mcd-yellow/20 rounded-full blur-3xl" />
            
            <div className="flex-1 z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-mcd-yellow text-mcd-black p-2 rounded-lg font-black text-xs">LIMITED TIME</div>
                <div className="flex items-center gap-1 text-mcd-yellow font-bold text-sm">
                  <Clock size={16} /> Ending in 45:12
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter">
                THE IBADAN <br />
                <span className="text-mcd-yellow">MEGA BOX</span>
              </h2>
              <p className="text-xl opacity-90 mb-10 max-w-md">
                2 Big Macs, 2 McSpicy, 4 Large Fries & 4 Drinks. Perfect for the squad.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="text-4xl font-black">₦12,500</div>
                <div className="text-2xl line-through opacity-50 font-bold">₦18,000</div>
                <div className="bg-white text-mcd-red font-black px-4 py-1 rounded-lg text-xl">-30%</div>
              </div>
              <button className="btn-secondary text-xl px-12 py-4 shadow-2xl shadow-black/20">
                Claim This Deal Now <ArrowRight size={24} />
              </button>
            </div>

            <div className="flex-1 z-10">
              <img 
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800" 
                alt="Mega Box" 
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Other Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEALS.map((deal, idx) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card flex flex-col sm:flex-row h-full"
            >
              <div className="sm:w-1/2 h-64 sm:h-auto overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 sm:w-1/2 flex flex-col">
                <div className="bg-mcd-red/10 text-mcd-red font-black text-[10px] px-2 py-1 rounded-md self-start mb-4 uppercase tracking-widest">
                  {deal.category} SPECIAL
                </div>
                <h3 className="text-2xl font-black mb-2 leading-tight">{deal.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-1">{deal.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-mcd-red">{deal.discount}</span>
                  <button className="btn-primary py-2 px-6 text-sm">Use Deal</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Promo */}
        <section className="mt-20 bg-gray-100 rounded-[2.5rem] p-12 text-center">
          <div className="bg-mcd-yellow w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-6">
            <Gift size={40} className="text-mcd-black -rotate-6" />
          </div>
          <h2 className="text-4xl font-black mb-4 tracking-tighter">WANT MORE DEALS?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg font-medium">
            Join the MyMcDonald's Rewards program on our app and get a FREE order of Large Fries on your first purchase!
          </p>
          <Link to="/app" className="btn-primary inline-flex px-12">
            Download & Get Free Fries
          </Link>
        </section>
      </div>
    </div>
  );
}
