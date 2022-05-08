import posts from 'utils/blogData';
import BlogPost from 'components/BlogSection/BlogPost';

const BlogGrid = () => {
  const redirectToPostPage = (id) => {
    console.log(`redirect to post number: ${id}`);
  };

  return (
    <ul className="blog-grid">
      {posts.map((el, index) => (
        <BlogPost {...el} key={index} onClick={redirectToPostPage} />
      ))}
    </ul>
  );
};

export default BlogGrid;
