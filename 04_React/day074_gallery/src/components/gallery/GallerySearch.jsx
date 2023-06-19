import React from 'react';
import styled from 'styled-components'

const GallerySearchForm = styled.form`

`

const GallerySearch = ({ onSubmit, changeInput }) => {
    return (
        <GallerySearchForm onSubmit={onSubmit}>
            <input type='text'/>
            <button type='submit'>search</button>
        </GallerySearchForm>
    );
};

export default GallerySearch;