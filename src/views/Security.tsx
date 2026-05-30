import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Lock, Eye, Key, ShieldCheck, RefreshCw, AlertTriangle, FileCheck, Landmark } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const SecurityCard = ({ title, roman, icon, points, delay = 0 }: { title: string, roman: string, icon: React.ReactNode, points: string[], delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, borderColor: 'rgba(241, 237, 228, 0.2)' }}
    className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-sm transition-all hover:bg-white/[0.05]"
  >
    <div className="mb-6 flex items-center justify-between">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent shadow-inner">
        {icon}
      </div>
      <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent/20">{roman}</span>
    </div>
    <h3 className="mb-8 text-xl font-bold tracking-tight text-white">{title}</h3>
    <ul className="space-y-4">
      {points.map((point, i) => {
        // Regex to find regulatory keywords and wrap them in styled links
        const parts = point.split(/(GDPR|HIPAA|Confidentiality Agreements)/g);
        return (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-accent/40" />
            <span className="text-sm leading-relaxed text-brand-accent/60">
              {parts.map((part, index) => (
                (part === 'GDPR' || part === 'HIPAA' || part === 'Confidentiality Agreements') ? (
                  <a key={index} href="#" className="font-bold text-brand-accent transition-colors hover:text-white underline decoration-brand-accent/20 underline-offset-4">
                    {part}
                  </a>
                ) : part
              ))}
            </span>
          </li>
        );
      })}
    </ul>
  </motion.div>
);

export default function Security() {
  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-navy py-24 md:py-32 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(241,237,224,0.1),transparent_70%)]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-brand-accent/10 text-brand-accent shadow-2xl">
              <ShieldCheck className="h-12 w-12" />
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
              Security and <span className="text-brand-accent">Data Privacy</span>
            </h1>
            <div className="mx-auto max-w-2xl px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <p className="text-sm font-medium text-brand-accent uppercase tracking-[0.2em] mb-2 opacity-40">Objective</p>
              <p className="text-lg font-medium text-brand-accent/80 italic">
                "To establish and maintain robust data security and privacy protocols, ensuring the confidentiality and integrity of sensitive financial data."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Dashboard */}
      <section className="mx-auto max-w-7xl px-6 mt-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <SecurityCard 
            roman="I"
            title="Data Security Protocols"
            icon={<Lock className="h-6 w-6" />}
            points={[
              "Data Encryption: All sensitive financial data must be encrypted both in transit and at rest using industry-standard encryption protocols.",
              "Secure File Storage: Utilizes secure, reputable cloud storage or on-premises solutions with strong encryption to store financial data.",
              "Data Classification: Categorizes financial data based on sensitivity and establish access control levels for each category."
            ]}
            delay={0.1}
          />

          <SecurityCard 
            roman="II"
            title="Access Control Measures"
            icon={<Key className="h-6 w-6" />}
            points={[
              "User Roles and Access Levels: Defines user roles (e.g., administrators, staff, clients) and specify their access levels based on job responsibilities.",
              "Password Policy: Implements a strong password policy, including regular password changes and complex, unique passwords.",
              "Multi-Factor Authentication (MFA): Enables MFA for all systems and platforms that store or transmit financial data.",
              "User Account Management: Maintains an updated list of authorized users and regularly review and revoke access when no longer needed.",
              "Access Requests: Establishes a formal process for employees or clients to request and authorize access to specific financial data."
            ]}
            delay={0.2}
          />

          <SecurityCard 
            roman="III"
            title="Breach Handling & Incident Response"
            icon={<AlertTriangle className="h-6 w-6" />}
            points={[
              "Incident Response Team: Appoints a dedicated incident response team responsible for detecting, reporting, and mitigating security incidents.",
              "Data Breach Notification: In the event of a data breach, immediately notifies affected clients and relevant authorities as required by applicable data protection regulations.",
              "Incident Documentation: Maintains detailed records of all security incidents, including the nature of the incident, actions taken, and outcomes.",
              "Containment and Mitigation: Defines a procedure for containing and mitigating security incidents to prevent further data exposure.",
              "Investigation and Root Cause Analysis: Investigates security incidents to determine the root cause and implements measures to prevent similar incidents in the future.",
              "Regular Security Audits: Conducts regular security audits to identify vulnerabilities.",
              "Employee Training: Trains employees on recognizing and reporting security incidents."
            ]}
            delay={0.3}
          />

          <SecurityCard 
            roman="IV"
            title="Compliance & Legal Standards"
            icon={<FileCheck className="h-6 w-6" />}
            points={[
              "Data Protection Compliance: Ensures compliance with relevant data protection laws, such as GDPR or HIPAA, by implementing required security measures.",
              "Data Retention and Deletion: Establishes a clear policy for data retention, specifying how long documents should be retained and how they should be securely deleted."
            ]}
            delay={0.4}
          />

          <SecurityCard 
            roman="V"
            title="Data Privacy"
            icon={<Eye className="h-6 w-6" />}
            points={[
              "Confidentiality Agreements: Have clients sign confidentiality agreements specifying how their financial information will be handled and protected.",
              "Privacy Controls: Implements privacy controls to protect client data, including policies for data access, processing, and sharing."
            ]}
            delay={0.5}
          />

          <SecurityCard 
            roman="VI"
            title="Continuous Improvement"
            icon={<RefreshCw className="h-6 w-6" />}
            points={[
              "Security Review and Updates: Regularly reviews and updates security protocols to adapt to evolving threats and vulnerabilities."
            ]}
            delay={0.6}
          />

        </div>
      </section>

      {/* Bottom Callout */}
      <section className="mx-auto max-w-4xl px-6 mt-32">
        <motion.div {...fadeUp} className="relative overflow-hidden rounded-[3rem] bg-brand-accent p-12 text-brand-navy shadow-2xl">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-navy/5 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <div className="h-16 w-16 shrink-0 rounded-2xl bg-brand-navy text-brand-accent flex items-center justify-center shadow-lg">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Security is our standard.</h2>
              <p className="mt-2 text-sm font-medium opacity-70 leading-relaxed max-w-xl">
                 Your trust is built on our ability to protect. We maintain zero-trust architectures and rigorous oversight to ensure your records remain ironclad.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
