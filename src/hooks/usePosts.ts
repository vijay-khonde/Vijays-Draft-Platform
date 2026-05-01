import { useEffect, useState } from "react";
import {
  fetchPosts,
  fetchPostById,
  createPost,
} from "../services/postService";

export const usePosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔥 Fetch all posts
  const getPosts = async () => {
    try {
      setLoading(true);
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Get single post
  const getPost = async (id: string) => {
    try {
      return await fetchPostById(id);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 Create post
  const addPost = async (formData: FormData) => {
    try {
      const res = await createPost(formData);
      return res;
    } catch (err) {
      console.error("Error creating post", err);
    }
  };

  // Auto fetch on load
  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
    loading,
    getPosts,
    getPost,
    addPost,
  };
};