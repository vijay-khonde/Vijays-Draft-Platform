import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { usePosts } from "../hooks/usePosts";
import Footer from "../components/common/footer";

const WriteRoom = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const { addPost } = usePosts();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const categories = ['story', 'shayari', 'idea', 'art', 'tech', 'social'];

  const handleInput = () => {
    const text = editorRef.current?.innerText.trim();
    setIsEmpty(!text);
  };

  const handlePublish = async () => {
    const content = editorRef.current?.innerText || "";

    if (content.trim().length < 10) return alert("Write more content");
    if (!category) return alert("Select category");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (image) formData.append("image", image);

    const res = await addPost(formData);

    if (res?.success) {
      alert("Post submitted 🔥");
      setTitle("");
      setCategory("");
      setImage(null);
      setIsEmpty(true);
      if (editorRef.current) editorRef.current.innerText = "";
      navigate("/vault");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm text-red-500 mb-8">● LIVE DRAFTING MODE</p>

        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-10 shadow-xl">

          {/* Title */}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Untitled Draft"
            className="w-full text-6xl font-bold bg-transparent outline-none text-gray-500 placeholder-gray-700 mb-8"
          />

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
            <span className="border border-zinc-700 px-3 py-1 rounded-full">
              {new Date().toDateString()}
            </span>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">
              Select Category
            </p>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-full capitalize font-medium text-xs transition ${
                    category === cat
                      ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                      : 'bg-zinc-800 text-gray-400 border border-zinc-700 hover:border-red-500 hover:text-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Image Upload (UPDATED) */}
          <label
            className={`border border-dashed border-zinc-700 rounded-xl h-40 flex items-center justify-center cursor-pointer transition mb-6
              ${image ? "bg-red-500/20 border-red-500" : "hover:border-red-500"}
            `}
          >
            {image ? (
              <span className="text-red-500 text-2xl font-bold tracking-wider">
                IMAGE SELECTED
              </span>
            ) : (
              <span className="text-gray-500">📷 ADD FEATURE IMAGE</span>
            )}

            <input
              type="file"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setImage(file);
              }}
            />
          </label>

          {/* Editor */}
          <div className="relative mt-6">
            {isEmpty && (
              <p className="absolute text-gray-500 pointer-events-none text-lg">
                Begin your narrative here... Let the shadows speak.
              </p>
            )}

            <div
              ref={editorRef}
              contentEditable
              onInput={handleInput}
              className="min-h-[300px] text-gray-300 outline-none leading-8 text-lg"
            ></div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-16 border-t border-zinc-800 pt-6">

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button
                onClick={() => navigate("/vault")}
                className="flex items-center gap-2 hover:text-white transition"
              >
                ← BACK TO VAULT
              </button>

              
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePublish}
                className="px-8 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition shadow-[0_0_20px_rgba(239,68,68,0.5)]"
              >
                POST PIECE
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WriteRoom;