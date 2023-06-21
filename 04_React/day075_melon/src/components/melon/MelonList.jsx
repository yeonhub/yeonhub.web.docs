import React from 'react';
// import '../styled/MelonList.scss'
import MelonItem from './MelonItem';
import { MelonListStyled } from '../styled/MelonStyle';

const MelonList = ({ data, onLike}) => {
    return (
        <MelonListStyled className='MelonList'>
            <table>
                <colgroup>
                    <col className='w1' />
                    <col className='w2' />
                    <col className='w3' />
                    <col className='w4' />
                    <col className='w5' />
                    <col className='w6' />
                </colgroup>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>곡(가수)</th>
                        <th>앨범</th>
                        <th>좋아요</th>
                        <th>동영상</th>
                        <th>상승/하강</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, idx) => <MelonItem item={item} key={idx} onLike={onLike}/>)
                    }
                </tbody>
            </table>
        </MelonListStyled>
    );
};

export default MelonList;