

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="w-1/3">
            <h3>Bookmarks: {bookmarks.length}</h3>
        </div>
    );
};

export default Bookmarks;