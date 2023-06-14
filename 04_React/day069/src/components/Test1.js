import React, { useState } from 'react';
import './Test1.scss'

const dataList = [
    { id: 1, text: '1단게' },
    { id: 2, text: '2단게' },
    { id: 3, text: '3단게' }
]

const Test1 = () => {
    const [data, setData] = useState(dataList)
    const [isOpen, setIsOpen] = useState(true)
    const [step, setStep] = useState(1)

    const onToggle = () =>{

    }
    const onPrev = () =>{
        setStep(step-1)
    }
    const onNext = () =>{
        setStep(step+1)
    }

    return (
        <div className='wrap'>
            <button className='close' onClick={onToggle}>{isOpen ? "OPEN" : "CLOSE"}</button>
            {
                isOpen && <div className="steps">
                    <ul className="num">
                        <li className={step === 1 ? "on" : ""}>1</li>
                        <li className={step === 2 ? "on" : ""}>2</li>
                        <li className={step === 3 ? "on" : ""}>3</li>
                    </ul>
                    <p className='msg'>xxx</p>
                    <p className="btn">
                        <button onClick={onPrev}>PREV</button>
                        <button onClick={onNext}>NEXT</button>
                    </p>
                </div>
            }

        </div>
    );
};

export default Test1;