import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight, Clock, MapPin, Smartphone, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS, DEALS, STORES } from '../data';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Burger" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mcd-black/80 via-mcd-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white"
          >
            <span className="bg-mcd-yellow text-mcd-black font-black px-4 py-1 rounded-full text-sm uppercase tracking-widest mb-6 inline-block">
              Now in Ibadan
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
              CRAVING <br />
              <span className="text-mcd-yellow italic">INSTANT</span> <br />
              JOY?
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-md">
              Get your favorites delivered in under 20 minutes. Fresh, hot, and ready to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu" className="btn-primary text-lg px-10">
                Order Now <ArrowRight size={20} />
              </Link>
              <Link to="/deals" className="btn-secondary text-lg px-10">
                View Deals
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="bg-mcd-yellow py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-mcd-red text-white p-2 rounded-lg animate-pulse">
              <Zap size={24} fill="currentColor" />
            </div>
            <h2 className="font-black text-xl md:text-2xl text-mcd-black uppercase italic">
              Flash Deal: Big Mac Meal 20% OFF
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-mcd-black/60 uppercase text-sm tracking-widest">Ending In:</span>
            <div className="bg-mcd-black text-mcd-yellow font-mono text-2xl px-4 py-1 rounded-lg shadow-lg">
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black tracking-tight">MOST POPULAR IN IBADAN</h2>
            <p className="text-gray-500 font-medium">What your neighbors are eating right now</p>
          </div>
          <Link to="/menu" className="text-mcd-red font-bold flex items-center gap-1 hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.filter(i => i.popular).map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {item.dietary?.includes('Spicy') && (
                  <div className="absolute top-4 right-4 bg-mcd-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    SPICY 🔥
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black">{item.name}</h3>
                  <span className="text-xl font-black text-mcd-red">₦{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{item.description}</p>
                <button className="btn-primary w-full">
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Order in 2 Clicks */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16 italic tracking-tighter">ORDER IN 2 CLICKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: MapPin, title: "Auto-Locate", desc: "We find the nearest Ibadan store for you instantly." },
              { icon: Clock, title: "Quick Pick", desc: "Select from your favorites or our top picks." },
              { icon: Zap, title: "Instant Checkout", desc: "Pay securely and get your food in minutes." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-mcd-yellow rounded-3xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                  <step.icon size={36} className="text-mcd-black -rotate-3" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator Preview */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-mcd-black rounded-[2rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mcd-red/20 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="flex-1 z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              NEAREST STORE: <br />
              <span className="text-mcd-yellow">{STORES[0].name}</span>
            </h2>
            <p className="text-xl opacity-80 mb-8 flex items-center gap-2">
              <MapPin className="text-mcd-red" /> {STORES[0].address} • {STORES[0].distance} away
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-secondary px-8">Order From This Store</button>
              <Link to="/stores" className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-mcd-black px-8">
                Change Store
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 h-64 bg-gray-800 rounded-3xl overflow-hidden shadow-2xl z-10">
             <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold italic">
               Map Integration Loading...
             </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-5xl font-black mb-6 tracking-tighter">UNLOCK EXCLUSIVE REWARDS</h2>
            <p className="text-xl text-gray-600 mb-10">
              Download the McDonald's App for faster checkout, exclusive Ibadan deals, and free rewards with every bite.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Earn points on every ₦100 spent",
                "Exclusive 'App-Only' deals",
                "Skip the queue with Mobile Order & Pay",
                "Personalized recommendations"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold">
                  <div className="bg-mcd-yellow p-1 rounded-full">
                    <Star size={16} fill="currentColor" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                <Smartphone size={24} />
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-60">Download on the</p>
                  <p className="text-lg font-bold leading-tight">App Store</p>
                </div>
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                <Smartphone size={24} />
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-60">Get it on</p>
                  <p className="text-lg font-bold leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-mcd-yellow rounded-full blur-3xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800" 
                alt="App Interface" 
                className="relative z-10 rounded-[3rem] shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t md:hidden z-40">
        <Link to="/menu" className="btn-primary w-full text-lg shadow-xl">
          Order Now <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
