import { ThunkAction } from "redux-thunk"
import {RootStateType} from "./store";

const initialState = {
    minCounterValue: 0,
    maxCounterValue: 5,
    errorStatus: false,
    currentCounterValue: 0,
    isStarting: false
}

type InitialStateType = typeof initialState

const counterReducer = (state: InitialStateType = initialState, action: CounterActionsType): InitialStateType => {
    switch (action.type) {
        case "counter/INCREMENT_COUNTER": {
            return {
                ...state,
                currentCounterValue: state.currentCounterValue + 1
            }
        }
        case "counter/RESET_COUNTER": {
            return {
                ...state,
                currentCounterValue: state.minCounterValue
            }
        }
        case "counter/SET_MIN_VALUE": {
            return {
                ...state,
                minCounterValue: action.minValue,
                currentCounterValue: action.minValue,
                isStarting: false
            }
        }
        case "counter/SET_MAX_VALUE": {
            return {
                ...state,
                maxCounterValue: action.maxValue,
                isStarting: false
            }
        }
        case "counter/START_COUNTER": {
            return {
                ...state,
                isStarting: true
            }
        }
        case "counter/SET_ERROR": {
            return {
                ...state,
                errorStatus: action.isError
            }
        }
        default: return state
    }
}

type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, CounterActionsType>;

export const initializedLocalStorageValues = (minCounter: number, maxCounter: number): ThunkType => async (dispatch) => {
    if (localStorage.getItem("minValue") !== null) {
        const minValue = Number(localStorage.getItem("minValue"))
        dispatch(counterActions.setMinValue(minValue))
    }
    if (localStorage.getItem("maxValue") !== null) {
        const maxValue = Number(localStorage.getItem("maxValue"))
        dispatch(counterActions.setMaxValue(maxValue))
    }
    if (localStorage.getItem("error") !== null) {
        const errorStatus = localStorage.getItem("error") === "true"
        dispatch(counterActions.setError(errorStatus))
    }
}

export const setMinValueTC = (minvalue: number): ThunkType => async (dispatch) => {
    localStorage.setItem("minValue", "" + minvalue);
    dispatch(counterActions.setMinValue(minvalue));
}

export const setMaxValueTC = (maxvalue: number): ThunkType => async (dispatch) => {
    localStorage.setItem("maxValue", "" + maxvalue);
    dispatch(counterActions.setMaxValue(maxvalue));
}

export const setErrorTC = (error: boolean): ThunkType => async (dispatch) => {
    localStorage.setItem("error", "" + error);
    dispatch(counterActions.setError(error));
}

export const counterActions = {
    setMinValue: (minValue: number) => ({type: "counter/SET_MIN_VALUE", minValue} as const),
    setMaxValue: (maxValue: number) => ({type: "counter/SET_MAX_VALUE", maxValue} as const),
    startCounter: () => ({type: "counter/START_COUNTER"} as const),
    setError: (isError: boolean) => ({type: "counter/SET_ERROR", isError} as const),
    incrementCounter: () => ({type: "counter/INCREMENT_COUNTER"} as const),
    resetCounter: () => ({type: "counter/RESET_COUNTER"} as const)
}

type SomeType<T> = T extends {[key: string]: infer U} ? U : any
export type CounterActionsType = ReturnType<SomeType<typeof counterActions>>

export default counterReducer;