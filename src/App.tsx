import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {Buttons} from "./components/buttons/buttons";

function App() {

    const [minCounter, maxCounter] = [0, 5];
    const [counter, setCounter] = useState<number>(minCounter);

    const incrementCounter = () => {
        if (counter >= maxCounter) {
            return;
        }
        setCounter(counter + 1);
    }

    const resetCounter = () => {
        if (counter >= maxCounter) {
            setCounter(minCounter);
        }
    }

    return (
        <div className="App">
            <Counter counterValue={counter}/>
            <Buttons incFunc={incrementCounter}
                     resetFunc={resetCounter}
                     counterValue={counter}
            />
        </div>
    );
}

export default App;
