import { Post, Heading } from '../../components';
import { wrapper, fetchPost } from '../../store';

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, params }) => {
  await store.dispatch(fetchPost(params.id));
  return {
    props: {
      post: store.getState().post
    }
  };
});

const PostView = (props) => (
  <>
    <Heading title="Post" />
    <Post post={props.post} clickable={false} />
  </>
);

export default PostView;
