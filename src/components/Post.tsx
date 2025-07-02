import React from 'react';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
  isAuthenticated: boolean;
  onAuthRequired: () => void;
}

export const Post: React.FC<PostProps> = ({ post, isAuthenticated, onAuthRequired }) => {
  const handleInteraction = (action: string) => {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }
    alert(`${action} function not implemented`);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'just now';
    if (diffInMinutes < 60) return `${diffInMinutes} mins ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start space-x-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
            <span className="text-sm text-gray-500">
              {formatTimeAgo(post.timestamp)}
            </span>
          </div>
          
          <div className="mb-4">
            {post.emoji && (
              <span className="text-2xl mr-2">{post.emoji}</span>
            )}
            <p className="text-gray-800 leading-relaxed">{post.content}</p>
          </div>
          
          <div className="flex items-center space-x-6">
            {[
              { icon: Heart, name: 'like', color: 'text-gray-500 hover:text-red-500' },
              { icon: MessageCircle, name: 'comment', color: 'text-gray-500 hover:text-blue-500' },
              { icon: Share, name: 'share', color: 'text-gray-500 hover:text-green-500' }
            ].map(({ icon: Icon, name, color }) => (
              <button
                key={name}
                onClick={() => handleInteraction(name)}
                className={`flex items-center space-x-2 ${color} transition-colors group`}
              >
                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm capitalize">{name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};