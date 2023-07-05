import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Project from '../pages/Project';

const Profile = () => {
    return (
        <div className='page'>
            <h2>Profile</h2>
            <ul>
                <li><Link to="html">html</Link></li>
                <li><Link to="javascript">javascript</Link></li>
                <li><Link to="/profile/react">react</Link></li>
                <li><Link to="/profile/node">node</Link></li>
            </ul>
            <Routes>
                <Route path=':name' element={<Project />} />
            </Routes>
        </div>
    );
};

export default Profile;