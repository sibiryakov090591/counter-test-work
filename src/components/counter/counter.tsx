import React from 'react';
import style from './counter.module.css';
import {Button} from "../button/button";

type PropsType = {
    incrementCounter: () => void
    resetCounter: () => void
    errorStatus: boolean
    minValue: number
    maxValue: number
    counterValue: number
    isStarting: boolean
}

export const Counter: React.FC<PropsType> = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={style.counter}>
                {   // Show if error values
                    props.errorStatus && <div className={style.error__message}>Incorrect value!</div>
                }
                {   // Show preset values message
                    !props.isStarting && !props.errorStatus
                    && <div className={style.start__message}>Enter values and press 'set'</div>
                }
                {   // Starting counter
                    props.isStarting && !props.errorStatus
                    && <div className={
                        props.counterValue < props.maxValue
                        ? style.count
                        : style.count + " " + style.active
                    }>{props.counterValue}</div>
                }
            </div>


            <div className={style.buttons}>
                <Button onClickCallback={props.incrementCounter}
                        title={"inc"}
                        counterValue={props.counterValue}
                        minValue={props.minValue}
                        maxValue={props.maxValue}
                        isDisabled={!props.isStarting}
                />
                <Button onClickCallback={props.resetCounter}
                        title={"reset"}
                        counterValue={props.counterValue}
                        minValue={props.minValue}
                        maxValue={props.maxValue}
                        isDisabled={!props.isStarting}
                />
            </div>
        </div>
    )
}