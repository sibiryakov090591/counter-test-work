import React from 'react';
import style from './button.module.css';

type PropsType = {
    onClickCallback: () => void
    title: string
    counterValue: number
    minValue: number
    maxValue: number
    isDisabled: boolean
}

export const Button: React.FC<PropsType> = (props) => {

    let onClickCallback = props.onClickCallback;
    let buttonClassName = style.btn;

    if (props.title === "inc") buttonClassName = props.counterValue < props.maxValue
                                                    ? style.btn
                                                    : style.disable_btn;

    if (props.isDisabled) {
        buttonClassName = style.disable_btn;
        onClickCallback = () => {};
    }

    return (
            <button className={buttonClassName}
                    onClick={onClickCallback}>{props.title}
            </button>
    )
}