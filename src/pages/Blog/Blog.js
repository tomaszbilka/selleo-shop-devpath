import BlogShowOne from 'components/BlogSection/BlogShowOne/BlogShowOne';
import { useParams } from 'react-router-dom';
import { useTitle } from 'react-use';

const Blog = () => {
  useTitle('Blog demo');
  const { blogId } = useParams();
  return <BlogShowOne id={blogId} />;
};

export default Blog;
