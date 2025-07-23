import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: 'The Future of SaaS: Trends to Watch in 2025',
      excerpt: 'Explore the emerging trends shaping the SaaS landscape, from AI integration to micro-services architecture and what it means for businesses.',
      author: 'CodeBlend Team',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'SaaS Trends',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Automation Best Practices for Small Businesses',
      excerpt: 'Learn how small businesses can leverage automation to compete with larger enterprises and streamline their operations effectively.',
      author: 'Sarah Johnson',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'Automation',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Building Scalable APIs: A Developer\'s Guide',
      excerpt: 'Comprehensive guide to designing and implementing APIs that can handle growth and provide excellent performance at scale.',
      author: 'Mike Chen',
      date: '2024-12-05',
      readTime: '12 min read',
      category: 'Development',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Cloud Migration Strategies for Modern Businesses',
      excerpt: 'Essential strategies and considerations for successfully migrating your business applications and data to the cloud.',
      author: 'Alex Rodriguez',
      date: '2024-11-28',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const categories = ['All', 'SaaS Trends', 'Automation', 'Development', 'Cloud Computing'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section ref={sectionRef} id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from the world of technology and business automation.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-transform duration-300 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <div className={`mb-16 transition-transform duration-300 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {filteredPosts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden lg:flex hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
                <div className="lg:w-1/2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 self-start group-hover:bg-purple-100 group-hover:text-purple-800 transition-colors duration-300">
                    Featured
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <article 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-transform duration-300 overflow-hidden group hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 60 + 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors duration-300">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                  <span className="mr-4">{post.author}</span>
                  <Clock className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-6 text-blue-100">Subscribe to our newsletter for the latest insights and industry trends.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-105 transition-transform duration-200"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:scale-105 whitespace-nowrap relative overflow-hidden group/sub">
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">
                Subscribe
                </span>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;