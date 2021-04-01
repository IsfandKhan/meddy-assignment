import { Posts } from '../components';
import { fetchPosts, wrapper } from '../store';

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  await store.dispatch(fetchPosts());
  return {
    props: {
      posts: store.getState().posts
    }
  };
});

const ServerIndex = (props) => <Posts posts={props.posts} />;

export default ServerIndex;
