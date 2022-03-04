import React, { useState } from 'react';

const App = () => {

    const [count, setCount] = useState(0)

    const incre = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <h2>Uhhhhh, {count}???</h2>
            <button onClick={incre}>Pressssszzzz</button>
        </>
    );
}

export default TestC;