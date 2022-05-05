import Button from '../../UI/Button';
import PropTypes from 'prop-types';

const BlogPost = ({ title, author, date, content, imageUrl, id, onClick }) => {
  const shortTitle = title.length >= 35 ? title.slice(0, 35) + ' ...' : title;
  const contentShort = content.slice(0, 100) + ' ...';

  const showPostDetailHandler = () => {
    onClick(id);
  };

  return (
    <div className="post" onClick={showPostDetailHandler}>
      <div className="post__img-container">
        <img src={imageUrl} className="post__img-container__img" />
      </div>
      <div className="post__content">
        <h2 className="post__content__title">{shortTitle}</h2>
        <div className="post__content__info">
          <p className="post__content__info__author">{author}</p>
          <p className="post__content__info__date">{date}</p>
        </div>
        <div className="post__content__text">{contentShort}</div>
        <Button
          title="Read More"
          className="button -small -color-reverse"
          onClick={showPostDetailHandler}
        />
      </div>
    </div>
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
