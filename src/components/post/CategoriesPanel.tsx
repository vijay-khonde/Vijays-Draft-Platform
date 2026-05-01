import React from 'react';

const categories = [
  { id: '', name: 'All' },
  { id: 'story', name: 'Story' },
  { id: 'shayari', name: 'Shayari' },
  { id: 'idea', name: 'Idea' },
  { id: 'art', name: 'Art' },
  { id: 'tech', name: 'Tech' },
  { id: 'social', name: 'Social' },
];

interface CategoriesPanelProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoriesPanel: React.FC<CategoriesPanelProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-[#110e0e]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <h3 className="text-[#ff5740] font-semibold text-[13px] tracking-[0.25em] uppercase mb-6">
        Categories
      </h3>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`w-full text-left px-4 py-3 rounded-xl transition text-sm font-medium ${
              selectedCategory === cat.id
                ? 'bg-[#ff5740] text-[#520f07] shadow-[0_0_15px_rgba(255,87,64,0.3)]'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPanel;