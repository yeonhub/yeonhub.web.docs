import React, { useContext } from 'react';
import { ChangeColorContext } from '../../contexts/ChangeColorContext';

const ChangeColor = () => {
    const { color, onColor } = useContext(ChangeColorContext)
    return (
        <div>
            <h2 style={{ color: color }}>색상 UI : {color}</h2>
            <p>
                <button onClick={()=>onColor('red')}>Red</button>
                <button onClick={()=>onColor('green')}>Green</button>
                <button onClick={()=>onColor('blue')}>Blue</button>
                <button onClick={()=>onColor('black')}>Black</button>
            </p>
        </div>
    );
};

export default ChangeColor;