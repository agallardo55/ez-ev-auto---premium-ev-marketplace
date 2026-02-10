
import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background Blobs - Light mode variants */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-600/5 border border-blue-600/10 px-4 py-2 rounded-full text-blue-700 text-sm font-semibold">
            <Star className="w-4 h-4 fill-current text-blue-600" />
            Voted #1 Premium EV Platform 2024
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight text-slate-900">
            The Future <br />
            <span className="gradient-text text-blue-600">Electrified.</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            Experience the pinnacle of automotive engineering. We simplify the transition to electric luxury with curated inventory and intelligent guidance.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
              Browse Inventory <ArrowRight className="w-5 h-5" />
            </button>
            <button className="glass-effect text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all shadow-sm">
              <Play className="w-5 h-5 text-blue-600 fill-blue-600/20" /> Watch Film
            </button>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-slate-200">
            <div>
              <p className="text-3xl font-extrabold text-slate-900">500+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Premium Units</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900">24hr</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Global Delivery</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900">4.9/5</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">User Rating</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 transition-transform duration-700 hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200" 
              alt="Premium Electric Sports Car" 
              className="w-full aspect-video object-cover"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 z-20 glass-effect p-6 rounded-2xl shadow-xl max-w-xs border border-white">
            <p className="text-[10px] font-bold text-blue-600 mb-1 uppercase tracking-tighter">Current Highlight</p>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Porsche Taycan Turbo</h3>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Range: 340mi</span>
              <span className="font-extrabold text-slate-900">$230,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
