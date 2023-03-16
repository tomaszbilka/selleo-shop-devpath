import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogPost = ({ title, author, date, content, imageUrl, id }) => {
    const truncatedContent = content.slice(0, 100) + '...';

    return (
        <Link className="post" to={`/blog/${id}`}>
            <img src={imageUrl} className="post__img" />
            <div className="post__content">
                <h2 className="post__title">{title}</h2>
                <p className="post__info">
                    <span className="post__author">{author}</span>
                    <time className="post__date">{date}</time>
                </p>
                <p className="post__text">{truncatedContent}</p>
                <Link
                    to={`/blog/${id}`}
                    className="button -small -color-reverse"
                >
                    Read more
                </Link>
            </div>
        </Link>
    );
};

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default BlogPost;
