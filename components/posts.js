import Post from './post';

export default function Posts({ posts }) {
  let postsToDisplay;
  if (posts && posts.length) {
    postsToDisplay = posts.map((post) => <Post key={post.id} post={post} />);
  } else {
    postsToDisplay = <h3 className="mt-5 md-5 text-center">No Posts Available</h3>;
  }

  return (
    <>
      <div style={{marginLeft: '18%'}}>
        <h2 className="mt-5 md-5 mb-5 bg-dark text-white w-75 text-center border rounded shadow p-4">Posts</h2>
      </div>
      {postsToDisplay}
    </>
  );
}
