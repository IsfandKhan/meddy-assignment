import Posts from '../components/posts';
import { fetchPosts, wrapper } from '../components/store';

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  await store.dispatch(fetchPosts());
  return {
    props: {
      posts: store.getState().posts
    }
  };
});

export default function ServerIndex(props) {
  return <Posts posts={props.posts} />;
}
