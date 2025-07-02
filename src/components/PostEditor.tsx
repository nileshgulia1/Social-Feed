import React, { useState } from 'react';
import { 
  Send, 
  Plus, 
  Image, 
  AtSign, 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered,
  Quote,
  Code,
  Trash2,
  Smile
} from 'lucide-react';
import { User } from '../types';

interface PostEditorProps {
  user: User | null;
  isAuthenticated: boolean;
  onPublish: (content: string, emoji?: string) => void;
  onAuthRequired: () => void;
}

export const PostEditor: React.FC<PostEditorProps> = ({
  user,
  isAuthenticated,
  onPublish,
  onAuthRequired,
}) => {
  const [content, setContent] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }
    if (content.trim()) {
      onPublish(content.trim(), selectedEmoji || undefined);
      setContent('');
      setSelectedEmoji('');
    }
  };

  const handleEditorClick = () => {
    if (!isAuthenticated) {
      onAuthRequired();
    }
  };

  const handleToolbarClick = (tool: string) => {
    alert(`${tool} function not implemented`);
  };

  const emojis = ['😊', '😂', '❤️', '🔥', '💡', '🎉', '👍', '🤔'];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white">
            <option>Paragraph</option>
          </select>
          <div className="flex items-center space-x-1">
            {[
              { icon: Bold, name: 'Bold' },
              { icon: Italic, name: 'Italic' },
              { icon: Underline, name: 'Underline' },
              { icon: List, name: 'Bullet List' },
              { icon: ListOrdered, name: 'Numbered List' },
              { icon: Quote, name: 'Quote' },
              { icon: Code, name: 'Code' }
            ].map(({ icon: Icon, name }) => (
              <button
                key={name}
                onClick={() => handleToolbarClick(name)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                title={name}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => handleToolbarClick('Delete')}
          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Editor */}
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <div className="flex items-start space-x-3">
            <button
              type="button"
              onClick={handleEditorClick}
              className="mt-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Smile size={20} />
            </button>
            <div className="flex-1">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onClick={handleEditorClick}
                placeholder="How are you feeling today?"
                className="w-full min-h-[100px] resize-none border-0 focus:ring-0 text-gray-900 placeholder-gray-500 text-lg leading-relaxed"
                style={{ outline: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Emoji Selector */}
        {isAuthenticated && (
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Add emoji:</span>
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(selectedEmoji === emoji ? '' : emoji)}
                  className={`text-lg p-1 rounded transition-all ${
                    selectedEmoji === emoji
                      ? 'bg-blue-100 ring-2 ring-blue-500'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {[
              { icon: Plus, name: 'Add' },
              { icon: Image, name: 'Image' },
              { icon: AtSign, name: 'Mention' }
            ].map(({ icon: Icon, name }) => (
              <button
                key={name}
                type="button"
                onClick={() => handleToolbarClick(name)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                title={name}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
          
          <button
            type="submit"
            disabled={!content.trim()}
            className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-all ${
              content.trim()
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send size={16} />
            <span>Publish</span>
          </button>
        </div>
      </form>
    </div>
  );
};