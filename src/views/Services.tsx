import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Check, 
  FileText, 
  RefreshCcw, 
  BarChart4, 
  Search, 
  Receipt, 
  Landmark, 
  ArrowUpRight, 
  ArrowDownRight, 
  Zap, 
  Plus, 
  TrendingUp, 
  PieChart 
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ServiceCard = ({ icon, title, description, delay = 0 }: { icon: React.ReactNode, title: string, description: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)" }}
    className="bg-white/5 rounded-[2rem] border border-white/5 p-8 transition-all group backdrop-blur-sm flex flex-col h-full"
  >
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563eb]/10 text-[#2563eb] transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
      {icon}
    </div>
    <h3 className="mb-4 text-xl font-bold text-white tracking-tight">{title}</h3>
    <div className="text-sm leading-relaxed text-slate-400 flex-1">
      {description}
    </div>
    <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="mt-8 block">
      <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(37,99,235,0.4)" }}
        whileTap={{ scale: 0.98 }}
        animate={{ boxShadow: ["0 0 10px rgba(37,99,235,0.1)", "0 0 20px rgba(37,99,235,0.3)", "0 0 10px rgba(37,99,235,0.1)"] }}
        transition={{ animate: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
        className="w-full py-3 rounded-full font-bold text-xs text-center transition-colors cursor-pointer bg-[#2563eb] text-white uppercase tracking-widest"
      >
        Inquire Now
      </motion.div>
    </Link>
  </motion.div>
);

const CustomList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/20 text-[#2563eb]">
          <Check className="h-3 w-3" />
        </div>
        <span className="text-sm text-slate-400 leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

export default function Services() {
  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-24 pb-32 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">Our Expertise</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Elite Financial <span className="text-[#2563eb]">Solutions.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 font-medium"
          >
            Precision bookkeeping and strategic financial management designed for high-growth enterprises and individuals.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        {/* Core Capabilities */}
        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard 
            icon={<FileText className="h-7 w-7" />}
            title="Accurate Financial Recording"
            description="At LedgerPro, we provide precise and innovative bookkeeping services to ensure your financial records are accurate and up-to-date. Our team of experts will work closely with you to create a customized plan that meets your specific needs. We'll take care of the details, so you can focus on what you do best."
            delay={0.1}
          />
          <ServiceCard 
            icon={<RefreshCcw className="h-7 w-7" />}
            title="Monthly Reconciliation"
            description="Our monthly reconciliation service ensures that your financial records are always in sync with your actual financial position. We expertly match your financial records with bank statements, identifying discrepancies, and ensuring precision."
            delay={0.2}
          />
          <ServiceCard 
            icon={<BarChart4 className="h-7 w-7" />}
            title="Financial Reporting"
            description="We transform your financial data into a strategic asset by delivering detailed and easy-to-understand reports. These reports provide you with the insights you need to make informed decisions and plan for the future."
            delay={0.3}
          />
        </div>

        {/* Specialized Operations */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {/* Historical Clean-up */}
          <ServiceCard 
            icon={<Search className="h-7 w-7" />}
            title="Historical Bookkeeping Clean-up"
            description={
              <div className="space-y-4">
                <p>Involves a thorough review and correction of past financial records and transactions for our clients.</p>
                <CustomList items={[
                  "Ideal for businesses that may have messy or inaccurate historical accounting data.",
                  "Meticulous review of records, rectifying errors and reconciling accounts.",
                  "Ensuring books accurately reflect the financial history of the business.",
                  "Provides a reliable foundation for future financial planning and decision-making.",
                  "Confidence in accuracy for tax compliance, audits, and financial analysis."
                ]} />
              </div>
            }
            delay={0.4}
          />

          {/* Money Market */}
          <ServiceCard 
            icon={<Landmark className="h-7 w-7" />}
            title="Money Market Reconciliation"
            description={
              <div className="space-y-4">
                <p>Designed to ensure that our clients' money market accounts are accurately maintained and reconciled. This service includes:</p>
                <div className="grid gap-4 mt-2">
                  {[
                    { t: "Transaction Monitoring", d: "Tracking deposits, withdrawals, interest accruals, and fees." },
                    { t: "Reconciliation", d: "Comparing client records with financial institution statements." },
                    { t: "Interest Calculation", d: "Accurate calculation of interest earnings and reinvestments." },
                    { t: "Fee Management", d: "Monitoring and accounting for any applicable fees." },
                    { t: "Reporting", d: "Detailed status reports on earnings and account balances." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-[#2563eb]/20 transition-colors">
                      <span className="block text-sm font-bold text-white mb-1">{item.t}</span>
                      <span className="text-xs text-slate-500">{item.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
            delay={0.5}
          />
        </div>

        {/* Support Services Grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard 
            icon={<Receipt className="h-7 w-7" />}
            title="Expense Management"
            description={
              <CustomList items={[
                "Unlimited monthly expense review and categorization.",
                "Assistance with tracking and organizing receipts.",
                "Expense report preparation and submission.",
                "Quarterly expense trend analysis.",
                "Email support during business hours."
              ]} />
            }
            delay={0.1}
          />
          <ServiceCard 
            icon={<ArrowUpRight className="h-7 w-7" />}
            title="Accounts Receivable"
            description={
              <div className="space-y-4">
                <p>Streamline your invoicing and collection process.</p>
                <CustomList items={[
                  "Create and send professional invoices promptly.",
                  "Track receivables and follow up overdue payments.",
                  "Manage aging reports for executive overview.",
                  "Accurately record incoming system payments."
                ]} />
              </div>
            }
            delay={0.2}
          />
          <ServiceCard 
            icon={<ArrowDownRight className="h-7 w-7" />}
            title="Accounts Payable"
            description={
              <div className="space-y-4">
                <p>Streamline payment process and vendor management.</p>
                <CustomList items={[
                  "Organize and categorize incoming bills.",
                  "Ensure timely payments to vendors and suppliers.",
                  "Take advantage of early payment discounts.",
                  "Maintain accurate records of outgoing payments."
                ]} />
              </div>
            }
            delay={0.3}
          />
        </div>

        {/* Pricing/Tier Section */}
        <section className="mt-32">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-black text-white tracking-widest uppercase mb-4">QuickBooks Online Subscription</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Scalable cloud accounting solutions matched to your business size.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <PricingTier 
                name="QuickBooks Online Simple" 
                target="Freelancers & Self-Employed"
                icon={<Zap className="h-6 w-6" />}
                features={[
                    "Track income and expenses",
                    "Create and send invoices",
                    "Connect to bank accounts",
                    "Access to basic reporting"
                ]}
            />
            <PricingTier 
                name="QuickBooks Online Plus" 
                target="Small to Medium Businesses"
                featured={true}
                icon={<Plus className="h-6 w-6" />}
                features={[
                    "All features of Simple Start",
                    "Manage and pay bills",
                    "Track inventory",
                    "Budgeting & project records",
                    "Enhanced reporting capabilities"
                ]}
            />
            <PricingTier 
                name="QuickBooks Online Advanced" 
                target="Large Businesses & Complex Needs"
                icon={<TrendingUp className="h-6 w-6" />}
                features={[
                    "All features of Plus",
                    "Premium customer support",
                    "Accelerated invoicing",
                    "Smart reporting & insights",
                    "Up to 25 users"
                ]}
            />
          </div>
        </section>

        {/* Securities Portfolio Management */}
        <section className="mt-32">
            <motion.div 
                {...fadeUp}
                className="bg-white/5 rounded-[3rem] border border-white/5 p-12 md:p-16 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563eb]/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10 grid gap-16 lg:grid-cols-2">
                    <div>
                        <div className="h-16 w-16 bg-[#2563eb]/10 text-[#2563eb] rounded-2xl flex items-center justify-center mb-8">
                            <PieChart className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-widest uppercase mb-8">Securities Portfolio Management</h2>
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#2563eb] mb-6">Key Components</h4>
                                <CustomList items={[
                                    "Comprehensive Portfolio Tracking: Detailed records of security holdings and valuations.",
                                    "Regular Reconciliation: Data matched with institution records to rectify discrepancies.",
                                    "Income Tracking: Accurate recording of dividends and interest income.",
                                    "Capital Gains and Losses: Monitoring tax implications for strategy adjustments.",
                                    "Performance Reports: Insights into historical and current investment success."
                                ]} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center bg-black/20 rounded-[2rem] p-10 mt-12 lg:mt-0">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#2563eb] mb-10 text-center">Exclusive Benefits</h4>
                        <div className="space-y-12">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-white mb-2 underline decoration-[#2563eb] underline-offset-8">Financial Clarity</span>
                                <p className="text-sm text-slate-500">A clear, up-to-date view of holdings, performance, and income.</p>
                            </div>
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-white mb-2 underline decoration-[#2563eb] underline-offset-8">Informed Decision-Making</span>
                                <p className="text-sm text-slate-500">Data-driven insights and expert recommendations for your success.</p>
                            </div>
                        </div>
                        <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="mt-12 block mx-auto w-full max-w-xs">
                          <motion.div
                            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(37,99,235,0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            animate={{ boxShadow: ["0 0 10px rgba(37,99,235,0.1)", "0 0 20px rgba(37,99,235,0.3)", "0 0 10px rgba(37,99,235,0.1)"] }}
                            transition={{ animate: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                            className="w-full py-4 rounded-full font-bold text-sm text-center transition-colors cursor-pointer bg-[#2563eb] text-white uppercase tracking-widest"
                          >
                            Inquire Now
                          </motion.div>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
      </div>
    </div>
  );
}

const PricingTier = ({ name, target, features, icon, featured = false }: { name: string, target: string, features: string[], icon: React.ReactNode, featured?: boolean }) => (
    <motion.div 
        {...fadeUp}
        className={`flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 border ${
            featured 
                ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-[0_20px_50px_rgba(37,99,235,0.3)] scale-105 z-10' 
                : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/10'
        }`}
    >
        <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${featured ? 'bg-white/20 text-white' : 'bg-[#2563eb]/10 text-[#2563eb]'}`}>
            {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 leading-tight ${featured ? 'text-white' : 'text-white'}`}>{name}</h3>
        <p className={`text-[10px] font-black uppercase tracking-widest mb-10 ${featured ? 'text-white/60' : 'text-[#2563eb]'}`}>
            {target}
        </p>
        <ul className="flex-1 space-y-4 mb-10">
            {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? 'bg-white/10 text-white' : 'bg-white/5 text-[#2563eb]'}`}>
                        <Check className="h-3 w-3" />
                    </div>
                    <span className={featured ? 'text-white/80' : ''}>{f}</span>
                </li>
            ))}
        </ul>
        <Link to="/contact">
            <motion.div
                whileHover={{ 
                    scale: 1.02, 
                    boxShadow: featured ? "0 0 25px rgba(255,255,255,0.4)" : "0 0 25px rgba(37,99,235,0.4)" 
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                    boxShadow: featured 
                        ? ["0 0 10px rgba(255,255,255,0.1)", "0 0 20px rgba(255,255,255,0.3)", "0 0 10px rgba(255,255,255,0.1)"]
                        : ["0 0 10px rgba(37,99,235,0.1)", "0 0 20px rgba(37,99,235,0.3)", "0 0 10px rgba(37,99,235,0.1)"]
                }}
                transition={{
                    animate: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className={`w-full py-4 rounded-full font-bold text-sm text-center transition-colors cursor-pointer ${
                    featured 
                        ? 'bg-white text-[#2563eb]' 
                        : 'bg-[#2563eb] text-white'
                }`}
            >
                Inquire Now
            </motion.div>
        </Link>
    </motion.div>
);
