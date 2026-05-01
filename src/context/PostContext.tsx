import { createContext, useEffect, useState } from "react";
import type { Post } from "../types/post";
import { getPosts, savePosts } from "../utils/localStorage";

interface PostContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  addPost: (post: Post) => void;
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // ✅ Load posts from localStorage
  useEffect(() => {
    const stored = getPosts();
    setPosts(stored);
  }, []);

  // ✅ Save posts whenever updated
  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  const addPost = (post: Post) => {
    setPosts((prev) => [{ ...post, liked: false, saved: false }, ...prev]);
  };

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, liked: !post.liked }
          : post
      )
    );
  };

  const toggleSave = (id: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, saved: !post.saved }
          : post
      )
    );
  };

  return (
    <PostContext.Provider
      value={{ posts, setPosts, addPost, toggleLike, toggleSave }}
    >
      {children}
    </PostContext.Provider>
  );
};