import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { usePosts } from "../hooks/usePosts";

const PostDetails = () => {
  const { id } = useParams();
  const { getPost } = usePosts();

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    getPost(id).then(setPost);
  }, [id]);

  if (!post) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-10">

        {post.image && (
          <img
            src={post.image}
            className="w-full rounded-lg mb-6"
          />
        )}

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <p className="text-red-400 mb-4">{post.category}</p>

        <div
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default PostDetails;