import React from 'react';
import style from './counter.module.css';
import {Button} from "../button/button";

type PropsType = {
    counterValue: number
    minValue: number
    maxValue: number
    incrementCounter: () => void
    resetCounter: () => void
    errorStatus: boolean
}

export const Counter: React.FC<PropsType> = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={props.counterValue < props.maxValue
                ? style.count
                : style.count + " " + style.active}
            >
                {
                    props.errorStatus
                    ? <div className={style.error}>Incorrect value!</div>
                    : props.counterValue
                }
            </div>


            <div className={style.buttons}>
                <Button onClickFunction={props.incrementCounter}
                        title={"inc"}
                        counterValue={props.counterValue}
                />
                <Button onClickFunction={props.resetCounter}
                        title={"reset"}
                        counterValue={props.counterValue}
                />
            </div>
        </div>
    )
}