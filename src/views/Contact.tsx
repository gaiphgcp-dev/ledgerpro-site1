import React from 'react';
import { motion } from 'motion/react';
import { Mail, Globe, Instagram, Linkedin, Facebook, Send, MapPin, Phone, MessageSquare } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ContactCard = ({ icon, title, label, href, delay = 0 }: { icon: React.ReactNode, title: string, label: string, href: string, delay?: number }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    whileHover={{ y: -5, borderColor: 'rgba(37, 99, 235, 0.4)' }}
    className="group flex items-center gap-5 rounded-3xl border border-white/5 bg-white/[0.02] p-6 soft-shadow backdrop-blur-sm transition-all hover:bg-white/[0.05]"
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-brand-navy">
      {icon}
    </div>
    <div className="overflow-hidden">
      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 mb-0.5">{title}</div>
      <div className="truncate text-sm font-bold text-white transition-colors group-hover:text-brand-accent">{label}</div>
    </div>
  </motion.a>
);

export default function Contact() {
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
            <MessageSquare className="h-3 w-3" /> Get In Touch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-white md:text-6xl"
          >
            Let's Start a <span className="text-brand-accent">Conversation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-brand-accent/60"
          >
            Have questions about our bookkeeping or financial services? Our team is ready to provide the precision your business deserves.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-20">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left Column: Contact Links */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Connect With Us</h2>
              <p className="text-brand-accent/60 text-sm">Reach out via our primary channels or find us on social media.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <ContactCard 
                  icon={<Mail className="h-6 w-6" />} 
                  title="Primary Email" 
                  label="account1@ledgerpro.org.uk" 
                  href="mailto:account1@ledgerpro.org.uk"
                  delay={0.1}
                />
                <ContactCard 
                  icon={<Globe className="h-6 w-6" />} 
                  title="Official Website" 
                  label="ledgerpro.org.uk" 
                  href="https://ledgerpro.org.uk"
                  delay={0.2}
                />
                <ContactCard 
                  icon={<Instagram className="h-6 w-6" />} 
                  title="Instagram" 
                  label="@ledgerpro01" 
                  href="https://instagram.com/ledgerpro01"
                  delay={0.3}
                />
                <ContactCard 
                  icon={<Linkedin className="h-6 w-6" />} 
                  title="LinkedIn" 
                  label="Heracles George Parafina" 
                  href="https://linkedin.com/in/heracles-george-parafina-29629b29a"
                  delay={0.4}
                />
                <ContactCard 
                  icon={<Facebook className="h-6 w-6" />} 
                  title="Facebook" 
                  label="LedgerPro Solutions" 
                  href="https://facebook.com/profile.php?id=61553472084908"
                  delay={0.5}
                />
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-brand-accent/5 border border-brand-accent/10 p-10">
              <h3 className="text-lg font-bold text-white mb-6">Our Commitments</h3>
              <ul className="space-y-4">
                {[
                  "Rapid response within 24 business hours",
                  "Encrypted and secure communication",
                  "Personalized financial consultation",
                  "Global virtual support availability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-brand-accent/70">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            {...fadeUp}
            className="rounded-[3rem] bg-white/[0.03] border border-white/5 p-12 soft-shadow"
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
              <p className="text-brand-accent/40 text-sm">Fill out the form below and an advisor will reach out.</p>
            </div>

            <form 
              action="https://formspree.io/f/mbdbbzpg" 
              method="POST" 
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="client_name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-brand-navy/40 px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="client_email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-brand-navy/40 px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-white/10 bg-brand-navy/40 px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your business needs..."
                  className="w-full rounded-2xl border border-white/10 bg-brand-navy/40 px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="group w-full rounded-full bg-brand-accent py-5 font-bold text-brand-navy shadow-xl shadow-brand-accent/10 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
