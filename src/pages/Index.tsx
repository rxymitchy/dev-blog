
import { useState } from 'react';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import NewsletterSignup from '../components/NewsletterSignup';
import { Search, ChevronRight } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  // Get all posts for the list
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-primary">DevBlog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Exploring the latest in web development, design, and technology.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>
        </div>
      </section>
      
      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Recent Articles</h2>
            <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(category => (
                <button 
                  key={category}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 whitespace-nowrap hover:border-primary hover:text-primary transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any articles matching your search.
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="btn-primary"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <NewsletterSignup />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
