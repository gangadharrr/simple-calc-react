import React from 'react';

export function CircleButton(props){
    const {onClick}=props;
    const {text}=props;
    const {bgcolor}=props;
    const classVal=Boolean(bgcolor)?`CircleButton ${bgcolor}`:`CircleButton white`;

    return(
        <button onClick={onClick} className={classVal}>{text}</button>
    );
}