import Hamburger from './Hamburger';

export default function MobileNavbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Concerts', href: '#concerts' },
    { name: 'Orchestras', href: '#orchestras' },
    { name: 'Artists', href: '#artists' },
    { name: 'Playlists', href: '#playlists' },
    { name: 'Articles', href: '#articles' },
    { name: 'Search', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-[9999] shadow-lg" style={{ backgroundColor: '#7a6b4a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#" className="text-2xl font-serif font-bold text-white hover:opacity-80" style={{ color: 'white' }}>
              Great Music
            </a>
          </div>

          {/* Mobile: Login Button and Hamburger */}
          <div className="flex items-center gap-3">
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
      </div>
    </nav>
  );
}
