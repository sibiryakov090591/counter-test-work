import React from 'react';
import style from './input.module.css';

type PropsType = {
    maxValue: number
    minValue: number
    value: number
    title: string
    onChangeCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputComponent: React.FC<PropsType> = (props) => {

    const inputClassName = props.maxValue <= 0
    || props.maxValue < props.minValue
    || props.maxValue === props.minValue
    || props.value < 0
        ? style.input + " " + style.error
        : style.input;

    return (

        <div className={style.values__item}>
            <div>{props.title}</div>
            <input className={inputClassName}
                   onChange={props.onChangeCallback}
                   value={props.value}
                   type="number"
            />
        </div>

    )
}