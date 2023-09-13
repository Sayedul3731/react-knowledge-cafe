import { useEffect, useState } from "react";


const Timer = () => {
    const [count, setCount] = useState(0)
    useEffect( () => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000)
    })
    return (
        <div>
            <h3>Time: {count}</h3>
        </div>
    );
};

export default Timer;