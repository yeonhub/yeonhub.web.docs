import React, { useEffect } from 'react';

const Message = ({ msg, isMsg, setIsMsg }) => {
    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsMsg(false)
        }, 2000);
        return()=>{
            clearTimeout(timer)
        }
    },[isMsg])
    return (
        <>
            <div className={`message ${isMsg ? 'on' : ''}`}>
                메세지 : {msg}
            </div>
        </>
    );
};

export default Message;