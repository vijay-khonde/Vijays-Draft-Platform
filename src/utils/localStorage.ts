import type { Post } from "../types/post.ts";

const STORAGE_KEY = "posts";

export const getPosts = (): Post[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const savePosts = (posts: Post[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

export const addPost = (post: Post) => {
  const posts = getPosts();
  posts.push(post);
  savePosts(posts);
};