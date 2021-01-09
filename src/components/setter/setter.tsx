import React from 'react';
import style from './setter.module.css';
import {Button} from "../button/button";
import {InputComponent} from "../input/input";

type PropsType = {
    changeMinCounterValue: (min: number) => void
    changeMaxCounterValue: (max: number) => void
    setCounterValues: () => void
    minValue: number
    maxValue: number
    isStarting: boolean
    errorStatus: boolean
}

export const Setter: React.FC<PropsType> = (props) => {

    const changeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value;
        props.changeMaxCounterValue(value)
    }

    const changeMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value;
        props.changeMinCounterValue(value)
    }

    let isDisabledButton = false;
    if (props.errorStatus) isDisabledButton = true;
    if (props.isStarting) isDisabledButton = true;

    return (
        <div className={style.wrapper}>
            <div className={style.values}>
                <InputComponent maxValue={props.maxValue}
                                minValue={props.minValue}
                                value={props.maxValue}
                                title={"Max value:"}
                                onChangeCallback={changeMaxValue}
                />
                <InputComponent maxValue={props.maxValue}
                                minValue={props.minValue}
                                value={props.minValue}
                                title={"Start value:"}
                                onChangeCallback={changeMinValue}
                />
            </div>

            <div className={style.buttons}>
                <Button onClickCallback={props.setCounterValues}
                        title={"set"}
                        counterValue={0}
                        maxValue={props.maxValue}
                        minValue={props.minValue}
                        isDisabled={isDisabledButton}/>
            </div>
        </div>
    )
}