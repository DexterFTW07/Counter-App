import { useState } from "react"

export default function Counter() {

    let [count, setCount] = useState(0)

    return (
        <>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>Increase Count</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => setCount(count-1)} >Decrease Count</button>
            <br /><br />
            <button onClick={() => setCount(count = 0)}>Reset Count</button>
        </>
    )
}