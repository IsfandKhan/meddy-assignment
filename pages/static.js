import { Posts } from '../components';
import { fetchPosts, wrapper } from '../store';

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(fetchPosts());
  return {
    props: {
      posts: store.getState().posts
    }
  };
});

const StaticIndex = (props) => <Posts posts={props.posts} />;

export default StaticIndex;
