import Button from 'components/UI/Button';
import PropTypes from 'prop-types';

const BlogPost = ({ title, author, date, content, imageUrl, id, onClick }) => {
  const showPostDetailHandler = () => {
    onClick(id);
  };

  return (
    <button className="post" onClick={showPostDetailHandler} type="button">
      <div className="post__img-container">
        <img src={imageUrl} className="post__img-container__img" />
      </div>
      <div className="post__content">
        <h2 className="post__content__title">{title}</h2>
        <div className="post__content__info">
          <p className="post__content__info__author">{author}</p>
          <p className="post__content__info__date">{date}</p>
        </div>
        <div className="post__content__text">{content}</div>
        <Button
          title="Read More"
          className="button -small -color-reverse"
          onClick={showPostDetailHandler}
        />
      </div>
    </button>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BlogPost;
