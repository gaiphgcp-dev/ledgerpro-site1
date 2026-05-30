import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Lightbulb, Users, BarChart, Rocket } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-navy py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.15),transparent_70%)]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
              About <span className="text-brand-accent">LedgerPro</span>
            </h1>
            <div className="mx-auto flex max-w-fit items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent/60">Precision</span>
              <div className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent/60">Trust</span>
              <div className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent/60">Innovation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="bg-brand-surface py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <p className="text-xl leading-relaxed text-brand-accent/80 md:text-2xl">
              At LedgerPro, we're more than just number crunchers; we're financial guardians. In a world where financial clarity is your business secret weapon, we're here to unlock that potential. We offer precision, reliability, and innovation in bookkeeping services, tailored to meet your unique needs.
            </p>
            
            <div className="relative py-12">
              <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-brand-accent/20" />
              <blockquote className="bg-brand-accent/5 rounded-2xl p-10 border border-brand-accent/10">
                <p className="text-2xl font-bold italic text-brand-accent leading-snug md:text-3xl">
                  "Imagine having the financial insight to make strategic decisions, the peace of mind knowing your records are flawless, and the freedom to focus on what you do best – growing your business."
                </p>
              </blockquote>
            </div>

            <p className="text-lg leading-relaxed text-brand-accent/60">
              Our certified experts meticulously record, reconcile, and report your finances while integrating cutting-edge technology to streamline operations. It's a symphony of accuracy and efficiency, giving you the gift of time and resources.
            </p>
            
            <p className="text-lg font-bold text-brand-accent">
              Precision, trust, and innovation – that's what we bring to the table. Let's transform your financial journey together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values/Features Grid */}
      <section className="bg-brand-navy/40 py-24 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Why Choose LedgerPro? */}
            <motion.div
              {...fadeUp}
              whileHover={{ y: -10 }}
              className="group rounded-3xl bg-white/[0.03] p-10 border border-white/5 soft-shadow transition-all hover:bg-white/[0.08]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-brand-navy">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Why Choose LedgerPro?</h3>
              <p className="text-sm leading-relaxed text-brand-accent/60 line-height-1.8">
                LedgerPro has a team of experienced bookkeeping advisors who are dedicated to helping your business thrive. We know that each business is unique, and our personalized approach ensures that we can provide the best possible service to meet your specific needs.
              </p>
            </motion.div>

            {/* Stays Ahead of the Game */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl bg-white/[0.03] p-10 border border-white/5 soft-shadow transition-all hover:bg-white/[0.08]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500 group-hover:text-white">
                <Rocket className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Stays Ahead of the Game</h3>
              <p className="text-sm leading-relaxed text-brand-accent/60 line-height-1.8">
                At LedgerPro, we stay up-to-date with the latest bookkeeping trends and technologies to give your business a competitive edge. Our team is always one step ahead, so you can focus on running your business with confidence.
              </p>
            </motion.div>

            {/* Customized Services */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl bg-white/[0.03] p-10 border border-white/5 soft-shadow transition-all hover:bg-white/[0.08]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Customized Services</h3>
              <p className="text-sm leading-relaxed text-brand-accent/60 line-height-1.8">
                LedgerPro has the knowledge and expertise to provide bookkeeping services that are tailored to your business's unique needs. Whether you're a small business just starting out or a large corporation with complex accounting needs, we can help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
