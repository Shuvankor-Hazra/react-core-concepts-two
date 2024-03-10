import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleLess = () => {
        setCount(count - 1);
    }

    return(

        <div style={{border:'2px dashed mediumseagreen', borderRadius: '20px', padding:'20px', margin: '20px'}}>

            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button><br /> <br />
            <button onClick={handleLess}>Less</button>

        </div>
    )
}