import React from 'react';
import style from './buttons.module.css';

type PropsType = {
    incFunc: () => void
    resetFunc: () => void
    counterValue: number
}

export const Buttons: React.FC<PropsType> = (props) => {

    return (
        <div className={style.wrapper}>
            <button className={props.counterValue < 5 ? style.btn : style.disable_btn}
                    onClick={props.incFunc}>inc
            </button>
            <button className={props.counterValue < 5 ? style.disable_btn : style.btn}
                    onClick={props.resetFunc}>reset
            </button>
        </div>
    )
}