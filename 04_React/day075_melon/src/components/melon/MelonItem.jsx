import React from 'react';
import MelonModal from './MelonModal';
import { FcLike, FcLikePlaceholder, FcUp, FcDown, FcMenu } from "react-icons/fc";
import Numeral from 'numeral';

const MelonItem = ({ item ,onLike}) => {
    const {id, rank, poster, title, singer, album, like, key, done, state } = item
    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt={title} width="60" />
                <p className="img">
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td>
                {album}
            </td>
            <td className="like">
                <i onClick={()=>onLike(id)}>
                    {
                        done ? <FcLike /> : <FcLikePlaceholder />
                    }
                    {Numeral(like).format(0, 0)}
                </i>
            </td>
            <td>
                <i className='xi-videocam-o'>
                    {
                        <MelonModal key={key}/>
                    }
                </i>

            </td>
            <td>
                <span style={{ marginLeft: 10 }}>
                    {state === '상승' && <FcUp />}
                    {state === '유지' && <FcMenu />}
                    {state === '하락' && <FcDown />}
                </span>
            </td>
        </tr>
    );
};

export default MelonItem;