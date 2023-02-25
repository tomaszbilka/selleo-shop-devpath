import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import posts from 'utils/blogData';

const BlogShowOne = ({ id }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = posts.filter((post) => post.id === id);

  if (post.length === 0) {
    return <p className="no-posts-found">No post found...</p>;
  }

  const { imageUrl, title, date, author, content } = post[0];

  return (
    <article className="blog-show">
      <img src={imageUrl} className="blog-show__img" />
      <h2 className="blog-show__title">{title}</h2>
      <div className="blog-show__info">
        <p className="blog-show__info__date">{date}</p>
        <p className="blog-show__info__author">
          <span className="blog-show__info__text">author:</span>
          {author}
        </p>
      </div>
      <hr className="blog-show__hr" />
      <div className="blog-show__content">{content}</div>
    </article>
  );
};

BlogShowOne.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BlogShowOne;
