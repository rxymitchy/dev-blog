
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts, BlogPost as BlogPostType } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommentSection from '../components/CommentSection';
import NewsletterSignup from '../components/NewsletterSignup';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the current post
  const post = blogPosts.find(post => post.id === id);
  
  // Get related posts (same category, excluding current)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3)
    : [];
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If post not found, redirect to home
    if (!post && id) {
      navigate('/');
    }
  }, [id, post, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container-custom py-8">
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Link>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-4">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Image */}
        <section className="py-6 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div 
                className="blog-content mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="flex items-center mr-2">
                  <Tag size={18} className="mr-2 text-gray-600" />
                </div>
                {post.tags.map(tag => (
                  <Link 
                    key={tag}
                    to={`/?tag=${tag}`}
                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              
              {/* Share Buttons */}
              <div className="border-t border-b border-gray-200 py-6 my-8">
                <div className="flex items-center">
                  <span className="font-medium mr-4 flex items-center">
                    <Share2 size={18} className="mr-2" /> Share this article:
                  </span>
                  <div className="flex space-x-4">
                    <a 
                      href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-900"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="bg-gray-50 p-6 rounded-lg flex items-start">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg mb-2">About {post.author.name}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies fermentum. 
                    Curabitur facilisis, nunc nec aliquam faucibus, nisl nisl aliquet nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            
            {relatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((related: BlogPostType) => (
                  <article key={related.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                    <Link to={`/blog/${related.id}`}>
                      <img 
                        src={related.coverImage} 
                        alt={related.title}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                          {related.category}
                        </span>
                      </div>
                      
                      <Link to={`/blog/${related.id}`}>
                        <h3 className="font-bold text-xl text-gray-900 hover:text-primary transition-colors mb-3">
                          {related.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {related.excerpt}
                      </p>
                      
                      <Link 
                        to={`/blog/${related.id}`}
                        className="text-primary font-medium hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-gray-600">No related articles found.</p>
            )}
          </div>
        </section>
        
        {/* Comments Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <CommentSection postId={post.id} />
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <NewsletterSignup />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPost;
