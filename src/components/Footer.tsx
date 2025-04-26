
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">DevBlog</h3>
            <p className="text-gray-400 mb-4">
              A blog for developers, designers, and anyone interested in web technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> About
                </Link>
              </li>
              <li>
                <Link to="/blog/1" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Frontend Development
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Backend Development
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> CSS & Design
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> JavaScript
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Accessibility
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get updates on our latest articles.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary flex-grow"
              />
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} DevBlog. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
