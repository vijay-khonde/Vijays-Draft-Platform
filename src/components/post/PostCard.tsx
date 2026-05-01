import { useNavigate } from "react-router-dom";
import { Heart, Bookmark } from "lucide-react";
import { useState, useEffect } from "react";
import { toggleSavePost, isPostSaved } from "../../utils/saveVault";
import {
  toggleLikePost,
  isPostLiked,
  getLikeCount,
} from "../../utils/likeStorage";

const PostCard = ({ post, isVault = false }: any) => {
  const navigate = useNavigate();

  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setLikesCount(getLikeCount(post._id)); // ✅ FIXED
    setSaved(isPostSaved(post._id));
    setLiked(isPostLiked(post._id));
  }, [post._id]);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();

    const isNowLiked = toggleLikePost(post._id);

    setLiked(isNowLiked);
    setLikesCount(getLikeCount(post._id)); // ✅ always correct
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isNowSaved = toggleSavePost(post._id);
    setSaved(isNowSaved);
  };

  const cleanText = (text: string) => {
    if (!text) return "";

    if (text.includes("<")) {
      const temp = document.createElement("div");
      temp.innerHTML = text;
      return temp.innerText;
    }

    return text;
  };

  return (
    <div
      className={`bg-gradient-to-b from-[#1c1616] to-[#151111] rounded-[12px] p-5 border border-[#2a2020] hover:border-[#3d2e2e] transition cursor-pointer flex flex-col ${
        isVault ? "w-[280px]" : "w-full max-w-3xl"
      }`}
    >
      <div onClick={() => navigate(`/post/${post._id}`)} className="flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#110e0e] border border-[#2a2020] flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-300 to-orange-200 rounded-full"></div>
          </div>

          <div>
            <div className="text-white font-semibold text-[13px]">
              {post.author || "u/anonymous"}
            </div>
            <div className="text-[#8b7e7e] text-[10px] uppercase tracking-wider">
              {post.time || "JUST NOW"}
            </div>
          </div>
        </div>

        <h3 className="text-white text-[22px] font-bold mb-3">
          {post.title}
        </h3>

        {post.image?.trim() && (
          <div className="mb-4">
            <img
              src={post.image}
              alt="post"
              className="w-full max-h-65 object-contain rounded"
            />
          </div>
        )}

        <p className="text-[#b3a5a5] text-[15px] mb-4 line-clamp-3 whitespace-pre-line">
          {cleanText(post.content || post.body)}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4">
        <div className="flex items-center gap-6">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-[#8b7e7e] hover:text-white text-[12px]"
          >
            <Heart
              className={`w-4 h-4 ${
                liked ? "text-red-500 fill-red-500" : "text-gray-400"
              }`}
            />
            {likesCount}
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 text-[#8b7e7e] hover:text-white text-[12px]"
          >
            <Bookmark
              className={`w-4 h-4 ${
                saved ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;