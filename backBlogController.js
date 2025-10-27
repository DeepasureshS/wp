const Blog = require('../models/blogModel'); 
 
const createBlog = async (req, res) => { 
  try { 
    const { title, content, author } = req.body; 
 
    if (!title || !content) { 
      return res.status(400).json({ 
        message: 'Title and content are required', 
      }); 
    } 
 
    const blogData = { 
      title, 
      content, 
      author: author || 'Anonymous', 
    }; 
 
    const newBlog = await Blog.create(blogData); 
 
    return res.status(201).json({ 
      message: 'Blog created successfully', 
      blog: newBlog, 
    }); 
  } catch (error) { 
    return res.status(500).json({ 
      message: 'Server error', 
    }); 
  } 
}; 
 
const getBlogs = async (req, res) => { 
  try { 
    const blogs = await Blog.find().sort({ createdAt: -1 }); 
 
    return res.status(200).json({ 
      message: 'Blogs retrieved successfully', 
      blogs, 
      count: blogs.length, 
    }); 
  } catch (error) { 
    return res.status(500).json({ 
      message: 'Server error', 
    }); 
  } 
}; 
 
module.exports = { 
  createBlog, 
  getBlogs, 
}; 
