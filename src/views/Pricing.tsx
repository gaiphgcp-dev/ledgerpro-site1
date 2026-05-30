import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Rocket, Briefcase, Building2, Globe, History, Layers, FileText, Settings } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const FeatureList = ({ title, items, icon }: { title: string, items: string[], icon: React.ReactNode }) => (
  <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 soft-shadow">
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 group">
          <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-brand-navy">
            <Check className="h-2.5 w-2.5" />
          </div>
          <span className="text-sm font-medium text-brand-accent/70 leading-relaxed transition-colors group-hover:text-brand-accent">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Pricing() {
  const plans = [
    { name: "Start-up", price: "$190", sub: "per month", limit: "Up to 100 monthly transactions", icon: <Rocket className="h-6 w-6" />, color: "text-blue-400" },
    { name: "Medium", price: "$240", sub: "per month", limit: "Up to 200 monthly transactions", icon: <Briefcase className="h-6 w-6" />, color: "text-indigo-400", featured: true },
    { name: "Large", price: "$290", sub: "per month", limit: "Up to 300 monthly transactions", icon: <Building2 className="h-6 w-6" />, color: "text-emerald-400" },
    { name: "Extra Large", price: "Custom", sub: "price", limit: "Up to 300+ monthly transactions", icon: <Globe className="h-6 w-6" />, color: "text-brand-accent" }
  ];

  return (
    <div className="min-h-screen pb-32">
      {/* Header Section */}
      <section className="bg-brand-navy/60 border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent mb-6"
          >
            Transparent Pricing
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-white md:text-6xl"
          >
            Invest in <span className="text-brand-accent">Precision.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-brand-accent/60"
          >
            Choose a plan that fits your business volume. Scalable financial guardians for every stage of growth.
          </motion.p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="mx-auto max-w-7xl px-6 -mt-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-[2.5rem] p-10 transition-all ${
                plan.featured 
                  ? 'bg-brand-accent text-brand-navy shadow-2xl scale-105 z-10' 
                  : 'bg-white/[0.03] border border-white/5 text-white backdrop-blur-sm'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-brand-navy text-[10px] font-bold text-white px-6 py-2 rounded-bl-2xl uppercase tracking-widest">
                  Popular
                </div>
              )}
              <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${plan.featured ? 'bg-brand-navy/10' : 'bg-brand-accent/10 text-brand-accent'}`}>
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-xs font-bold uppercase tracking-widest opacity-60`}>{plan.sub}</span>
              </div>
              
              <div className={`text-sm font-medium mb-10 leading-relaxed ${plan.featured ? 'text-brand-navy/60 font-bold' : 'text-brand-accent/40'}`}>
                {plan.limit}
              </div>

              <button className={`w-full pill-button ${
                plan.featured 
                  ? 'bg-brand-navy text-white hover:bg-brand-navy/90' 
                  : 'border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/5'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-on Banner */}
      <section className="mx-auto max-w-7xl px-6 mt-16">
        <motion.div 
          {...fadeUp}
          className="group relative overflow-hidden rounded-[2.5rem] border border-brand-accent/20 bg-brand-accent/5 p-8 md:p-12 soft-shadow"
        >
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-accent text-brand-navy shadow-xl">
                <History className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Historical Bookkeeping Clean-up</h3>
                <p className="mt-1 text-brand-accent/60 font-medium">Review and correction of past financial records and transactions.</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-extrabold text-brand-accent">$50</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent/40 mt-1">per monthly transactions</div>
            </div>
            <button className="pill-button bg-white text-brand-navy hover:scale-105 active:scale-95 whitespace-nowrap">
              Schedule Clean-Up
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-64 w-64 bg-brand-accent/5 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-4">What's Included?</h2>
          <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full opacity-30" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div {...fadeUp}>
            <FeatureList 
              title="Accounting Software Features" 
              icon={<Settings className="h-6 w-6" />}
              items={[
                "Cloud Banking / Automatic bank downloads",
                "Bank Reconciliations",
                "Journal Entries",
                "Budgeting",
                "Classes",
                "Projects Profitability Tracking",
                "Quickbooks Online Subscription"
              ]} 
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <FeatureList 
              title="Bookkeeping Services" 
              icon={<Layers className="h-6 w-6" />}
              items={[
                "Daily, Weekly or Monthly data entry",
                "Bank and credit card reconciliations",
                "Accounting software set-up",
                "Annual or Quarterly budgets",
                "Unlimited support",
                "Expense Management",
                "Accounts Receivable",
                "Accounts Payable",
                "Money Market Reconciliation",
                "Securities Portfolio Management"
              ]} 
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <FeatureList 
              title="Reporting Capabilities" 
              icon={<FileText className="h-6 w-6" />}
              items={[
                "Bank Account Balances Report",
                "Income Statement Report",
                "Balance Sheet",
                "Trial Balance Report",
                "Budget - Actual Report",
                "Statement of Cash Flows",
                "General Ledger Report",
                "Check Register Report",
                "Accounts Receivable Reports",
                "Accounts Payable Reports"
              ]} 
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ/Contact Callout */}
      <section className="mx-auto max-w-3xl px-6 mt-32 text-center">
        <motion.div {...fadeUp} className="rounded-3xl bg-brand-accent/5 border border-white/5 p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Need a specialized package?</h2>
          <p className="text-brand-accent/60 mb-8 font-medium">We offer custom solutions for enterprises with unique reporting and volume requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="pill-button bg-brand-accent text-brand-navy font-bold">Contact Sales</button>
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-accent px-8 transition-colors hover:text-white">
              <Info className="h-4 w-4" /> View FAQs
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
