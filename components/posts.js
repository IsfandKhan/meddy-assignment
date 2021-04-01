import {Post} from './post';
import {Heading} from './heading';

export const Posts = ({ posts }) => (
  <>
    <Heading title="Posts" />
    {posts && posts.length ? (
      posts.map((post) => <Post key={post.id} post={post} />)
    ) : (
      <h3 className="mt-5 md-5 text-center">No Posts Available</h3>
    )}
  </>
);
