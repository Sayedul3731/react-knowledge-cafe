import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then( data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            <h3>Blog</h3>
            {
                blogs.map(blog => console.log(blog))
            }
        </div>
    );
};

export default Blogs;