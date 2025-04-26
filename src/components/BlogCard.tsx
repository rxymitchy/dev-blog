
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogData';
import { Clock, Calendar } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <article 
      className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <Link to={`/blog/${post.id}`}>
        <div className="relative">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className={`w-full object-cover ${featured ? 'h-72' : 'h-56'}`}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center mb-3 text-gray-500 text-sm">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readingTime}</span>
          </div>
        </div>
        
        <Link to={`/blog/${post.id}`}>
          <h3 className={`font-bold text-gray-900 hover:text-primary transition-colors mb-3 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          
          <Link 
            to={`/blog/${post.id}`}
            className="text-primary font-medium hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
