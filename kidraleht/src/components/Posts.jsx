import "../css/Posts.css"
import "../css/Post.css"
import { Link } from "react-router-dom";
import postsFromFile from "../data/posts.json";
import { useRef, useState } from "react";


const Posts = () => {
  const [posts, setPosts] = useState(postsFromFile);
  const searchedRef = useRef();
  const [category, setCategory] = useState("kõik");

  const filterCategories = (categoryClicked) => {
    if (categoryClicked === "kõik") {
      setPosts(postsFromFile);
      setCategory("kõik")
      return;
    }

    const filteredPosts = postsFromFile.filter(post => post.categories.includes(categoryClicked));
    setPosts(filteredPosts)
    setCategory(categoryClicked)
  }

  const searchFromPosts = () => {
    const result = postsFromFile.filter(post => 
      post.title.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      post.description.toLowerCase().includes(searchedRef.current.value.toLowerCase())
      );
    setPosts(result);
    setCategory("kõik")
  }

  const focusSearchBar = () => {
    searchedRef.current.focus();
  }
  
  return (
    <div>
    <div className="postsTopBar">
      <div className="postsCategories">
        <span>KATEGOORIAD</span>
        <button onClick={() => filterCategories("kõik")}>KÕIK</button>
        <button onClick={() => filterCategories("lugemine")}>LUGEMINE</button>
        <button onClick={() => filterCategories("harjutused")}>HARJUTUSED</button>
        <button onClick={() => filterCategories("palad")}>PALAD</button>
        <button onClick={() => filterCategories("näpunäited")}>NÄPUNÄITED</button>
      </div>
      {/* <div className="postsBarCenter">
        <span>POSTITUSI {posts.length}/{postsFromFile.length}</span>
      </div> */}
      <div className="postsSearch">
        <i onClick={focusSearchBar} className="searchIcon fa-solid fa-magnifying-glass"></i>
        <input ref={searchedRef} onChange={searchFromPosts} type="text" />
      </div>
    </div>
    <div className="postsKlickedCategory">
      <span>{category}</span>
      <span>{posts.length}/{postsFromFile.length}</span>
    </div>
    <div className="posts">
      {posts.map(post =>
      <div className="post">
        <div className="activePost">
          <Link to={"/post/" + post.route + "/" + post.id}><img className="postImg" src={post.image} alt="" /></Link>
          <Link to={"/post/" + post.route + "/" + post.id} className="postLink"><span className="postTitle">{post.title}</span></Link>
        </div>
        <hr />
        <div className="postDesc">
          {post.description}
        </div>
        <div className="postCategories">
          {post.categories.map(category => 
            <span className="category" onClick={() => filterCategories(category)}>{category}</span>
          )}
        </div>
      </div>)}
    </div>
    </div>
  )
}

export default Posts