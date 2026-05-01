const SAVE_KEY = "savedPosts";

// 🔥 Get all saved post IDs
export const getSavedPosts = (): string[] => {
  const data = localStorage.getItem(SAVE_KEY);
  return data ? JSON.parse(data) : [];
};

// 🔥 Toggle save (add/remove) + return current state
export const toggleSavePost = (id: string): boolean => {
  const saved = getSavedPosts();

  let updated;
  let isSavedNow;

  if (saved.includes(id)) {
    updated = saved.filter((pid) => pid !== id);
    isSavedNow = false;
  } else {
    updated = [...saved, id];
    isSavedNow = true;
  }

  localStorage.setItem(SAVE_KEY, JSON.stringify(updated));
  return isSavedNow;
};

// 🔥 Check if post is saved
export const isPostSaved = (id: string): boolean => {
  return getSavedPosts().includes(id);
};