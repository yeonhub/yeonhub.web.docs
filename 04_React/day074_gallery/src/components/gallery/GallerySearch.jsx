import React from 'react';
import styled from 'styled-components'

const GallerySearchForm = styled.form`
padding:30px;
text-align:center;
input {
 width:400px; height:50px;
 box-sizing:border-box; 
 outline:none;
 padding:0 20px;
 font-size:16px;
} 
button {
 width:120px; height:50px; border:none; background:#000; color:#fff; 
 vertical-align:top; 
}
`

const GallerySearch = ({ onSubmit, changeInput, text }) => {
    return (
        <GallerySearchForm onSubmit={onSubmit}>
            <input className='imput' type='text' value={text} onChange={changeInput} />
            <button className='btn' type='submit'>search</button>
        </GallerySearchForm>
    );
};

export default GallerySearch;