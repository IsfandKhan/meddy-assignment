import { useRouter } from 'next/router';

export const Post = ({ post, clickable = true }) => {
  const router = useRouter();
  return (
    <div className="card m-3 ml-5 mr-5 h-100" onClick={clickable ? () => router.push(`/posts/${post.id}`) : null}>
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
}
