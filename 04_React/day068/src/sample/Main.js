import React, { useState } from 'react';
import './style.scss'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';


const Main = () => {
    const [user, setUser] = useState({
        username: '',
        age: '',
        addr: '',
        tel: '',
        job: '',
        email: '',
        gender: '',
        inter: ''
    })
    const { username, age, addr, tel, job, email, gender, inter } = user

    const changeInput = (e) => {
        const { value, name } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const [page, setPage] = useState(1)
    const nextPage =()=>{
        setPage(page+1)
    }
    const prevPage =()=>{
        setPage(page-1)
    }

    return (
        <div className='wrap'>
            {
                page === 1 && <Step1 username={username} age={age} addr={addr} tel={tel} changeInput={changeInput} nextPage={nextPage} />
            }
            {
                page === 2 && <Step2 job={job} email={email} gender={gender} inter={inter} changeInput={changeInput} nextPage={nextPage} prevPage={prevPage}/>
            }
            {
                page === 3 && <Step3 username={username} age={age} addr={addr} tel={tel} job={job} email={email} gender={gender} inter={inter} nextPage={nextPage} prevPage={prevPage} />
            }
            {
                page === 4 && <Step4 username={username} />
            }
        </div>
    );
};

export default Main;