
import React, { useState } from 'react';
import { VEHICLES } from '../constants';
import { Filter, Zap, Battery, Timer, Gauge } from 'lucide-react';

const Inventory: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Sedan', 'SUV', 'Performance', 'Truck'];

  const filteredVehicles = filter === 'All' 
    ? VEHICLES 
    : VEHICLES.filter(v => v.category === filter);

  return (
    <section id="inventory" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Current Fleet</h2>
            <p className="text-slate-500 max-w-md">Each vehicle is rigorously inspected and performance-verified for our premium standards.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-200 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/5">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.make} ${vehicle.model}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-extrabold border border-slate-200 uppercase tracking-widest text-slate-900 shadow-sm">
                  {vehicle.category}
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{vehicle.make} {vehicle.model}</h3>
                    <p className="text-slate-500 font-medium">{vehicle.year}</p>
                  </div>
                  <p className="text-2xl font-extrabold text-blue-600">${vehicle.price.toLocaleString()}</p>
                </div>

                <div className="grid grid-cols-2 gap-5 mb-10">
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm">
                    <Battery className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Range</p>
                      <p className="text-sm font-bold text-slate-900">{vehicle.range} mi</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm">
                    <Timer className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">0-60</p>
                      <p className="text-sm font-bold text-slate-900">{vehicle.acceleration}</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Battery</p>
                      <p className="text-sm font-bold text-slate-900">{vehicle.batterySize}</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm">
                    <Gauge className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Top</p>
                      <p className="text-sm font-bold text-slate-900">{vehicle.topSpeed} mph</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-slate-900 text-white rounded-[1.25rem] font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10">
                  Explore Spec Sheet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
