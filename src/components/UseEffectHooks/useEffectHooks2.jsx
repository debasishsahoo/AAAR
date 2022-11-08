import React, { useEffect, useState } from "react";

const UseEffectHook2 = () => {
    const [count, setCount] = useState(0)

    const [cal, setCal] = useState(0)


    // useEffect(function,dependency);
    useEffect(() => {
        setCal(() => count * 2)


    }, [count]);

    return (
        <>
            <h1>COUNT:{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <h1>CALCULATION:{cal}</h1>
        </>
    );


}
export default UseEffectHook2