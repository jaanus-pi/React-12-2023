import "../css/Post.css"

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="https://cdn.pixabay.com/photo/2021/10/05/15/58/guitar-6683101_1280.jpg" alt="" />
      <span className="postTitle">Akordid</span>
      <hr />
      <div className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse accusantium, corporis illum iusto temporibus quos illo
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse accusantium, corporis illum iusto temporibus quos illo
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse accusantium, corporis illum iusto temporibus quos illo
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse accusantium, corporis illum iusto temporibus quos illo
      </div>
      <div className="postCategories">
          <span className="category">lugemine</span>
          <span className="category">näpunäited</span>
      </div>
    </div>
  )
}

export default Post