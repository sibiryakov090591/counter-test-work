import React from 'react';
import style from './button.module.css';

type PropsType = {
    onClickFunction: () => void
    title: string
    counterValue: number
}

export const Button: React.FC<PropsType> = (props) => {

    let isActiveClassName = style.btn;

    if (props.title === "inc") isActiveClassName = props.counterValue < 5 ? style.btn : style.disable_btn;
    if (props.title === "reset") isActiveClassName = props.counterValue < 5 ? style.disable_btn : style.btn;

    return (
            <button className={isActiveClassName}
                    onClick={props.onClickFunction}>{props.title}
            </button>
    )
}