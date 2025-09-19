import { MDXProvider } from "@mdx-js/react";

interface Props {
  Post: React.ComponentType;
}
export default function BlogPost(props: Props) {
  return (
    <MDXProvider>
      <div className="blog-post">
        <props.Post />
      </div>
    </MDXProvider>
  );
}
