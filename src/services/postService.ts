import axios from "axios";

const BASE_URL = "https://akatsukis-draft-backend.onrender.com/api";

// 🔹 Get all approved posts
export const fetchPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data.data;
};

// 🔹 Get single post
export const fetchPostById = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/post/${id}`);
  return res.data.data;
};

// 🔹 Create post
export const createPost = async (formData: FormData) => {
  const res = await axios.post(
    "https://akatsukis-draft-backend.vercel.app/api/addPost",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};