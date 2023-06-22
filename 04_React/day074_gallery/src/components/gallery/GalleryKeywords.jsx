import React from 'react';
import styled from 'styled-components';

const GalleryKeywordContainer = styled.div`
    margin: auto;
    .keywordul {
        display: flex;
        .keywordli {
            font-size: 30px;
            border: 1px solid gray;
            margin: 10px;
            box-sizing: border-box;
            padding: 0 10px ;
            .del {
                font-size: 25px;
                border: none;
                margin-left: 10px;
            }
        }
    }

`;
const GalleryKeywords = ({ keywordArr,onDel }) => {
    return (
        <GalleryKeywordContainer className='keywordbox'>
            <ul className='keywordul'>
                {
                    keywordArr.map(item => <li key={item.id} className='keywordli'>{item.text}<button className='del' onClick={()=>onDel(item.id)}>X</button></li>)
                }
            </ul>
        </GalleryKeywordContainer>
    );
};

export default GalleryKeywords;