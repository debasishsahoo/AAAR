import React, { useState } from 'react'

const InputHooks = () => {
    const [userinput, setuserInput] = useState('HI');

    let Userinput = (event) => {
        let input = event.target.value;
        setuserInput(input)
    }

    return (
        <div>
            <h1>Input Hooks</h1>
            <input placeholder='Enter Somthing ......' onChange={Userinput} />
            <div>
                <h1>{userinput}</h1>
            </div>

        </div>
    );
}

export default InputHooks