import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
        const {title} = bookmark;
    return (
        <div className='bg-white p-2 my-3 rounded-xl shadow-xl'>
            <p className='text-2xl font-medium my-3'>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;