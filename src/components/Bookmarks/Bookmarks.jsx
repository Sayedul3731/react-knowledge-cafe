import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="w-1/3 bg-gray-300 p-4 rounded-xl">
            <h3 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;