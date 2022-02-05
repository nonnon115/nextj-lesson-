import Layout from '../components/Layout'
import Post from "../components/Post"
import { getAllPostsData } from '../lib/posts';

export default function Blog({ posts }) {
  return (
    <Layout title="Blog2">
      <ul className='m-10'>
        {posts && posts.map((post) => <Post key={post.id} post1s={post} />)}
      </ul>
    </Layout>
  )
};

export async function getStaticProps() {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
