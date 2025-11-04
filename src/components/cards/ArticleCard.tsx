// Import the typescript interface for the featured article
import { featuredArticle } from '../../data/article';

export default function ArticleCard() {
  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Return the article card
  return (
    <section className="pt-2 md:pt-3 pb-4 md:pb-6" style={{ backgroundColor: '#1b1c2f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8" style={{ color: 'white' }}>
          Featured Article
        </h2>
        <div className="rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/10" style={{ backgroundColor: '#1b1c2f' }}>
          <div className="md:flex">
            {/* Article Image */}
            <div className="md:w-1/2 h-64 md:h-auto flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#1b1c2f' }}>
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Article Content */}
            <div className="md:w-1/2 p-6 md:p-8 lg:p-10" style={{ backgroundColor: '#1b1c2f' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide shadow-md" style={{ backgroundColor: '#7a6b4a', color: 'white' }}>
                  {featuredArticle.category}
                </span>
                <span className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {formatDate(featuredArticle.date)}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4" style={{ color: 'white' }}>
                {featuredArticle.title}
              </h3>
              <p className="mb-4 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  By {featuredArticle.author}
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Non-functional link
                  }}
                  className="px-6 py-2 rounded-lg transition-colors duration-200 font-semibold hover:scale-105 shadow-md"
                  style={{ backgroundColor: '#7a6b4a', color: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a7b5a'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7a6b4a'}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

