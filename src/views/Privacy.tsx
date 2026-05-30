import React from 'react';
import { motion } from 'motion/react';
import { ScrollText, ShieldCheck, Cookie, Link2, UserRound, ArrowUpRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

const sectionFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const TableOfContents = () => {
  const sections = [
    { id: 'collect', title: '1. Information We Collect' },
    { id: 'use', title: '2. How We Use Your Information' },
    { id: 'sharing', title: '3. Information Sharing' },
    { id: 'security', title: '4. Data Security' },
    { id: 'cookies', title: '5. Cookies and Tracking' },
    { id: 'third-party', title: '6. Third-Party Links' },
    { id: 'choices', title: '7. Your Choices' },
    { id: 'children', title: '8. Children\'s Privacy' },
    { id: 'changes', title: '9. Changes to Policy' },
    { id: 'contact', title: '10. Contact Us' }
  ];

  return (
    <nav className="sticky top-32 hidden w-64 shrink-0 lg:block">
      <div className="flex items-center gap-2 mb-6 text-brand-accent/40 font-bold uppercase tracking-widest text-[10px]">
        <ScrollText className="h-3 w-3" /> Navigation
      </div>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`}
              className="block py-2 text-sm text-brand-accent/40 transition-all hover:text-brand-accent hover:translate-x-1"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const PolicyList = ({ items }: { items: string[] }) => (
  <ul className="mt-6 space-y-4">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <CheckCircle2 className="h-4 w-4 mt-1 shrink-0 text-brand-accent/30" />
        <span className="text-brand-accent/70 leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

export default function Privacy() {
  return (
    <div className="min-h-screen bg-brand-surface pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Area */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-extrabold tracking-tight text-brand-accent md:text-5xl lg:text-6xl mb-6"
          >
            Privacy <span className="text-brand-accent/30 italic font-serif">Statement</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-2xl bg-brand-accent/5 border border-white/5 px-6 py-3"
          >
            <ShieldCheck className="h-5 w-5 text-brand-accent/40" />
            <span className="text-sm font-medium text-brand-accent/60">
              Effective Date: <span className="text-brand-accent font-bold">October 01, 2023</span>
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Sidebar */}
          <TableOfContents />

          {/* Main Content */}
          <div className="max-w-3xl space-y-24">
            {/* Intro */}
            <motion.section {...sectionFade}>
              <p className="text-lg leading-relaxed text-brand-accent/80 first-letter:text-5xl first-letter:font-bold first-letter:text-brand-accent first-letter:mr-3 first-letter:float-left">
                At LedgerPro, we are committed to protecting privacy and safeguarding of your personal information. This Privacy Statement outlines how we collect, use, disclose, and protect your information when you use our services.
              </p>
            </motion.section>

            {/* Section 1 */}
            <motion.section id="collect" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <span className="text-brand-accent/20">01</span> Information We Collect
              </h2>
              <p className="text-brand-accent/60 leading-relaxed">We may collect the following types of personal information:</p>
              <PolicyList items={[
                "Contact information (e.g., name, email address, phone number).",
                "Financial information (e.g., income, expenses, financial statements, tax-related information).",
                "Business information (e.g., business name, industry, company size).",
                "User account data (e.g., username, password, security questions).",
                "Communication data (e.g., correspondence, support requests, feedback).",
                "Technical information (e.g., IP address, browser type, device information).",
                "Usage data (e.g., website visits, page views, user interactions)."
              ]} />
            </motion.section>

            {/* Section 2 */}
            <motion.section id="use" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <span className="text-brand-accent/20">02</span> How We Use Your Information
              </h2>
              <p className="text-brand-accent/60 leading-relaxed">We use your personal information for the following purposes:</p>
              <PolicyList items={[
                "Providing bookkeeping services and financial advice.",
                "Managing your account and providing customer support.",
                "Personalizing your experience and improving our services.",
                "Communicating with you for service-related matters.",
                "Sending updates, promotional offers, and newsletters with your consent.",
                "Complying with legal obligations and regulations."
              ]} />
            </motion.section>

            {/* Section 3 */}
            <motion.section id="sharing" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <span className="text-brand-accent/20">03</span> Information Sharing
              </h2>
              <p className="text-brand-accent/60 leading-relaxed">We may share your personal information with the following entities:</p>
              <PolicyList items={[
                "Service providers who assist in delivering our services.",
                "Legal and regulatory authorities when required by law.",
                "Business partners, with your consent.",
                "Third parties during business transfers or mergers."
              ]} />
            </motion.section>

            {/* Section 4 */}
            <motion.section id="security" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <span className="text-brand-accent/20">04</span> Data Security
              </h2>
              <div className="space-y-4 text-brand-accent/60 leading-relaxed">
                <p>We implement security measures to protect your personal information from unauthorized access or disclosure.</p>
                <div className="p-6 rounded-2xl bg-brand-accent/5 border border-brand-accent/10 italic text-sm">
                  However, no method of data transmission over the internet is entirely secure, and we cannot guarantee the security of your information.
                </div>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section id="cookies" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <Cookie className="h-6 w-6 text-brand-accent/40" /> 05 Cookies and Tracking
              </h2>
              <div className="space-y-4 text-brand-accent/60 leading-relaxed">
                <p>We use cookies and similar tracking technologies to collect information about your usage of our website and services.</p>
                <p>You can manage your cookie preferences through your browser settings.</p>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section id="third-party" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <Link2 className="h-6 w-6 text-brand-accent/40" /> 06 Third-Party Links
              </h2>
              <div className="space-y-4 text-brand-accent/60 leading-relaxed">
                <p>Our website may contain links to third-party websites.</p>
                <p>We are not responsible for the privacy practices or content on these websites. We encourage you to review their privacy statements.</p>
              </div>
            </motion.section>

            {/* Section 7 */}
            <motion.section id="choices" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <span className="text-brand-accent/20">07</span> Your Choices
              </h2>
              <p className="text-brand-accent/60 leading-relaxed">You have the following rights regarding your personal information:</p>
              <PolicyList items={[
                "Access, correct, or delete your data.",
                "Object to the processing of your data.",
                "Withdraw consent for marketing communications.",
                "Export your data (if applicable).",
                "Lodge a complaint with the appropriate regulatory authority."
              ]} />
            </motion.section>

            {/* Section 8 */}
            <motion.section id="children" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <UserRound className="h-6 w-6 text-brand-accent/40" /> 08 Children's Privacy
              </h2>
              <div className="space-y-4 text-brand-accent/60 leading-relaxed">
                <p>Our services are not intended for individuals under the age of 13.</p>
                <p>We do not knowingly collect personal information from children.</p>
              </div>
            </motion.section>

            {/* Section 9 */}
            <motion.section id="changes" {...sectionFade} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <span className="text-brand-accent/20">09</span> Changes to Policy
              </h2>
              <div className="space-y-4 text-brand-accent/60 leading-relaxed">
                <p>We may update this Privacy Statement to reflect changes in our practices or for legal compliance.</p>
                <p>When we make changes, the "Effective Date" at the top of this statement will be updated.</p>
              </div>
            </motion.section>

            {/* Section 10 */}
            <motion.section id="contact" {...sectionFade} className="scroll-mt-32">
               <div className="rounded-[2.5rem] bg-brand-accent p-12 text-brand-navy shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8">
                    <Mail className="h-12 w-12 text-brand-navy/5" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">10. Contact Us</h2>
                  <p className="mb-8 font-medium opacity-80">
                    If you have questions, concerns, or requests regarding your privacy, please contact us at our contact information.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-brand-navy text-brand-accent rounded-xl flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-tight">accounts1@ledgerpro.org</span>
                  </div>

                  <p className="mt-12 text-xs font-bold uppercase tracking-widest opacity-40">
                    Thank you for entrusting us with your personal information. We are dedicated to protecting your privacy and providing you with reliable bookkeeping services.
                  </p>
               </div>
            </motion.section>

            {/* Final Consent */}
            <motion.div {...sectionFade} className="text-center pt-24 border-t border-white/5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent/20">
                By using our services, you consent to the collection and use of your information as described in this Privacy Statement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
