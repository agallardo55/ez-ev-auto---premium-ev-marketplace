
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { Shield, Battery, Zap, Globe } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Brand Values / Stats Bar */}
        <section className="bg-blue-600 py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-12 relative z-10">
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20"><Shield className="text-white w-7 h-7" /></div>
              <div>
                <p className="text-white font-extrabold text-xl">Guaranteed Safety</p>
                <p className="text-blue-100 text-sm font-medium">Certified multi-point check</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20"><Battery className="text-white w-7 h-7" /></div>
              <div>
                <p className="text-white font-extrabold text-xl">Range Assured</p>
                <p className="text-blue-100 text-sm font-medium">95%+ battery health only</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20"><Zap className="text-white w-7 h-7" /></div>
              <div>
                <p className="text-white font-extrabold text-xl">Fast Charging</p>
                <p className="text-blue-100 text-sm font-medium">Ready-to-charge delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/20"><Globe className="text-white w-7 h-7" /></div>
              <div>
                <p className="text-white font-extrabold text-xl">Net Zero Mission</p>
                <p className="text-blue-100 text-sm font-medium">Carbon neutral operations</p>
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
        </section>

        <Inventory />

        {/* Technology Highlight */}
        <section id="tech" className="py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1 relative">
                 <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-[100px]"></div>
                 <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="space-y-6 pt-16">
                      <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600" className="rounded-[2.5rem] h-72 w-full object-cover shadow-2xl shadow-blue-900/10" alt="EV Tech 1" />
                      <img src="https://images.unsplash.com/photo-1620211110375-728b99106095?q=80&w=600" className="rounded-[2.5rem] h-56 w-full object-cover shadow-2xl shadow-blue-900/10" alt="EV Tech 2" />
                    </div>
                    <div className="space-y-6">
                      <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600" className="rounded-[2.5rem] h-56 w-full object-cover shadow-2xl shadow-blue-900/10" alt="EV Tech 3" />
                      <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600" className="rounded-[2.5rem] h-72 w-full object-cover shadow-2xl shadow-blue-900/10" alt="EV Tech 4" />
                    </div>
                 </div>
              </div>
              <div className="order-1 md:order-2 space-y-10">
                <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1] text-slate-900">Intelligence at <br /><span className="text-blue-600 font-serif italic">the Heart</span> of EV</h2>
                <p className="text-slate-600 text-xl leading-relaxed">The vehicles we curate aren't just cars; they are sophisticated computing platforms on wheels. Experience over-the-air updates, level 3 autonomy, and hyper-efficient energy management.</p>
                
                <div className="space-y-6">
                  {[
                    { title: "Next-Gen Thermal Management", desc: "Optimizing battery life in any climate condition." },
                    { title: "Active Aero Systems", desc: "Reducing drag coefficients to industry-leading levels." },
                    { title: "Predictive Energy Routing", desc: "AI-driven navigation that understands your battery needs." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 p-6 rounded-[1.5rem] bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
                      <div className="bg-blue-600/5 text-blue-600 p-3 h-fit rounded-xl font-extrabold group-hover:bg-blue-600 group-hover:text-white transition-all">0{idx + 1}</div>
                      <div>
                        <h4 className="font-extrabold text-xl mb-1 text-slate-900">{item.title}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
               <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                  <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">Ready to join the revolution?</h2>
                  <p className="text-slate-300 text-xl md:text-2xl font-medium opacity-90 leading-relaxed">Our advisors are available 24/7 to guide your electric journey. No pressure, just world-class expertise.</p>
                  <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-extrabold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/40">Speak with an Advisor</button>
                    <button className="bg-white/10 text-white border border-white/20 backdrop-blur-xl px-12 py-5 rounded-2xl font-extrabold text-lg hover:bg-white hover:text-slate-900 transition-all shadow-xl">Browse Digital Catalog</button>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
