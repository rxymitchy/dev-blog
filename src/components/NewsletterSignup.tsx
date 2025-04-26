
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="bg-gradient-to-r from-primary/90 to-primary py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h2 className="text-white text-3xl font-bold mb-3">Subscribe to our Newsletter</h2>
            <p className="text-white/90">
              Get the latest articles, tutorials, and updates straight to your inbox.
              We'll never spam you or share your email with anyone.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
              <div className="relative flex-grow mb-2 sm:mb-0">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-10 py-3 rounded-l-md focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-900 text-white py-3 px-6 rounded-r-md hover:bg-gray-800 transition-colors disabled:opacity-75"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
