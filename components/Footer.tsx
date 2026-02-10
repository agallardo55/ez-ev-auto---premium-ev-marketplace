
import React from 'react';
import { Zap, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                EZ<span className="text-blue-600">EV</span> AUTO
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Leading the global transition to high-performance electric mobility with unparalleled transparency and service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-white border border-slate-200 rounded-xl hover:text-blue-600 hover:border-blue-100 shadow-sm transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2.5 bg-white border border-slate-200 rounded-xl hover:text-blue-600 hover:border-blue-100 shadow-sm transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2.5 bg-white border border-slate-200 rounded-xl hover:text-blue-600 hover:border-blue-100 shadow-sm transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2.5 bg-white border border-slate-200 rounded-xl hover:text-blue-600 hover:border-blue-100 shadow-sm transition-all"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-900 mb-6 uppercase tracking-widest text-xs">Inventory</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Performance Sedans</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Family SUVs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Utility Trucks</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Limited Editions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-900 mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">EV Financing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Trade-In Appraisal</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Home Charging Install</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Corporate Fleet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-900 mb-6 uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-slate-500 mb-6 font-medium">Join 15,000+ subscribers for the latest EV news and exclusive arrivals.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 shadow-sm transition-all"
              />
              <button className="absolute right-2 top-2 bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-200 gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © 2024 EZ EV AUTO Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
