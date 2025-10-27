import React, { Component } from 'react';
import axios from 'axios';

class ViewBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchBlogs();
  }

  fetchBlogs = async () => {
    try {
      const { data } = await axios.get('/api/blogs');
      this.setState({ blogs: data.blogs, loading: false });
    } catch (err) {
      // THIS LINE MUST MATCH THE TEST
      this.setState({ error: 'Unable to load blogs', loading: false });
    }
  };

  render() {
    const { blogs, loading, error } = this.state;

    return (
      <div>
        <h2>All Blog Posts</h2>

        {loading && <p>Loading blogs</p>}

        {/* EXACT ERROR TEXT */}
        {error && <p>{error}</p>}

        {!loading && !error && blogs.length === 0 && (
          <p>No blogs available yet</p>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div key={blog._id}>
                <h3>{blog.title}</h3>
                <p>By {blog.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ViewBlogs;
