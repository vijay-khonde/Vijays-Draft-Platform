import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

interface PostListProps {
  selectedCategory?: string;
}

const PostList: React.FC<PostListProps> = ({ selectedCategory }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://akatsukis-draft-backend.onrender.com/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  }, []);

  const filteredPosts = selectedCategory
    ? posts.filter((post: any) => post.category === selectedCategory)
    : posts;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full mb-10">
          <h4 className="text-[#ff5740] font-semibold text-[11px] tracking-[0.25em] uppercase mb-2">
            The Collective
          </h4>
          <h2 className="text-white font-bold text-4xl tracking-tight">
            Daily Feed {selectedCategory && <span className="text-[#ff5740]/60 ml-2">/ {selectedCategory}</span>}
          </h2>
        </div>

        {/* Posts */}
        <div className="w-full flex flex-col gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post: any) => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <div className="text-gray-500 text-center py-20 bg-white/5 rounded-2xl border border-white/5">
              No stories found in this category yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostList;