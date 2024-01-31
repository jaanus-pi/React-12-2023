import { useParams } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import SinglePost from "../components/SinglePost"
import "../css/Single.css"
import postsFromFile from "../data/posts.json"
import "../css/SinglePost.css";

const Single = () => {
  const { id } = useParams();
  const post = postsFromFile[id];

  return (
    <div className="single">
      <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post.image} alt="" className="singlePostImage" />
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Autor: name</span>
        </div>
        <p className="postContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate pariatur nihil consectetur quo
          quos accusamus doloremque, quae 
          quisquam culpa aperiam excepturi eaque suscipit ipsum odit minus sed. Placeat, beatae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate pariatur nihil consectetur quo
          quos accusamus doloremque, quae 
          quisquam culpa aperiam excepturi eaque suscipit ipsum odit minus sed. Placeat, beatae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate pariatur nihil consectetur quo
          quos accusamus doloremque, quae 
          quisquam culpa aperiam excepturi eaque suscipit ipsum odit minus sed. Placeat, beatae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate pariatur nihil consectetur quo
          quos accusamus doloremque, quae 
          quisquam culpa aperiam excepturi eaque suscipit ipsum odit minus sed. Placeat, beatae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate pariatur nihil consectetur quo
          quos accusamus doloremque, quae 
          quisquam culpa aperiam excepturi eaque suscipit ipsum odit minus sed. Placeat, beatae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate pariatur nihil consectetur quo
          quos accusamus doloremque, quae 
          quisquam culpa aperiam excepturi eaque suscipit ipsum odit minus sed. Placeat, beatae?
        </p>
      </div>
    </div>
      <Sidebar />
    </div>
  )
}

export default Single