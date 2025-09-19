import FirstPost from "./pages/blog/posts/2025-09-18-first-post.mdx";

export interface post {
  slug: string;
  title: string;
  date: string;
  file: React.ComponentType;
}
export const posts: post[] = [
  {
    slug: "first-post",
    title: "My First Post",
    date: "2025-09-18",
    file: FirstPost,
  },
];
