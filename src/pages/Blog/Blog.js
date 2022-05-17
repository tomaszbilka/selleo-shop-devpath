import BlogShowOne from 'components/BlogSection/BlogShowOne/BlogShowOne';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { blogId } = useParams();
  return <BlogShowOne id={blogId} />;
};

export default Blog;
