import { useState, useEffect } from 'react';

interface HamburgerProps {
  navLinks: Array<{ name: string; href: string }>;
}

export default function Hamburger({ navLinks }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.modal-content') && !target.closest('.hamburger-button')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={toggleModal}
        className="mobile-lg:hidden hamburger-button text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 transition-colors"
        style={{ color: 'white' }}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Modal Overlay and Content */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] mobile-lg:hidden">
          {/* Overlay - Fades out the rest of the screen */}
          <div
            className="absolute inset-0 bg-black/60 transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            onClick={closeModal}
          />

          {/* Modal Content - Slides in from right */}
          <div
            className="modal-content absolute right-0 top-0 h-full w-3/4 max-w-sm bg-[#7a6b4a] shadow-2xl transform transition-transform duration-300 ease-out"
            style={{ 
              backgroundColor: '#7a6b4a',
              transform: 'translateX(0)',
              animation: 'slideInRight 0.3s ease-out'
            }}
          >
            <div className="flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <h2 className="text-xl font-serif font-bold text-white">Menu</h2>
                <button
                  onClick={closeModal}
                  className="text-white hover:opacity-80 transition-opacity p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={closeModal}
                        className="block text-white hover:opacity-80 transition-opacity duration-200 py-3 px-4 rounded-lg hover:bg-white/10 text-lg font-medium"
                        style={{ color: 'white' }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

