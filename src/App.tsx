import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {Setter} from "./components/setter/setter";

function App() {

    // local state
    const [minCounter, setMinCounter] = useState<number>(0);
    const [maxCounter, setMaxCounter] = useState<number>(5);
    const [counter, setCounter] = useState<number>(minCounter); // Present counter value
    const [error, setError] = useState<boolean>(false); // Show error message for counter window
    const [starting, setStarting] = useState<boolean>(false); // Show window for running counter


    // functions
    const changeMinCounterValue = (min: number) => {
        if (min === maxCounter || min > maxCounter || min < 0) {
            setError(true);
            setMinCounter(min);
            setStarting(false);
            return;
        }
        setError(false);
        setMinCounter(min);
        setCounter(min);
        setStarting(false);
    }

    const changeMaxCounterValue = (max: number) => {
        if (minCounter === max || minCounter > max || minCounter < 0) {
            setError(true);
            setMaxCounter(max);
            setStarting(false);
            return
        }
        setCounter(0);
        setError(false);
        setMaxCounter(max);
        setStarting(false);
    }

    const setCounterValues = () => {
        if (error) return;
        if (starting) return;
        setStarting(true);
        setCounter(minCounter);
    }

    const incrementCounter = () => {
        if (counter >= maxCounter) {
            return;
        }
        setCounter(counter + 1);
    }

    const resetCounter = () => {
            setCounter(minCounter);
    }

    return (
        <div className="App">
            <Setter changeMinCounterValue={changeMinCounterValue}
                    changeMaxCounterValue={changeMaxCounterValue}
                    setCounterValues={setCounterValues}
                    minValue={minCounter}
                    maxValue={maxCounter}
                    isStarting={starting}
                    errorStatus={error}
            />

            <Counter incrementCounter={incrementCounter}
                     resetCounter={resetCounter}
                     errorStatus={error}
                     counterValue={counter}
                     minValue={minCounter}
                     maxValue={maxCounter}
                     isStarting={starting}
            />
        </div>
    );
}

export default App;
