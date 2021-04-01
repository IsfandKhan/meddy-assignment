import { Post, Heading } from '../../components';
import { wrapper, fetchPost } from '../../store';
import Error from '../_error';

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, params }) => {
  await store.dispatch(fetchPost(params.id));

  const post = store.getState().post;
  let err = null;
  if (post && Object.keys(post).length === 0 && post.constructor === Object) {
    err = { statusCode: 404 };
  }

  return {
    props: {
      err,
      post
    }
  };
});

const PostView = (props) => {
  const { err, post } = props;

  if (err) {
    return <Error statusCode={err.statusCode} />;
  }
  return (
    <>
      <Heading title="Post" />
      <Post post={post} clickable={false} />
    </>
  );
};

export default PostView;
