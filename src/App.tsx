import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {Setter} from "./components/setter/setter";

function App() {

    // local storage
    const localStorageMinValue = Number(localStorage.getItem("start"));
    const localStorageMaxValue = Number(localStorage.getItem("end"));
    const localStorageErrorStatus = Boolean(localStorage.getItem("error"));

    // local state
    const [minCounter, setMinCounter] = useState<number>(localStorageMinValue);
    const [maxCounter, setMaxCounter] = useState<number>(localStorageMaxValue);
    const [counter, setCounter] = useState<number>(minCounter);
    const [error, setError] = useState<boolean>(localStorageErrorStatus);
    const [starting, setStarting] = useState<boolean>(false);

    localStorage.setItem("start", "" + minCounter);
    localStorage.setItem("end", "" + maxCounter);
    if (minCounter === maxCounter || minCounter > maxCounter || minCounter < 0) {
        localStorage.setItem("error", "true")
    };

    // callback functions
    const changeMinCounterValue = (min: number) => {
        if (min === maxCounter || min > maxCounter || min < 0) {
            setError(true);
            localStorage.setItem("error", "true");
            setStarting(false);
            localStorage.setItem("start", "" + minCounter);
            setMinCounter(min);
            return;
        }
        setError(false);
        localStorage.setItem("error", "false");
        setCounter(min);
        setStarting(false);
        localStorage.setItem("start", "" + minCounter);
        setMinCounter(min);
    }

    const changeMaxCounterValue = (max: number) => {
        if (minCounter === max || minCounter > max || minCounter < 0) {
            setError(true);
            localStorage.setItem("error", "true");
            setStarting(false);
            localStorage.setItem("end", "" + maxCounter);
            setMaxCounter(max);
            return
        }
        setCounter(0);
        setError(false);
        localStorage.setItem("error", "false");
        setStarting(false);
        localStorage.setItem("end", "" + maxCounter);
        setMaxCounter(max);
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
