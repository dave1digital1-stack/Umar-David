import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const Deals = lazy(() => import('./pages/Deals'));
const StoreLocator = lazy(() => import('./pages/StoreLocatorPage'));
const AppPage = lazy(() => import('./pages/AppPage'));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={
            <div className="h-screen w-full flex items-center justify-center bg-white">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-mcd-red rounded-2xl flex items-center justify-center animate-bounce">
                  <span className="text-mcd-yellow font-black text-4xl italic">M</span>
                </div>
                <p className="font-black text-mcd-red animate-pulse">PREPARING JOY...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/stores" element={<StoreLocator />} />
              <Route path="/app" element={<AppPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

