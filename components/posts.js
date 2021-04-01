import Post from './post';
import Heading from './heading';

export default function Posts({ posts }) {
  let postsToDisplay;
  if (posts && posts.length) {
    postsToDisplay = posts.map((post) => <Post key={post.id} post={post} />);
  } else {
    postsToDisplay = <h3 className="mt-5 md-5 text-center">No Posts Available</h3>;
  }

  return (
    <>
      <Heading title="Posts" />
      {postsToDisplay}
    </>
  );
}
