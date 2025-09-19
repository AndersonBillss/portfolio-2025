import { Link } from "react-router-dom";
import { posts } from "../../posts.ts";

export default function Blog() {
  return (
    <div>
      {posts.map((post, index) => (
        <Link to={`/blog/${post.slug}`}>
          <div key={index}>
            <div>{post.title}</div>
            <div>{post.date}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
