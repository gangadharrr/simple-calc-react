import React from 'react';

export function CustomNumInp(props){
    const {value}=props;
    const {onClick}=props;
    const {id}=props;
    return(
        <input type="number" value={value} onClick={onClick} id={id} className='CustomNumInp ' min="0" max="10"/>
    );
}