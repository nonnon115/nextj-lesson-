import Layout from '../components/Layout'
import Post from "../components/Post"
import { getAllPostsData } from '../lib/posts';

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className='m-10'>
        {posts && posts.map((postdata) => <Post key1s={postdata.id} post1s={postdata} />)}
      </ul>
    </Layout>
  )
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
