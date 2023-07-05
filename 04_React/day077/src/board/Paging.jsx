import React, { useEffect, useState } from 'react';

const Paging = ({ pageNumber, setCurrentPage }) => {
    let pageNum = []
    for (let i = 1; i <= pageNumber; i++) {
        pageNum.push(i)
    }
    return (
        <>
            {
                pageNum.map((item, idx) =>
                    <a key={idx} href='#' onClick={e => { e.preventDefault(); setCurrentPage(item) }}>{item}</a>
                )
            }
        </>
    );
};

export default Paging;