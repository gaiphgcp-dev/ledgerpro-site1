import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-brand-navy/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/">
          <Logo size={42} />
        </NavLink>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Pricing Plan', path: '/pricing' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              className={({ isActive }) => 
                `transition-colors hover:text-brand-accent ${isActive ? 'text-brand-accent' : 'text-brand-accent/60'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
