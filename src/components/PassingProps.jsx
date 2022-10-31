import React from 'react'

const PassingProp = ({ students }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{student}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default PassingProp