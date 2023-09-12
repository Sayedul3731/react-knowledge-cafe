import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (

        <div className="w-1/3 bg-gray-300 p-4 rounded-xl">
            <div className='bg-blue-300 py-5 rounded-xl px-3 text-2xl font-semibold mb-4'>
                <h2>Spent Time on read: {readingTime} min</h2>
            </div>
            <div>
                <h3 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;