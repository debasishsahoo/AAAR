import React, { useEffect, useState } from "react";

const UseEffectHook1 = () => {
    const [count, setCount] = useState(0)

    // useEffect(function,dependency);
    useEffect(() => {
        setTimeout(() => { setCount((count) => count + 1) }, 1000);
    }, [count]);


    return <h1>The Count is {count}</h1>
}
export default UseEffectHook1