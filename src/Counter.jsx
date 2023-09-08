import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const handelCount = () => {
        const newCount = count + 1;
       setCount(newCount);
    }
    const handelReduce =() =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handelCount}>Increase</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}