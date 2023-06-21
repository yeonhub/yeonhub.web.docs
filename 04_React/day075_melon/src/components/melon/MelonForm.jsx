import React from 'react';
// import '../styled/MelonForm.scss';
import styled from 'styled-components'
import { MelonFormStyled } from '../styled/MelonStyle';

const MelonForm = ({onSubmit,changeInput}) => {
    return (
        <MelonFormStyled className='MelonForm' onSubmit={onSubmit}>
            <input onChange={changeInput} type="text" />
        </MelonFormStyled>
    );
};

export default MelonForm;