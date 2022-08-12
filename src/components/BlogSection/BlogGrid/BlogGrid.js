import posts from 'utils/blogData';
import BlogPost from 'components/BlogSection/BlogPost';

const BlogGrid = () => {
  return (
    <ul className="blog-grid">
      {posts.map((el) => (
        <BlogPost {...el} key={el.id} />
      ))}
    </ul>
  );
};

export default BlogGrid;
