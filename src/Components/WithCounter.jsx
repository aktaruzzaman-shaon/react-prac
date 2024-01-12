import { useState } from "react";

const WithCounter = (OriginalComponent) => {

    const newComponent = () => {
        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount((prevCount) => prevCount + 1)
        }
        return (
            <OriginalComponent count={count} incrementCount={incrementCount}></OriginalComponent>
        )
    }
    return newComponent;

}

export default WithCounter;