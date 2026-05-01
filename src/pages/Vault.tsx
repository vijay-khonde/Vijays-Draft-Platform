import { useMemo, useState } from "react";
import Navbar from "../components/common/Navbar";
import { usePosts } from "../hooks/usePosts";
import { getLikedPosts } from "../utils/likeStorage";
import PostCard from "../components/post/PostCard";
import { getSavedPosts } from "../utils/saveVault";
import Footer from "../components/common/footer";

const Vault = () => {
  const { posts } = usePosts();
  const [activeTab, setActiveTab] = useState<"saved" | "liked">("saved");
  const [refresh, setRefresh] = useState(0); // 🔥 key fix

  const filteredPosts = useMemo(() => {
    if (activeTab === "liked") {
      const likedIds = getLikedPosts();
      return posts.filter((p: any) => likedIds.includes(p._id));
    }

    if (activeTab === "saved") {
      const savedIds = getSavedPosts();
      return posts.filter((p: any) => savedIds.includes(p._id));
    }

    return [];
  }, [posts, activeTab, refresh]);

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-black text-white">
        <div className="relative flex items-center p-10 justify-end mb-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
            <h1 className="text-4xl font-semibold mb-2">The Vault</h1>
            <p className="text-gray-400 max-w-md text-sm">
              Your curated collection of posts.
            </p>
          </div>

          <div className="flex bg-zinc-800 rounded-full p-1 relative top-15">
            {[
              { key: "saved", label: "Saved" },
              { key: "liked", label: "Liked" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key as "saved" | "liked");
                  setRefresh((r) => r + 1); // 🔥 force UI update
                }}
                className={`px-5 py-2 rounded-full text-sm transition ${
                  activeTab === tab.key
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {filteredPosts.length === 0 ? (
            <p className="text-gray-500 text-center py-6 w-full">
              No {activeTab} posts yet
            </p>
          ) : (
            filteredPosts.map((post) => (
              <PostCard key={post._id} post={post} isVault />
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vault;