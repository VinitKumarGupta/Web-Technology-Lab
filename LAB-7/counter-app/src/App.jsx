import { useState } from "react";
import "./App.css";
// Part of Experiment 6 here
import HelloWorld from "./components/HelloWorld";

function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="app-container">
            <HelloWorld />
            <h3>Counter App</h3>
            <div className="counter-box">
                <div className="counter-display">{count}</div>
                <div className="button-group">
                    <button className="btn btn-decrement" onClick={decrement}>
                        Decrease
                    </button>
                    <button className="btn btn-reset" onClick={reset}>
                        Reset
                    </button>
                    <button className="btn btn-increment" onClick={increment}>
                        Increase
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
