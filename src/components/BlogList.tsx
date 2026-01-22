import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/Blogs";
import BlogCard from "./BlogCard";
import { Blog } from "../types/blog";

interface BlogListProps {
  onSelect: (blog: Blog) => void;
}

export default function BlogList({ onSelect }: BlogListProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs</p>;

  return (
    <div className="space-y-4">
      {data?.map((blog: Blog) => (
        <BlogCard key={blog.id} blog={blog} onClick={onSelect} />
      ))}
    </div>
  );
}
