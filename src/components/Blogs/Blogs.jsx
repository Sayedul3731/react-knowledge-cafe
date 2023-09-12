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
        <div>
            <h1 className='text-5xl'>React Knowledge Cafe</h1>
            {
                blogs.map(blog => console.log(blog))
            }
        </div>
    );
};

export default Blogs;