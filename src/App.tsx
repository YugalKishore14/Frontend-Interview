import { useState } from 'react'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'
import CreateBlogForm from './components/CreateBlogForm'
import { Blog } from './types/blog'
import './App.css'

function App() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">CA Monk Blog Application</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
          <BlogList onSelect={setSelectedBlog} />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Create New Blog</h2>
            <CreateBlogForm />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Blog Details</h2>
          <BlogDetail blogId={selectedBlog?.id || null} />
        </div>
      </div>
    </div>
  )
}

export default App
