import React from 'react'

const OptionalProps = ({ person = 'Deafult Person' }) => {
    return (
        <div>
            <h1>Hello,{person}</h1>
        </div>
    )
}

export default OptionalProps