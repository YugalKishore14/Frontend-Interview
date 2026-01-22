import { Blog } from "../types/blog";

interface BlogCardProps {
  blog: Blog;
  onClick: (blog: Blog) => void;
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <div
      className="border p-4 rounded shadow cursor-pointer hover:shadow-lg"
      onClick={() => onClick(blog)}
    >
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-gray-600">{blog.author}</p>
      <p className="text-sm text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</p>
    </div>
  );
}