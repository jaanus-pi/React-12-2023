import "../css/Posts.css"
import Post from "./Post"
import "../css/Post.css"
import { Link } from "react-router-dom";
import postsFromFile from "../data/posts.json";
import { useRef, useState } from "react";


const Posts = () => {
  const [posts, setPosts] = useState(postsFromFile);
  const searchedRef = useRef();

  const filterCategories = (categoryClicked) => {
    if (categoryClicked === "kõik") {
      setPosts(postsFromFile);
      return;
    }

    const filteredPosts = postsFromFile.filter(post => post.categories.includes(categoryClicked));
    setPosts(filteredPosts)
  }

  const searchFromPosts = () => {
    const result = postsFromFile.filter(post => 
      post.title.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      post.description.toLowerCase().includes(searchedRef.current.value.toLowerCase())
      );
    setPosts(result);
  }
  
  return (
    <div>
    <div>
      Categories:
      <button onClick={() => filterCategories("kõik")}>kõik</button>
      <button onClick={() => filterCategories("lugemine")}>lugemine</button>
      <button onClick={() => filterCategories("harjutused")}>harjutused</button>
      <button onClick={() => filterCategories("palad")}>palad</button>
      <button onClick={() => filterCategories("näpunäited")}>näpunäited</button>
      <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      <input ref={searchedRef} onChange={searchFromPosts} type="text" />
    </div>
    <div className="posts">
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
      {posts.map(post =>
      <div className="post">
        <img className="postImg" src={post.image} alt="" />
        <Link to={"/post/" + post.route + "/" + post.id} className="postLink"><span className="postTitle">{post.title}</span></Link>
        <hr />
        <div className="postDesc">
          {post.description}
        </div>
        <div className="postCategories">
          {post.categories.map(category => 
            <span className="category">{category}</span>
          )}
        </div>
      </div>)}
    </div>
    </div>
  )
}

export default Posts