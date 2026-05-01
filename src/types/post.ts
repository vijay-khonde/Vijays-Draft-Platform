export type Post = {
  id: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  createdAt: string;
  liked?: boolean;
  saved?: boolean;
};