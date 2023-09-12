

const Blog = ({blog}) => {
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
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h3 className="text-4xl font-semibold mb-4">{title}</h3>
            <p className="mb-4">{
            hashtag.map( (hash, idx) => <span key={idx}> <a href=""> #{hash}</a></span> )
            }</p>
        </div>
    );
};

export default Blog;