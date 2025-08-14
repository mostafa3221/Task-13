import React, { useEffect, useState } from "react";
import "../styles/posts.css";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [user, setuser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>{
        setPost(data);
        setLoading(false);
      }); 
    }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setuser(data)
       setLoading(false);
    });
  }, []);
  const namepost = post.map((post) => {

    {post.id === user.find((user) => user.id === post.id) ? user.name:''}
  });


 
return (
  <div className="posts">
    {loading ? (
      <h2>Loading...</h2>
    ) : (
      post.map((post) => (
        <div className="card" key={post.id}>
          <h2>{user.find((u) => u.id == post.userId)?.name || ''}</h2>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))
    )}
  </div>
);}




export default Posts;
