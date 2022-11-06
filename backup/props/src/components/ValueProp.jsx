import React from "react";
const ValueProp = (props) => {
    return (
        <div>
            <h3>String Literals:{props.strData}</h3>
            <h3>Tempplate Literals:{props.tempdata}</h3>
            <h3>Number Literals:{props.numdata}</h3>
            <h3>Boolean Literals:{props.booldata}</h3>
            <h3>Array Literals:{props.arrdata[0].id}</h3>
            <h3>Objaect Literals:{props.objdata.name}</h3>
            <h3>JXS Literals:{props.jsxData}</h3>
            <h3>ANY Literals:{props.anyData}</h3>
        </div>
    )
}

export default ValueProp;