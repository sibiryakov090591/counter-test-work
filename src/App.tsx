import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {Setter} from "./components/setter/setter";
import {counterActions, initializedLocalStorageValues, setErrorTC, setMaxValueTC, setMinValueTC} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./state/store";

function App() {

    const {
        minCounterValue,
        maxCounterValue,
        errorStatus,
        currentCounterValue,
        isStarting
    } = useSelector((state: RootStateType) => state.counter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializedLocalStorageValues(minCounterValue, maxCounterValue));
    }, [])

    // callback functions
    const changeMinCounterValue = (min: number) => {
        if (min === maxCounterValue || min > maxCounterValue || min < 0) {
            dispatch(setErrorTC(true))
            dispatch(setMinValueTC(min))
            return
        }
        dispatch(setErrorTC(false))
        dispatch(setMinValueTC(min))
    }

    const changeMaxCounterValue = (max: number) => {
        if (minCounterValue === max || minCounterValue > max || minCounterValue < 0) {
            dispatch(setErrorTC(true))
            dispatch(setMaxValueTC(max))
            return
        }
        dispatch(setErrorTC(false))
        dispatch(setMaxValueTC(max))
    }

    const setCounterValues = () => {
        if (errorStatus) return;
        if (isStarting) return;
        dispatch(counterActions.startCounter())
    }

    const incrementCounter = () => {
        if (currentCounterValue >= maxCounterValue) {
            return;
        }
        dispatch(counterActions.incrementCounter())
    }

    const resetCounter = () => {
        dispatch(counterActions.resetCounter())
    }

    return (
        <div className="App">
            <Setter changeMinCounterValue={changeMinCounterValue}
                    changeMaxCounterValue={changeMaxCounterValue}
                    setCounterValues={setCounterValues}
                    minValue={minCounterValue}
                    maxValue={maxCounterValue}
                    isStarting={isStarting}
                    errorStatus={errorStatus}
            />

            <Counter incrementCounter={incrementCounter}
                     resetCounter={resetCounter}
                     errorStatus={errorStatus}
                     counterValue={currentCounterValue}
                     minValue={minCounterValue}
                     maxValue={maxCounterValue}
                     isStarting={isStarting}
            />
        </div>
    );
}

export default App;
