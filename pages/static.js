import { getAllPosts } from './api/post';
import Posts from './components/posts';

export async function getStaticProps() {
  const data = await getAllPosts();
  if (!data) {
    return {
      notFound: true
    };
  }

  return { props: { data } };
}

export default function StaticIndex(props) {
  return <Posts posts={props.data} />;
}
