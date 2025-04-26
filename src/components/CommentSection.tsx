
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  name: string;
  email: string;
  content: string;
  date: string;
  avatar: string;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      content: 'This article was really informative! I learned a lot about React and its latest features.',
      date: 'April 25, 2025',
      avatar: 'https://i.pravatar.cc/150?u=john',
    },
    {
      id: '2',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      content: "I've been using React for a few years now, and I still found some new information here. Great article!",
      date: 'April 24, 2025',
      avatar: 'https://i.pravatar.cc/150?u=sarah2',
    },
  ]);
  
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.name || !newComment.email || !newComment.content) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    
    const comment: Comment = {
      id: Date.now().toString(),
      name: newComment.name,
      email: newComment.email,
      content: newComment.content,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
    };
    
    setComments(prev => [comment, ...prev]);
    setNewComment({
      name: '',
      email: '',
      content: '',
    });
    
    toast({
      title: "Success",
      description: "Your comment has been posted.",
    });
  };
  
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
      
      {/* Comment Form */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
        <form onSubmit={submitComment}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newComment.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newComment.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Comment
            </label>
            <textarea
              id="content"
              name="content"
              rows={4}
              value={newComment.content}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn-primary"
          >
            Post Comment
          </button>
        </form>
      </div>
      
      {/* Comments List */}
      <div className="space-y-6">
        {comments.map(comment => (
          <div key={comment.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img 
                src={comment.avatar} 
                alt={comment.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold">{comment.name}</h4>
                <p className="text-sm text-gray-500">{comment.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
