import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark}) => {
    const {author, author_img, cover, hashtag, posted_date, reading_time, title} = blog;
    return (
        <div>
            <img className="rounded-xl" src={cover} alt="" />
            <div className="flex justify-between items-center mt-8 mb-5">
                <div className="flex items-center">
                    <img className="w-16 h-16 rounded-full " src={author_img} alt="" />
                    <div className="ml-6">
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='mr-3'>{reading_time} min read</p>
                    <button onClick={handleAddToBookmark}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className="text-4xl font-semibold mb-4">{title}</h3>
            <p className="mb-4">{
            hashtag.map( (hash, idx) => <span key={idx}> <a href=""> #{hash}</a></span> )
            }</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.object.isRequired
}

export default Blog;