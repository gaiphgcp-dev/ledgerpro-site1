import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, DollarSign, PieChart, Landmark, TrendingUp, Search, Receipt, Wallet, Layers, Users, Zap, Briefcase, FileText } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const CustomList = ({ items }: { items: string[] }) => (
  <ul className="mt-6 space-y-4">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-4 text-sm leading-relaxed text-brand-accent/70">
        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/10">
          <Check className="h-3 w-3 text-brand-accent" />
        </div>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function Services() {
  return (
    <div className="min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-brand-navy/60 border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-white md:text-6xl"
          >
            Our Professional <span className="text-brand-accent">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-brand-accent/60"
          >
            Comprehensive financial management engineered for accuracy, compliance, and strategic growth.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mt-20 space-y-32">
        {/* Core Services Grid */}
        <section>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div {...fadeUp} className="group rounded-[2rem] border border-white/5 bg-white/[0.02] p-10 soft-shadow backdrop-blur-sm transition-all hover:bg-white/[0.05]">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 group-hover:bg-brand-accent group-hover:text-brand-navy transition-colors">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Accurate Financial Recording</h3>
              <p className="text-sm leading-relaxed text-brand-accent/60">
                At LedgerPro, we provide precise and innovative bookkeeping services to ensure your financial records are accurate and up-to-date. Our team of experts will work closely with you to create a customized plan that meets your specific needs. We'll take care of the details, so you can focus on what you do best.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="group rounded-[2rem] border border-white/5 bg-white/[0.02] p-10 soft-shadow backdrop-blur-sm transition-all hover:bg-white/[0.05]">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 group-hover:bg-brand-accent group-hover:text-brand-navy transition-colors">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Monthly Reconciliation</h3>
              <p className="text-sm leading-relaxed text-brand-accent/60">
                Our monthly reconciliation service ensures that your financial records are always in sync with your actual financial position. We expertly match your financial records with bank statements, identifying discrepancies, and ensuring precision.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="group rounded-[2rem] border border-white/5 bg-white/[0.02] p-10 soft-shadow backdrop-blur-sm transition-all hover:bg-white/[0.05]">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 group-hover:bg-brand-accent group-hover:text-brand-navy transition-colors">
                <PieChart className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Financial Reporting</h3>
              <p className="text-sm leading-relaxed text-brand-accent/60">
                We transform your financial data into a strategic asset by delivering detailed and easy-to-understand reports. These reports provide you with the insights you need to make informed decisions and plan for the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Services Sections */}
        <section className="grid gap-12 md:grid-cols-2">
          {/* Historical Clean-up */}
          <motion.div {...fadeUp} className="rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-12 soft-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-orange-400/10 text-orange-400">
                <Search className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Historical Bookkeeping Clean-up</h2>
            </div>
            <p className="text-sm text-brand-accent/60 mb-6 italic border-l-2 border-brand-accent/20 pl-4">
              A thorough review and correction of past financial records and transactions for our clients.
            </p>
            <CustomList items={[
              "Ideal for businesses that may have messy or inaccurate historical accounting data.",
              "Our experienced team of bookkeepers will meticulously go through financial records, identifying and rectifying errors.",
              "Reconciling accounts, categorizing expenses, and ensuring that the books accurately reflect the financial history of the business.",
              "Ensures compliance and provides a reliable foundation for future financial planning.",
              "Crucial for tax compliance, audits, and financial analysis."
            ]} />
          </motion.div>

          {/* Money Market Reconciliation */}
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-12 soft-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-indigo-400/10 text-indigo-400">
                <Landmark className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Money Market Reconciliation</h2>
            </div>
            <div className="space-y-6">
              {[
                { title: "Transaction Monitoring", desc: "Meticulously track all financial transactions associated with money market accounts, including deposits, withdrawals, interest accruals, and fees." },
                { title: "Reconciliation", desc: "Compare and reconcile records with bank or financial institution's statements to ensure accuracy and identify any discrepancies." },
                { title: "Interest Calculation", desc: "Accurate calculation of interest earnings and reinvestments to maximize returns." },
                { title: "Fee Management", desc: "Monitor and account for any applicable fees, ensuring awareness and cost minimization." },
                { title: "Reporting", desc: "Detailed, easy-to-understand reports summarizing financial status, interest earnings, and account balances." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-sm font-bold text-brand-accent mb-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-accent" /> {item.title}
                  </h4>
                  <p className="text-sm text-brand-accent/50 ml-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Expense & Receivables */}
        <section className="grid gap-8 md:grid-cols-3">
           <motion.div {...fadeUp} className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-pink-400/10 flex items-center justify-center text-pink-400">
                <Receipt className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Expense Management</h3>
              <CustomList items={[
                "Unlimited monthly expense review and categorization.",
                "Assistance with tracking and organizing receipts.",
                "Expense report preparation and submission for reimbursement.",
                "Quarterly expense trend analysis.",
                "Email support during business hours."
              ]} />
           </motion.div>

           <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Accounts Receivable</h3>
              <CustomList items={[
                "Streamline invoicing and collection process.",
                "Create and send professional invoices promptly.",
                "Track receivables and manage aging reports.",
                "Accurately record and reconcile incoming payments."
              ]} />
           </motion.div>

           <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-500">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Accounts Payable</h3>
              <CustomList items={[
                "Streamline payment process and vendor management.",
                "Organize and categorize incoming bills and invoices.",
                "Ensure timely payments to vendors and suppliers.",
                "Maintain accurate records of outgoing payments."
              ]} />
           </motion.div>
        </section>

        {/* QuickBooks Table */}
        <section>
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">QuickBooks Online Subscription</h2>
            <p className="text-brand-accent/60 mt-4">Scalable cloud accounting solutions matched to your business size.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                name: "Simple", 
                subtitle: "Freelancers & Self-Employed",
                icon: <Zap className="h-6 w-6" />,
                features: ["Track income and expenses", "Create and send invoices", "Connect to bank accounts", "Basic reporting features"]
              },
              { 
                name: "Plus", 
                subtitle: "Small to Medium Businesses",
                icon: <Layers className="h-6 w-6 text-brand-navy" />,
                featured: true,
                features: ["All features of Simple Start", "Manage and pay bills", "Track inventory", "Budgeting & project profitability", "Enhanced reporting capabilities"]
              },
              { 
                name: "Advanced", 
                subtitle: "Complex Financial Needs",
                icon: <TrendingUp className="h-6 w-6" />,
                features: ["All features of Plus", "Premium customer support", "Accelerated invoicing", "Smart reporting & insights", "Up to 25 users"]
              }
            ].map((tier, i) => (
              <motion.div 
                key={i} 
                {...fadeUp} 
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-[2.5rem] p-10 transition-all ${
                  tier.featured ? 'bg-brand-accent text-brand-navy shadow-2xl scale-105 z-10' : 'bg-white/[0.03] border border-white/5 text-white'
                }`}
              >
                {tier.featured && <div className="absolute top-0 right-0 bg-brand-navy text-[10px] font-bold text-white px-6 py-2 rounded-bl-2xl uppercase tracking-widest">Recommended</div>}
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${tier.featured ? 'bg-brand-navy/10' : 'bg-brand-accent/10 text-brand-accent'}`}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{tier.name}</h3>
                <p className={`text-xs font-medium uppercase tracking-widest mb-10 ${tier.featured ? 'text-brand-navy/60' : 'text-brand-accent/40'}`}>
                  {tier.subtitle}
                </p>
                <ul className="space-y-5">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-full ${tier.featured ? 'bg-brand-navy text-white' : 'bg-brand-accent/20 text-brand-accent'}`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className={tier.featured ? 'opacity-90' : 'opacity-70'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-12 w-full pill-button ${tier.featured ? 'bg-brand-navy text-white hover:scale-[1.02]' : 'border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/5'}`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Securities Management */}
        <section className="bg-brand-accent text-brand-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden soft-shadow">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-navy/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          <motion.div {...fadeUp} className="max-w-4xl mx-auto relative z-10">
            <div className="mb-10 inline-flex items-center gap-3">
              <div className="h-12 w-12 bg-brand-navy text-white flex items-center justify-center rounded-2xl">
                <Landmark className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Securities Portfolio Management</h2>
            </div>
            
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy/40 mb-6 underline decoration-brand-navy/10 underline-offset-8">Key Components</h4>
                <ul className="space-y-6">
                  {[
                    { t: "Comprehensive Portfolio Tracking", d: "Purchase dates, quantities, cost basis, and current valuations updated continually." },
                    { t: "Regular Reconciliation", d: "Data synced with bank and institution records to rectify any portfolio discrepancies." },
                    { t: "Income Tracking", d: "Dividend payments and interest income recorded accurately for reinvestment optimization." },
                    { t: "Capital Gains and Losses", d: "Monitoring tax implications on securities transactions for strategy adjustments." },
                    { t: "Performance Reports", d: "Periodic insights to gauge the success of investment strategies." }
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="block text-sm font-extrabold mb-1">{item.t}</span>
                      <span className="text-sm text-brand-navy/70 leading-relaxed">{item.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-navy/5 rounded-[2rem] p-10 border border-brand-navy/5">
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy/40 mb-8 border-b border-brand-navy/10 pb-4">Executive Benefits</h4>
                <div className="space-y-10">
                  <div className="flex gap-5">
                    <div className="h-10 w-10 shrink-0 bg-brand-navy text-brand-accent rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-lg font-bold mb-1 leading-tight">Financial Clarity</span>
                      <span className="text-sm text-brand-navy/60 leading-relaxed">Clear view of holdings, performance, and income generation.</span>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="h-10 w-10 shrink-0 bg-brand-navy text-brand-accent rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-lg font-bold mb-1 leading-tight">Informed Decision-Making</span>
                      <span className="text-sm text-brand-navy/60 leading-relaxed">Armed with data-driven insights and expert recommendations.</span>
                    </div>
                  </div>
                </div>
                <button className="mt-12 w-full py-4 px-8 bg-brand-navy text-brand-accent rounded-full font-bold shadow-2xl transition-transform hover:scale-105">
                  Consult Portfolio Experts
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
