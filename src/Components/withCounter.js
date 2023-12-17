
import React from 'react'
import { useState } from "react"

const withCounter = (OriginalComponent) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return <OriginalComponent count={count} incrementCount={incrementCount}></OriginalComponent>
}

export default withCounter;