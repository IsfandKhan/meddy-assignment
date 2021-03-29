export default function Post({ post }) {
  return (
    <div className="card m-3 h-100" onClick={() => window.location.href=`http://localhost:3000/posts/${post.id}`}>
      <div className="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.body}</p>
      </div>
    </div>
  );
}
