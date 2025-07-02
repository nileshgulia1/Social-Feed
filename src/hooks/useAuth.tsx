import { useState, useCallback } from 'react';
import { User, AuthState } from '../types';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const signIn = useCallback((email: string, password: string) => {
    // Simulate authentication
    const user: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      avatar: `https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1`
    };
    
    setAuthState({
      isAuthenticated: true,
      user,
    });
  }, []);

  const signUp = useCallback((name: string, email: string, password: string) => {
    // Simulate user registration
    const user: User = {
      id: '2',
      name,
      email,
      avatar: `https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1`
    };
    
    setAuthState({
      isAuthenticated: true,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  }, []);

  return {
    ...authState,
    signIn,
    signUp,
    signOut,
  };
};