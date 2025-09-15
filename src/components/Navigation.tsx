import React from 'react';
import { GraduationCap, Home, Info, BookOpen, UserPlus, Users, Phone } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About STI', icon: Info, href: '#about' },
    { name: 'Academic Programs', icon: BookOpen, href: '#programs' },
    { name: 'Admissions', icon: UserPlus, href: '#admissions' },
    { name: 'Student Services', icon: Users, href: '#services' },
    { name: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <nav className="sti-blue shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-white" />
            <div className="text-white">
              <div className="font-bold text-lg">STI College</div>
              <div className="text-sm opacity-90">Muñoz-EDSA</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-yellow-300 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}