import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const KaugesKylas = () => {
  const { id } = useParams();
  const post = postsFromFile[id];

  return (
    <div>
      <div className="single">
      <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post.image} alt="" className="singlePostImage" />
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Autor: name</span>
        </div>
        <p className="postContent">
          Lorem ipsum
        </p>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default KaugesKylas