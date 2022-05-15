import posts from 'utils/blogData';
import BlogPost from 'components/BlogSection/BlogPost';

const BlogGrid = () => {
  return (
    <ul className="blog-grid">
      {posts.map((el, index) => (
        <BlogPost {...el} key={index} />
      ))}
    </ul>
  );
};

export default BlogGrid;
