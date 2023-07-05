import React from 'react';

const List = ({ currentPosts, loading }) => {
    if (!loading) {
        return <tr><td colSpan={3}>--- loading ---</td></tr>
    }
    return (
        <>
            {
                currentPosts.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                )
            }
        </>
    );
};

export default List;