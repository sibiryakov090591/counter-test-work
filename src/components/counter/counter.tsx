import React from 'react';
import style from './counter.module.css';

type PropsType = {
    counterValue: number
}

export const Counter: React.FC<PropsType> = (props) => {

    return (
        <div className={props.counterValue === 5 ? style.active : style.wrapper}>
            {props.counterValue}
        </div>
    )
}