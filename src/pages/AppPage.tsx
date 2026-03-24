import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Gift, Zap, Clock, Star, ArrowRight, CheckCircle2, Download } from 'lucide-react';

export default function AppPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                THE APP THAT <br />
                <span className="text-mcd-red">FEEDS YOU.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 font-medium">
                Order ahead, earn points, and unlock exclusive Ibadan deals you won't find anywhere else.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Download on the</p>
                    <p className="text-lg font-bold leading-tight">App Store</p>
                  </div>
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Get it on</p>
                    <p className="text-lg font-bold leading-tight">Google Play</p>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 bg-mcd-yellow/10 rounded-2xl border border-mcd-yellow/30">
                <div className="bg-mcd-yellow p-3 rounded-xl">
                  <Gift size={24} className="text-mcd-black" />
                </div>
                <div>
                  <p className="font-black text-mcd-black">FIRST APP ORDER BONUS</p>
                  <p className="text-sm text-gray-600">Get a FREE Large Fries with your first app order!</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800" 
                alt="App Mockup" 
                className="rounded-[3rem] shadow-2xl border-8 border-mcd-black"
                referrerPolicy="no-referrer"
              />
              {/* Floating UI elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Order Status</p>
                  <p className="text-sm font-black">Out for Delivery</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-mcd-red text-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-white/20 p-2 rounded-lg">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-70 uppercase">Rewards</p>
                  <p className="text-sm font-black">+250 Points Earned</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-24">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tighter">WHY DOWNLOAD?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Faster Checkout", 
                desc: "Save your favorite Ibadan stores and payment methods for 2-click ordering.",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                icon: Clock, 
                title: "Schedule Orders", 
                desc: "Order now and pick up later. Your food will be fresh and hot exactly when you arrive.",
                color: "bg-purple-50 text-purple-600"
              },
              { 
                icon: Star, 
                title: "Exclusive Rewards", 
                desc: "Earn points on every Naira spent and redeem them for free food and drinks.",
                color: "bg-mcd-yellow/20 text-mcd-black"
              }
            ].map((benefit, i) => (
              <div key={i} className="card p-8 text-center hover:shadow-xl transition-shadow">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6", benefit.color)}>
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4">{benefit.title}</h3>
                <p className="text-gray-500 font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-mcd-black rounded-[3rem] p-12 md:p-20 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tighter italic">HOW IT WORKS</h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "Download & Sign Up", desc: "Get the app and create your account in seconds." },
                { step: "02", title: "Place Your Order", desc: "Browse the full menu and customize your meal." },
                { step: "03", title: "Earn & Redeem", desc: "Watch your points grow and get free food!" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-8">
                  <span className="text-6xl font-black text-mcd-red/40 italic leading-none">{item.step}</span>
                  <div>
                    <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                    <p className="text-xl opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <button className="btn-secondary px-12 py-4 text-xl">
                Get Started Now <Download size={24} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
