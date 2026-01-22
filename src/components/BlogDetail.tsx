import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/Blogs";
import { Blog } from "../types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface BlogDetailProps {
  blogId: string | null;
}

export default function BlogDetail({ blogId }: BlogDetailProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) return <p>Select a blog to view details</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog</p>;

  const blog: Blog = data;

  return (
    <Card>
      <CardHeader>
        <img src={blog.coverImage} alt={blog.title} className="w-full h-48 object-cover rounded mb-4" />
        <CardTitle>{blog.title}</CardTitle>
        <p className="text-gray-600">{blog.description}</p>
        <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{blog.content}</p>
      </CardContent>
    </Card>
  );
}
