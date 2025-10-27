import React, { useState } from 'react'; 
import axios from 'axios'; 
 
const AddBlog = () => { 
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [error, setError] = useState(''); 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    if (!title || !content) { 
      setError('Title and content are required'); 
      return; 
    } 
 
    try { 
      await axios.post('/api/blogs', { title, content }); 
      setError(''); 
      setTitle(''); 
      setContent(''); 
    } catch (err) { 
      setError('Failed to create blog'); 
    } 
  }; 
 
  return ( 
    <div> 
      <h2>Create New Blog Post</h2> 
      <form onSubmit={handleSubmit}> 
        <div> 
          <label htmlFor="title">Blog Title</label> 
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          /> 
        </div> 
        <div> 
          <label htmlFor="content">Blog Content</label> 
          <textarea 
            id="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
          ></textarea> 
        </div> 
        {error && <p data-testid="error-message">[Error - You need to specify the message]</p>} 
        <button type="submit">Publish Blog</button> 
      </form> 
    </div> 
  ); 
}; 
 
export default AddBlog;
