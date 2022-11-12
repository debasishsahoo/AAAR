import React, { useState } from "react";

const UseStateHook = () => {
    const [student, setStudent] = useState({
        name: 'Debasish Sahoo',
        study: 'CSE',
        age: 33,
        ismale: true
    })
    const UpdateStudent = () => {
        setStudent(e => {
            return { ...e, name: 'ANJANI', age: 23, ismale: false }
        })

    }
    return (
        <div>
            <p>My Name is <b>{student.name}</b> and i am a <b>{student.study}</b> Student . i am <b>{student.age}</b> years old <b>{(student.ismale) ? '👨' : '👧'}</b></p>
            <br />
            <button onClick={UpdateStudent}>Update Female</button>
            <button onClick={UpdateStudent}>Update Male</button>
        </div>
    );

}

export default UseStateHook