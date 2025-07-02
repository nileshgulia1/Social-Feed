export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: Date;
  emoji?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}