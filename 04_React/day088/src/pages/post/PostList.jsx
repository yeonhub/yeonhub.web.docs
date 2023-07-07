import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/modules/postSlice';
import PostItem from './PostItem';

const PostList = () => {
    const { post } = useSelector(state => state.post)
    const { text } = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost(text))
    }, [text])
    
    const sortPost = [...post].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));


    return (
        <div>
            {
                sortPost.map((item, idx) => <PostItem key={idx} item={item} />)
            }
        </div>
    );
};

export default PostList;