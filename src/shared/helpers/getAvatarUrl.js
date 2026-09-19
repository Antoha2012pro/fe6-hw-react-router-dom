// src/shared/helpers/getAvatarUrl.js
import { getImageUrl } from "../api/tmdbAPI";

export const getAvatarUrl = (avatarPath) => {
  if (!avatarPath) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaia678yAXVtva77Nr4PPbVP8AjxoJgeeRVeZQEBurhw&s=10";
  }

  const cleanPath = avatarPath.startsWith("/") ? avatarPath.slice(1) : avatarPath;

  if (cleanPath.startsWith("http")) {
    return cleanPath;
  }

  return getImageUrl(avatarPath);
};