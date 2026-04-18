/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  Waves, 
  ChevronRight, 
  MapPin, 
  ShieldAlert, 
  Eye, 
  ArrowRight,
  Droplets,
  Heart
} from 'lucide-react';
import { TURTLE_SPECIES, HABITATS } from './constants';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-ocean-deep font-sans text-text-main">
      {/* Immersive Background Layers */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="atmosphere absolute inset-0" />
        <div className="light-rays absolute -top-24 -left-1/4 w-[150%] h-[400px] rotate-[-15deg]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-8 mix-blend-difference">
        <div className="flex items-center gap-2">
          <Waves className="text-accent-teal w-8 h-8" />
          <span className="text-2xl font-serif italic tracking-[4px] uppercase text-white">TUARIM</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[2px] font-medium text-white/70">
          <a href="#species" className="hover:text-accent-teal transition-colors">Species</a>
          <a href="#habitats" className="hover:text-accent-teal transition-colors">Habitats</a>
          <a href="#conservation" className="hover:text-accent-teal transition-colors">Conservation</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-12 md:px-24 overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000"
            alt="Sea Turtle Underwater"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent-teal font-serif italic text-lg mb-3"
            >
              Chelonia mydas
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-[84px] font-bold text-white mb-6 leading-[0.95] tracking-[-2px]"
            >
              THE GREAT<br/>GREEN TURTLE
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-10"
            >
              <p className="text-base md:text-lg text-white/80 max-w-lg font-light leading-relaxed">
                Found in tropical and subtropical waters around the world, the Green Sea Turtle is a majestic wanderer of the deep, migrating thousands of miles between feeding grounds and nesting beaches.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: "Avg. Weight", value: "190kg" },
                  { label: "Lifespan", value: "80yrs" },
                  { label: "Max Length", value: "1.5m" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-white/10 pl-4">
                    <div className="text-2xl font-medium text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[1px] text-white/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                <button className="px-8 py-4 bg-white text-ocean-deep hover:bg-accent-teal hover:text-white font-bold rounded-lg transition-all flex items-center gap-2 group text-sm">
                  View Migration Path
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Aside Habitat Card */}
          <motion.aside 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full md:w-[340px] glass-card p-8 rounded-[24px] flex flex-col"
          >
            <div className="text-[11px] uppercase tracking-[2px] text-white/60 mb-8 font-bold">Global Habitat Registry</div>
            <div className="relative h-48 bg-black/20 rounded-xl mb-8 overflow-hidden">
               <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#4dbbc4_1px,transparent_1px)] [background-size:20px_20px]" />
               {[
                 { t: "40%", l: "30%" },
                 { t: "60%", l: "75%" },
                 { t: "55%", l: "50%" }
               ].map((pt, i) => (
                 <div 
                   key={i}
                   className="absolute w-2 h-2 bg-accent-teal rounded-full animate-pulse shadow-[0_0_15px_#4dbbc4]"
                   style={{ top: pt.t, left: pt.l }}
                 />
               ))}
            </div>
            <ul className="mb-8">
               {[
                 { name: "Coral Reefs", tag: "Endangered" },
                 { name: "Seagrass Beds", tag: "Stable" },
                 { name: "Open Ocean", tag: "Active" }
               ].map((item, i) => (
                 <li key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0 font-medium text-sm">
                   <span className="text-white/80">{item.name}</span>
                   {item.tag === 'Endangered' ? (
                     <span className="px-2 py-1 rounded bg-coral/20 text-coral text-[10px] font-bold uppercase">{item.tag}</span>
                   ) : (
                     <span className="text-white/40 text-[10px] uppercase font-bold">{item.tag}</span>
                   )}
                 </li>
               ))}
            </ul>
            <button className="w-full py-4 bg-text-main text-ocean-deep rounded-xl font-bold text-sm tracking-wide transition-colors">
              Explore All Regions
            </button>
          </motion.aside>
        </div>
      </section>

      {/* Species Section */}
      <section id="species" className="relative py-32 px-12 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Species Registry</h2>
              <p className="text-white/60 text-lg font-light">
                Documenting the unique journey of each sea turtle species across the world's oceans.
              </p>
            </div>
            <div className="text-right">
              <span className="text-accent-teal font-serif italic text-xl">01 // Evolution</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TURTLE_SPECIES.map((species, i) => (
              <motion.div 
                key={species.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-[24px] glass-card"
              >
                <img 
                  src={species.image}
                  alt={species.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/30 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className={`w-3 h-3 ${species.status.includes('Endangered') ? 'text-coral' : 'text-accent-teal'}`} />
                    <span className="text-[9px] uppercase tracking-[1px] font-bold text-white/50">{species.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-teal transition-colors font-sans">{species.name.toUpperCase()}</h3>
                  <p className="text-xs font-serif italic text-accent-teal mb-4">{species.scientificName}</p>
                  <p className="text-sm text-white/60 line-clamp-2 mb-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                    {species.description}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-[2px] font-bold text-white group-hover:text-accent-teal transition-colors">
                    Expand Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Habitat Section - Horizontal Layout */}
      <section id="habitats" className="relative py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-12 md:px-24">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Marine Habitats</h2>
            <div className="w-24 h-1 bg-accent-teal" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HABITATS.map((habitat, i) => (
              <motion.div 
                key={habitat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-[24px] overflow-hidden flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={habitat.image}
                    alt={habitat.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ocean-deep/20" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-accent-teal mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[2px]">{habitat.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-sans tracking-tight">{habitat.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                    {habitat.description}
                  </p>
                  <div className="flex gap-6 pt-6 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-xl font-medium text-white">Migration</span>
                      <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Registry Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation - Direct and Clean */}
      <section id="conservation" className="relative py-40 px-12 md:px-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">THE OCEAN<br/>NEEDS YOU</h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
              Sea turtles are the ancient guardians of our ocean ecosystems. Their survival is intrinsically linked to the health of our planet. Every action counts.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-coral text-white font-bold rounded-lg hover:brightness-110 transition-all text-sm uppercase tracking-widest">
                Support Foundation
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-sm uppercase tracking-widest">
                Volunteer Access
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square glass-card rounded-full p-12 flex flex-col items-center justify-center text-center">
            <Heart className="w-20 h-20 text-coral mb-6 animate-pulse" />
            <div className="text-4xl font-bold text-white mb-1">1.2k</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">Active Conservation Miles</div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-24 px-12 md:px-24 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Waves className="text-accent-teal w-8 h-8" />
                <span className="text-2xl font-serif italic tracking-[4px] uppercase text-white">TUARIM</span>
              </div>
              <p className="text-white/40 max-w-sm text-sm">
                A global initiative for the preservation of sea turtle lineages and marine biodiversity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-teal">Archives</span>
                <a href="#species" className="text-sm text-white/60 hover:text-white transition-colors">Species</a>
                <a href="#habitats" className="text-sm text-white/60 hover:text-white transition-colors">Habitats</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Connect</span>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Ocean Reports</a>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Legal Archives</a>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <span className="text-[10px] uppercase font-bold tracking-[2px] text-white/20 tracking-widest">© 2026 Tuarim Sea Turtle Odyssey. Est. 1984</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
