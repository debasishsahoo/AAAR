import React, { useState } from "react";

const Clock = () => {
    const timenow = Date.now()
    const [time, setTime] = useState(timenow);

    setInterval(() => {
        setTime(timenow)
    }, 1000)
    return (
        <div>
            <h2>{time}</h2>
        </div>
    );

}

export default Clock;