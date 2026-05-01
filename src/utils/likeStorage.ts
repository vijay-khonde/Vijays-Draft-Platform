const LIKE_KEY = "likedPosts";
const LIKE_COUNT_KEY = "likeCounts";

// ✅ Get liked post IDs
export const getLikedPosts = (): string[] => {
  return JSON.parse(localStorage.getItem(LIKE_KEY) || "[]");
};

// ✅ Get like counts object
export const getLikeCounts = (): Record<string, number> => {
  return JSON.parse(localStorage.getItem(LIKE_COUNT_KEY) || "{}");
};

// ✅ Get like count for one post
export const getLikeCount = (id: string): number => {
  const counts = getLikeCounts();
  return counts[id] || 0;
};

// ✅ Check liked
export const isPostLiked = (id: string): boolean => {
  return getLikedPosts().includes(id);
};

// ✅ Toggle like + update count
export const toggleLikePost = (id: string): boolean => {
  let liked = getLikedPosts();
  let counts = getLikeCounts();

  let isLikedNow;

  if (liked.includes(id)) {
    liked = liked.filter((pid) => pid !== id);
    counts[id] = Math.max((counts[id] || 1) - 1, 0);
    isLikedNow = false;
  } else {
    liked.push(id);
    counts[id] = (counts[id] || 0) + 1;
    isLikedNow = true;
  }

  localStorage.setItem(LIKE_KEY, JSON.stringify(liked));
  localStorage.setItem(LIKE_COUNT_KEY, JSON.stringify(counts));

  return isLikedNow;
};