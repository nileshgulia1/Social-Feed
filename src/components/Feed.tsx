import React, { useState } from "react";
import { PostEditor } from "./PostEditor";
import { Post } from "./Post";
import { Post as PostType, User } from "../types";

interface FeedProps {
  user: User | null;
  isAuthenticated: boolean;
  onAuthRequired: () => void;
  intialPosts: PostType[];
}

export const Feed: React.FC<FeedProps> = ({ user, isAuthenticated, onAuthRequired, intialPosts }) => {
  const [posts, setPosts] = useState<PostType[]>(intialPosts);

  const handlePublishPost = (content: string, emoji?: string) => {
    if (!user) return;

    const newPost: PostType = {
      id: Date.now().toString(),
      author: user,
      content,
      timestamp: new Date(),
      emoji,
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <PostEditor user={user} isAuthenticated={isAuthenticated} onPublish={handlePublishPost} onAuthRequired={onAuthRequired} />

      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} isAuthenticated={isAuthenticated} onAuthRequired={onAuthRequired} />
        ))}
      </div>
    </div>
  );
};
