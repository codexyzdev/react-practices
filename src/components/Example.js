import { useState } from "react"
export default function Example() {
    const [value, setValue] = useState(10)
    const setToVlaue = (newValue) => () => setValue(newValue)

    return (
        <section>
            <h3>Value is: {value}</h3>
            <button onClick={setToVlaue(0)}>Rest to 0</button>
            <button onClick={setToVlaue(value + 1)}>Value + 1</button>
            <button onClick={setToVlaue(value - 1)}>Value - 1</button>
        </section>
    )
}
