import React, { Component } from 'react'; 
import axios from 'axios'; 
 
class ViewBlogs extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      blogs: [], 
      count: 0, 
      loading: true, 
      error: null, 
    }; 
  } 
 
  componentDidMount() { 
    this.fetchBlogs(); 
  } 
 
  fetchBlogs = async () => { 
    try { 
      const response = await axios.get('/api/blogs'); 
      this.setState({ 
        blogs: response.data.blogs, 
        count: response.data.count, 
        loading: false, 
        error: null, 
      }); 
    } catch (err) { 
      this.setState({ 
        loading: false, 
        error: 'Unable to load blogs', 
      }); 
    } 
  }; 
 
  render() { 
    const { blogs, count, loading, error } = this.state; 
 
    return ( 
      <div> 
        <h2>All Blog Posts</h2> 
        {loading && <div>Loading blogs...</div>} 
        {error && <div data-testid="error-message">[Error - You need to specify the message]</div>} 
        {!loading && !error && count === 0 && ( 
          <p>No blogs available yet</p> 
        )} 
        {!loading && !error && count > 0 && ( 
          <div style={{ display: 'grid', gap: '1rem' }}> 
            {blogs.map((blog) => ( 
              <div key={blog._id}> 
                <h3>{blog.title}</h3> 
                <p>By {blog.author}</p> 
                <p>{blog.content}</p> 
              </div> 
            ))} 
          </div> 
        )} 
      </div> 
    ); 
  } 
} 
 
export default ViewBlogs; 
