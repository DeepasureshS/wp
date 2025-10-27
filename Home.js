import React from 'react'; 
import { Link } from 'react-router-dom'; 
 
const Home = () => { 
  return ( 
    <div> 
      <h1>BlogSpace Management System</h1> 
      <Link to="/add"> 
        <button>Add Blog</button> 
      </Link> 
      <Link to="/view"> 
        <button>View Blogs</button> 
      </Link> 
    </div> 
  ); 
}; 
 
export default Home; 
