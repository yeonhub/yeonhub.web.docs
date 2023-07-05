import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onRed, onGreen, onBlue } from '../../store/modules/colorSlice';

const Color = () => {
    // const { color } = useSelector(state => state.colorR)
    const { color } = useSelector(state => state.color)

    const dispatch = useDispatch()
    return (
        <div>
            <h2 style={{ color: `${color}` }}>컬러 : {color}</h2>
            <p>
                <button onClick={() => dispatch(onRed())}>Red</button>
                <button onClick={() => dispatch(onGreen())}>Green</button>
                <button onClick={() => dispatch(onBlue())}>Blue</button>
            </p>
        </div>
    );
};

export default Color;