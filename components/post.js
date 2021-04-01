import { useRouter } from 'next/router';

export default function Post({ post, clickable = true }) {
  const router = useRouter();
  return (
    <div className="card m-3 h-100" onClick={clickable ? () => router.push(`/posts/${post.id}`) : null}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
}
