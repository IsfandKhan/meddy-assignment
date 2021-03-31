import Posts from '../components/posts';
import { fetchPosts, wrapper } from '../components/store';

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(fetchPosts());
  return {
    props: {
      posts: store.getState().posts
    }
  };
});

export default function StaticIndex(props) {
  return <Posts posts={props.posts} />;
}
