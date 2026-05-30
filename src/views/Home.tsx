import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <motion.div {...fadeUp} className="text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
            <Shield className="h-3 w-3" /> Secure Virtual Bookkeeping
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-accent md:text-6xl">
            Precision Accounting for Modern <span className="opacity-60 italic font-serif">Enterprise.</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-brand-accent/70">
            Expert financial services specializing in accurate recording, monthly reconciliation, and advanced reporting. Engineered to secure your growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="pill-button bg-brand-accent text-brand-navy shadow-xl shadow-brand-accent/10 hover:scale-105 active:scale-95">
              Get Started
            </button>
            <button className="pill-button border-2 border-brand-accent/20 bg-transparent text-brand-accent hover:bg-brand-accent/5">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square md:aspect-auto md:h-full"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-brand-accent/20 to-brand-navy/5 shadow-2xl overflow-hidden border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
              alt="Financial Analysis" 
              className="h-full w-full object-cover grayscale opacity-30 mix-blend-luminosity"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand-navy/90 p-6 soft-shadow md:block hidden border border-white/10 backdrop-blur-xl">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-accent/40">Total Revenue</div>
              <div className="text-2xl font-bold text-brand-accent">$245,000.00</div>
              <div className="mt-1 flex items-center justify-between">
                 <span className="text-[10px] font-medium text-brand-accent/60">Mar 2026 vs Feb 2026</span>
                 <span className="text-[10px] font-bold text-green-400">↑ 12%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid (3-Column) */}
      <section id="services" className="bg-brand-navy/40 py-24 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-accent md:text-4xl">Core Professional Services</h2>
            <p className="mx-auto max-w-2xl text-brand-accent/60">Structured financial management tailored for clarity and compliance.</p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Financial Recording",
                desc: "Every transaction meticulously logged with multi-layered verification protocols.",
                icon: <CheckCircle className="h-10 w-10 text-brand-accent" />
              },
              {
                title: "Monthly Reconciliation",
                desc: "Comprehensive bank and accounts receivable reconciliation to ensure perfect accuracy.",
                icon: <BarChart3 className="h-10 w-10 text-brand-accent" />
              },
              {
                title: "Financial Reporting",
                desc: "Insightful balance sheets and profit/loss statements generated with precision.",
                icon: <Shield className="h-10 w-10 text-brand-accent" />
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl bg-white/5 p-10 border border-white/5 soft-shadow transition-all hover:bg-white/10 hover:border-brand-accent/20"
              >
                <div className="mb-8 inline-block rounded-2xl bg-brand-accent/10 p-4 transition-colors group-hover:bg-brand-accent group-hover:text-brand-navy text-brand-accent">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "h-8 w-8 transition-colors" })}
                </div>
                <h3 className="mb-4 text-xl font-bold text-brand-accent">{service.title}</h3>
                <p className="text-sm leading-relaxed text-brand-accent/60">{service.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
