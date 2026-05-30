import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const socials = [
    { icon: <Mail className="h-4 w-4" />, href: "mailto:accounts1@ledgerpro.org", label: "Email" },
    { icon: <Instagram className="h-4 w-4" />, href: "https://instagram.com/ledgerpro01", label: "Instagram" },
    { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/heracles-george-parafina-29629b29a", label: "LinkedIn" },
    { icon: <Facebook className="h-4 w-4" />, href: "https://facebook.com/profile.php?id=61553472084908", label: "Facebook" }
  ];

  return (
    <footer className="border-t border-white/5 bg-brand-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo size={42} />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent/20 text-center md:text-left leading-relaxed">
              © 2026 LEDGERPRO VIRTUAL ASSISTANCE SERVICES.<br className="md:hidden" /> ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:items-end">
            <div className="flex gap-6">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] text-brand-accent/40 border border-white/5 transition-all hover:bg-brand-accent hover:text-brand-navy hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex gap-8">
              {[
                { name: 'Privacy', path: '/privacy' },
                { name: 'Terms', path: '#' },
                { name: 'Security', path: '/security' }
              ].map(item => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/40 transition-colors hover:text-brand-accent"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://ledgerpro.org" 
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent/10 transition-colors hover:text-brand-accent/30"
          >
            ledgerpro.org
          </a>
        </div>
      </div>
    </footer>
  );
}
