import { MDXProvider } from "@mdx-js/react";
import { Link } from "react-router-dom";

interface Props {
  Post: React.ComponentType;
}
export default function BlogPost(props: Props) {
  return (
    <MDXProvider>
      <Link to={"/blog"}>Back</Link>
      <div className="blog-post">
        <props.Post />
      </div>
    </MDXProvider>
  );
}
