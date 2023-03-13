import { useNavigate } from 'react-router-dom';
import Button from 'components/UI/Button';
import PropTypes from 'prop-types';

const BlogPost = ({ title, author, date, content, imageUrl, id }) => {
    const navigate = useNavigate();

    const truncatedContent = content.slice(0, 100) + '...';

    const redirectToPostDetail = () => {
        navigate(`/blog/${id}`);
    };

    return (
        <div
            role="button"
            className="post"
            onClick={redirectToPostDetail}
            type="button"
        >
            <div className="post__img-container">
                <img src={imageUrl} className="post__img" />
            </div>
            <div className="post__content">
                <h2 className="post__title">{title}</h2>
                <div className="post__info">
                    <p className="post__author">{author}</p>
                    <p className="post__date">{date}</p>
                </div>
                <div className="post__content__text">{truncatedContent}</div>
                <Button
                    title="Read More"
                    className="button -small -color-reverse"
                    onClick={redirectToPostDetail}
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
    id: PropTypes.string.isRequired,
};

export default BlogPost;
