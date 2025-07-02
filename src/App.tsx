import React, { useState } from "react";
import { Header } from "./components/Header";
import { Feed } from "./components/Feed";
import { AuthModal } from "./components/AuthModal";
import { useAuth } from "./hooks/useAuth";

const intialPosts = [
  {
    id: "3",
    author: {
      id: "3",
      name: "Jane Doe",
      email: "jane@example.com",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    emoji: "💡",
  },
  {
    id: "2",
    author: {
      id: "2",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    emoji: "👍",
  },
  {
    id: "1",
    author: {
      id: "1",
      name: "Theresa Webb",
      email: "theresa@example.com",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: new Date(Date.now() - 3 * 60 * 1000),
    emoji: "😊",
  },
];
function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated, user, signIn, signUp, signOut } = useAuth();

  const handleAuthRequired = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleSignIn = (email: string, password: string) => {
    signIn(email, password);
  };

  const handleSignUp = (name: string, email: string, password: string) => {
    signUp(name, email, password);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} isAuthenticated={isAuthenticated} onSignOut={signOut} onAuthClick={() => setIsAuthModalOpen(true)} />

      <main>
        <Feed user={user} isAuthenticated={isAuthenticated} onAuthRequired={handleAuthRequired} intialPosts={intialPosts} />
      </main>

      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} onSignIn={handleSignIn} onSignUp={handleSignUp} />
    </div>
  );
}

export default App;
