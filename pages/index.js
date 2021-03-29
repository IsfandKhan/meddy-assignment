import Head from "next/head";
import { getAllPosts } from "./api/post";
import Posts from './components/posts'

export async function getServerSideProps() {
  const data = await getAllPosts();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}

export default function ServerIndex(props) {
  const { data: posts = [] } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts posts={posts} />
    </div>
  );
}
