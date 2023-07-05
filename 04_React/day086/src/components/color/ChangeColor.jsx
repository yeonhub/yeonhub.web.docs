import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../../store/modules/changeColorSlice';

const ChangeColor = () => {
    const { color } = useSelector(state => state.changeColorR)
    const dispatch = useDispatch()
    return (
        <div>
            <h2 style={{ color: `${color}` }}>컬러 : {color}</h2>
            <p>
                <button onClick={()=>dispatch(changeColor('Tan'))}>Tan</button>
                <button onClick={()=>dispatch(changeColor('Yellow'))}>Yellow</button>
                <button onClick={()=>dispatch(changeColor('lime'))}>lime</button>
            </p>
        </div>
    );
};

export default ChangeColor;