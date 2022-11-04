import React from 'React'
import Proptype from 'prop-types'

class ValidProps extends React.Component {
    render() {
        return (
            <div>
                <h1>React Js Props VAlidation</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Valid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Any</td>
                            <td>{this.props.propAny}</td>
                            <td>{this.props.propAny ? "true" : "False"}</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )
    }

}

ValidProps.Proptype = {
    propAny: Proptype.any
}

ValidProps.defaultProps = {
    propAny: 45
}

export default ValidProps
