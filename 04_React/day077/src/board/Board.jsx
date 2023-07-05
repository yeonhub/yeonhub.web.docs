import React, { useState } from 'react';
import './board.css';
import './reset.css';
import { useAxios } from '../hooks/useAxios';
import List from './List';
import Paging from './Paging';

const Board = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data, loading, error } = useAxios(url)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    const totalPage = data.length;
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const pageNumber = Math.ceil(totalPage / postsPerPage)
    const currentPosts = data.slice(firstPost, lastPost)

    return (
        <main id="container" className="board">
            <section id="content">
                <table>
                    <caption>게시판</caption>
                    <colgroup>
                        <col className="id" />
                        <col className="title" />
                        <col className="body" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>타이틀</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <List currentPosts={currentPosts} loading={loading} />
                    </tbody>
                </table>

                <p className="paging">
                    <Paging pageNumber={pageNumber} setCurrentPage={setCurrentPage} />
                </p>
            </section>
        </main>
    );
};

export default Board;