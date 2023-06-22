import React, { useState } from 'react';
import Test3sub from './Test3sub';

const Test3 = () => {
    const [color, setColor] = useState('')
    const [fruit, setFruit] = useState('')

    const onColor = e => {
        setColor(e.target.value)
    }
    const onFruit = e => {
        setFruit(e.target.value)
    }

    return (
        <div style={{ margin: 30 }}>
            <h2>COLOR</h2>
            <div>
                <input type="text" value={color} onChange={onColor}/>
                <p>RED, GREEN, BLUE</p>
            </div>
            <hr />
            <div>
                <p>
                    <input type="radio" value="apple" name='fruit' onChange={onFruit}/>
                    <label>apple</label>
                    <input type="radio" value="orange" name='fruit' onChange={onFruit}/>
                    <label>orange</label>
                    <input type="radio" value="mango" name='fruit' onChange={onFruit}/>
                    <label>mango</label>
                </p>
            </div>
            <Test3sub color={color} fruit={fruit}/>
        </div>
    );
};

export default Test3;