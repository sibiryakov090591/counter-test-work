import React from 'react';
import style from './setter.module.css';
import {Button} from "../button/button";

type PropsType = {
    changeMinCounterValue: (min: number) => void
    changeMaxCounterValue: (max: number) => void
    setCounterValues: (min: number, max: number) => void
}

export const Setter: React.FC<PropsType> = (props) => {


    return (
        <div className={style.wrapper}>
            <div className={style.values}>
                <div className={style.values__item}>
                    <div>Max value:</div>
                    <input className={style.input} type="number" step="число"/>
                </div>
                <div className={style.values__item}>
                    <div>Start value: </div>
                    <input className={style.input} type="number" step="число"/>
                </div>
            </div>

            <div className={style.buttons}>

            </div>
        </div>
    )
}