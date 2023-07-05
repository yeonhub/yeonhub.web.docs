import React, { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';

const Color = () => {
    const {color, onRed, onGreen, onBlue, onBlack} = useContext(ColorContext)
    return (
        <div>
            <h2 style={{color:color}}>Design Color : {color}</h2>
            <p>
                <button onClick={onRed}>Red</button>
                <button onClick={onGreen}>Green</button>
                <button onClick={onBlue}>Blue</button>
                <button onClick={onBlack}>Black</button>
            </p>
        </div>
    );
};

export default Color;