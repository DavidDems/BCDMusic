import { useEffect } from 'react';

interface DetailsCardProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  creators?: string | string[];
  content: string;
  image: string;
  additionalInfo?: Record<string, string | string[] | number>;
  actionButtonText?: string;
  imageFit?: 'cover' | 'contain';
  imageWidth?: 'half' | 'wide';
}

export default function DetailsCard({
  isOpen,
  onClose,
  title,
  subtitle,
  creators,
  content,
  image,
  additionalInfo,
  actionButtonText,
  imageFit = 'cover',
  imageWidth = 'half',
}: DetailsCardProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const creatorsDisplay = Array.isArray(creators) ? creators.join(', ') : creators;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20 md:pt-4"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
    >
      <div
        className="relative w-full max-w-4xl max-h-[calc(90vh-5rem)] md:max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: '#1b1c2f' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Layout - Vertical */}
        <div className="md:hidden">
          {/* Image */}
          <div className="w-full h-64 relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
            <img
              src={image}
              alt={title}
              className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          </div>

          {/* Content */}
          <div className="p-6">
            {subtitle && (
              <p className="text-sm mb-2 uppercase tracking-wide font-medium" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: 'white' }}>
              {title}
            </h2>
            {creatorsDisplay && (
              <div className="mb-4 pb-4 border-b border-white/10">
                <p className="text-sm font-medium mb-1" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {Array.isArray(creators) && creators.length > 1 ? 'Creators' : 'Creator'}
                </p>
                <p className="text-base font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {creatorsDisplay}
                </p>
              </div>
            )}
            {additionalInfo && Object.keys(additionalInfo).length > 0 && (
              <div className="mb-4 pb-4 border-b border-white/10 space-y-2">
                {Object.entries(additionalInfo).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm font-medium mb-1 capitalize" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {Array.isArray(value) ? value.join(', ') : String(value)}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="prose prose-invert max-w-none mb-6">
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {content}
              </p>
            </div>
            {actionButtonText && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Fake link - non-functional
                }}
                className="w-full px-6 py-3 rounded-lg transition-all duration-200 font-semibold hover:scale-105 shadow-md"
                style={{ backgroundColor: '#7a6b4a', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a7b5a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7a6b4a'}
              >
                {actionButtonText}
              </button>
            )}
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex">
          {/* Image */}
          <div className={`${imageWidth === 'wide' ? 'w-3/5' : 'w-1/2'} flex-shrink-0 relative overflow-hidden flex items-center justify-center`} style={{ backgroundColor: '#000000' }}>
            <img
              src={image}
              alt={title}
              className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40" />
          </div>

          {/* Content */}
          <div className={`${imageWidth === 'wide' ? 'w-2/5' : 'w-1/2'} p-6 overflow-y-auto max-h-[90vh]`}>
            {subtitle && (
              <p className="text-sm mb-1.5 uppercase tracking-wide font-medium" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {subtitle}
              </p>
            )}
            <h2 className={`${imageWidth === 'wide' ? 'text-3xl' : 'text-4xl'} font-serif font-bold mb-4`} style={{ color: 'white' }}>
              {title}
            </h2>
            {creatorsDisplay && (
              <div className={`${imageWidth === 'wide' ? 'mb-4 pb-4' : 'mb-6 pb-6'} border-b border-white/10`}>
                <p className="text-sm font-medium mb-1.5" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {Array.isArray(creators) && creators.length > 1 ? 'Creators' : 'Creator'}
                </p>
                <p className={`${imageWidth === 'wide' ? 'text-base' : 'text-lg'} font-medium`} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {creatorsDisplay}
                </p>
              </div>
            )}
            {additionalInfo && Object.keys(additionalInfo).length > 0 && (
              <div className={`${imageWidth === 'wide' ? 'mb-4 pb-4' : 'mb-6 pb-6'} border-b border-white/10 space-y-2`}>
                {Object.entries(additionalInfo).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-xs font-medium mb-1 capitalize" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {Array.isArray(value) ? value.join(', ') : String(value)}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="prose prose-invert max-w-none mb-4">
              <p className={`${imageWidth === 'wide' ? 'text-base' : 'text-lg'} leading-relaxed`} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {content}
              </p>
            </div>
            {actionButtonText && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Fake link - non-functional
                }}
                className="w-full px-6 py-3 rounded-lg transition-all duration-200 font-semibold hover:scale-105 shadow-md"
                style={{ backgroundColor: '#7a6b4a', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a7b5a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7a6b4a'}
              >
                {actionButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

