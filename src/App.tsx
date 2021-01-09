import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {Setter} from "./components/setter/setter";

function App() {

    // local state
    const [minCounter, setMinCounter] = useState<number>(0);
    const [maxCounter, setMaxCounter] = useState<number>(5);
    const [counter, setCounter] = useState<number>(minCounter);
    const [error, setError] = useState<boolean>(false);


    // functions
    const changeMinCounterValue = (min: number) => {
        if (min === maxCounter || min > maxCounter || min < 0) {
            return setError(true);
        }
        setMinCounter(min);
    }

    const changeMaxCounterValue = (max: number) => {
        if (minCounter === max || minCounter > max || minCounter < 0) {
            return setError(true);
        }
        setMaxCounter(max);
    }

    const setCounterValues = (min: number, max: number) => {

    }

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
            <Setter changeMinCounterValue={changeMinCounterValue}
                    changeMaxCounterValue={changeMaxCounterValue}
                    setCounterValues={setCounterValues}
            />

            <Counter counterValue={counter}
                     minValue={minCounter}
                     maxValue={maxCounter}
                     incrementCounter={incrementCounter}
                     resetCounter={resetCounter}
                     errorStatus={error}
            />
        </div>
    );
}

export default App;
