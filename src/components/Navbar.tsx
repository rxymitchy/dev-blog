
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          DevBlog
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/blog/1" className="font-medium hover:text-primary transition-colors">Blog</Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
          <button className="btn-primary">Subscribe</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md p-4 slide-up">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/blog/1" 
              className="font-medium hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="font-medium hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-medium hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="btn-primary w-full py-3">Subscribe</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
