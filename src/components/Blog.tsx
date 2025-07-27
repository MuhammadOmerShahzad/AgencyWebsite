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
    // AI & Machine Learning (featured)
    {
      title: 'OpenAI’s GPT-4o: How Multimodal AI Is Changing the Game',
      excerpt: 'A deep dive into OpenAI’s latest GPT-4o model, its multimodal capabilities, and what this means for the future of AI-powered applications.',
      author: 'Jane Doe',
      date: '2024-06-10',
      readTime: '7 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://openai.com/index/gpt-4o/',
      featured: true
    },
    // Productivity
    {
      title: 'How Figma’s Dev Mode Is Bridging the Gap Between Designers and Developers',
      excerpt: 'Figma’s new Dev Mode is revolutionizing design-to-code handoff. Here’s how teams are using it to streamline workflows and reduce friction.',
      author: 'Alex Kim',
      date: '2024-05-28',
      readTime: '6 min read',
      category: 'Productivity',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://www.figma.com/blog/introducing-dev-mode/',
      featured: false
    },
    // Cloud & Edge
    {
      title: 'The Rise of Edge Computing: What Developers Need to Know in 2024',
      excerpt: 'Edge computing is no longer just a buzzword. Discover the latest trends, use cases, and how to get started with edge deployments.',
      author: 'Priya Nair',
      date: '2024-05-15',
      readTime: '8 min read',
      category: 'Cloud & Edge',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://www.techrepublic.com/article/edge-computing-trends/',
      featured: false
    },
    // Security
    {
      title: 'Why Every Business Needs a Zero Trust Security Strategy',
      excerpt: 'Cyber threats are evolving. Learn why Zero Trust is the new standard for enterprise security and how to implement it effectively.',
      author: 'Michael Lee',
      date: '2024-04-30',
      readTime: '9 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://www.csoonline.com/article/3560747/what-is-zero-trust.html',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Productivity', 'Cloud & Edge', 'Security'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
          <section ref={sectionRef} id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md'
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
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden lg:flex hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-150 ease-out group cursor-pointer">
                <div className="lg:w-1/2 overflow-hidden rounded-2xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-150 ease-out"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col gap-4 justify-center">
                  <span className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium self-start group-hover:bg-teal-100 dark:group-hover:bg-teal-900 group-hover:text-teal-800 dark:group-hover:text-teal-300 transition-colors duration-200">
                    Featured
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{post.excerpt}</p>
                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors duration-200 group">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-4">
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
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-transform duration-150 ease-out overflow-hidden group hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 60 + 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-150 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-4 h-full justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {post.excerpt}
                </p>
                
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 px-4 py-1 rounded bg-teal-50 text-teal-700 font-medium hover:bg-teal-100 transition-colors duration-200 group">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  <User className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                  <span className="mr-4">{post.author}</span>
                  <Clock className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-800 dark:to-cyan-800 rounded-2xl p-8 text-white hover:shadow-2xl hover:shadow-teal-500/25 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 dark:from-teal-900 dark:to-cyan-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-md">Stay Updated</h3>
            <p className="text-xl mb-6 text-white">Subscribe to our newsletter for the latest insights and industry trends.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-105 transition-transform duration-200"
              />
              <button 
                onClick={handleSubmit}
                disabled={submitted}
                className="bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:scale-105 whitespace-nowrap relative overflow-hidden group/sub"
              >
                <span className="relative z-10">
                {submitted ? 'Submitted!' : 'Subscribe'}
                </span>
                <div className="absolute inset-0 bg-teal-50 dark:bg-gray-800 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300"></div>
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