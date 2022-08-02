import type { Post } from "../components/Editor";

export function savePost(post: Post) {
  if (post) {
    return Promise.resolve({ data: {}, status: 200 });
  }

  return Promise.reject({});
}
