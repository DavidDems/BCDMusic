import { useState } from 'react';
import Hamburger from './Hamburger';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Concerts', href: '#' },
    { name: 'Operas', href: '#' },
    { name: 'Ballets', href: '#' },
    { name: 'Documentaries', href: '#' },
    { name: 'Master Classes', href: '#' },
    { name: 'Jazz', href: '#' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional link - just prevent default
  };

  return (
    <nav className="sticky top-0 z-[9999] shadow-lg" style={{ backgroundColor: '#7a6b4a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-serif font-bold text-white hover:opacity-80" style={{ color: 'white' }}>
              Great Music
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:opacity-80 transition-colors duration-200 font-medium"
                style={{ color: 'white' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent w-48"
                style={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              />
              <button
                type="submit"
                className="ml-2 text-white hover:opacity-80 transition-colors"
                style={{ color: 'white' }}
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>

            {/* Login Button - Desktop */}
            <button
              onClick={(e) => {
                e.preventDefault();
                // Non-functional link
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium shadow-md"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            >
              Login
            </button>
          </div>

          {/* Mobile: Login Button and Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Login Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                // Non-functional link
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg transition-colors duration-200 font-medium shadow-md text-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            >
              Login
            </button>
            {/* Mobile Hamburger Button */}
            <Hamburger navLinks={navLinks} />
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <MobileNavbar />
      </div>
    </nav>
  );
}

