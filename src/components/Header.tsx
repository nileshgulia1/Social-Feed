import React from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  isAuthenticated: boolean;
  onSignOut: () => void;
  onAuthClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  isAuthenticated,
  onSignOut,
  onAuthClick,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">foo-rum</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated && user ? (
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                {user.name}
              </span>
              <button
                onClick={onSignOut}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut size={16} />
                <span className="hidden sm:block">Sign Out</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <LogIn size={16} />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};