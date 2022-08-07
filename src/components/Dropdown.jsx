import Multiselect from 'multiselect-react-dropdown'
import React from 'react'
import { useEffect, useState } from "react";

function Dropdown(props) {

    const [sampleOptions, setSampleOptions] = useState(["option 1", "option 2", "option 3"])

    return (
        <>
            <Multiselect style={{multiselectContainer: {width: '150%'}}}
            isObject={false}
            onRemove={(option) => console.log(option)}
            onSelect={(option) => console.log(option)}
            options={sampleOptions}
            />
        </>
    )
}

export default Dropdown
