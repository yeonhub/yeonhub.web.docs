import React from 'react';

const PostItem = ({ item }) => {
    const { title, author, created_at } = item
    return (
        <div>
            {title}
            <br/>
            {author}
            <br/>
            {created_at}
            <hr/>
        </div>
    );
};

export default PostItem;