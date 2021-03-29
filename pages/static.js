import Head from "next/head";
import { getAllPosts } from "./api/post";
import Posts from "./components/posts";

export async function getStaticProps() {
  const data = await getAllPosts();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}

export default function StaticIndex(props) {
  const { data: posts = [] } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts posts={posts} />
      {/* <footer className={styles.footer}>
        </footer> */}
    </div>
  );
}
