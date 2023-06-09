import React, { useState } from 'react';
import './style.scss'
import Setp1 from './Setp1';
import Setp2 from './Setp2';
import Step3 from './Step3';
import Setp4 from './Setp4';


const Main = () => {
    const [user, setUser] = useState({
        username : '',
        age : '',
        addr : '',
        tel : '',
        job : '',
        email : '',
        gender : '',
        inter : ''
    })
    const {username, age, addr, tel, job, email, gender, inter} = user

    const changeInput=(e)=>{
        const {value, name} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }


    return (
        <div className='wrap'>
            <Setp1 username={username} age={age} addr={addr} tel={tel} changeInput={changeInput} />
            <Setp2 job={job} email={email} gender={gender} inter={inter} changeInput={changeInput}/>
            <Step3 username={username} age={age} addr={addr} tel={tel} job={job} email={email} gender={gender} inter={inter} />
            <Setp4 username={username}/>
        </div>
    );
};

export default Main;