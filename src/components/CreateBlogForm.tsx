import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/Blogs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const coverImage = formData.get("coverImage") as string;

    mutation.mutate({
      title,
      category: ["TECH"], // default category
      description,
      date: new Date().toISOString(),
      coverImage: coverImage || "https://via.placeholder.com/400x200",
      content,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="title" placeholder="Title" required />
      <Input name="description" placeholder="Description" required />
      <Textarea name="content" placeholder="Content" required />
      <Input name="coverImage" placeholder="Cover Image URL" />
      <Button type="submit">Create Blog</Button>
    </form>
  );
}
