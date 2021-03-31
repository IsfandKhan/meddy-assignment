import Post from '../../components/post';
import { getPostById } from '../api/post';

export async function getServerSideProps(context) {
  const data = await getPostById(context.params.id);
  console.log(data)

  if (!data) {
    return {
      notFound: true
    };
  }

  return { props: { data } };
}

export default function PostView(props) {
  const { data: post } = props;
  return <Post post={post} />;
}
