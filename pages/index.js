import Head from 'next/head';
import { getAllPosts } from './api/post';
import Posts from './components/posts';

export async function getServerSideProps() {
  const data = await getAllPosts();

  if (!data) {
    return {
      notFound: true
    };
  }

  return { props: { data } };
}

export default function ServerIndex(props) {
  return <Posts posts={props.data} />;
}
