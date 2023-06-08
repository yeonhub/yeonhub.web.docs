import React from 'react';

const Am = () => {
    const data = [
        { id: 1, name: '김', age: 23, addr: '서울특별시', done: true },
        { id: 2, name: '이', age: 21, addr: '인천광역시', done: false },
        { id: 3, name: '박', age: 42, addr: '울산광역시', done: false },
        { id: 4, name: '최', age: 19, addr: '여주시', done: true },
        { id: 5, name: '윤', age: 45, addr: '수원시', done: false },
        { id: 6, name: '정', age: 57, addr: '성남시', done: true },
        { id: 7, name: '조', age: 15, addr: '평택시', done: false }
    ]
    return (
        <div>
            <table>
                <caption>회원정보</caption>
                <colgroup>
                    <col width='10%'/>
                    <col width='15%'/>
                    <col width='25%'/>
                    <col width='auto'/>
                    <col width='20%'/>
                </colgroup>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>주소</th>
                    <th>동의 여부</th>
                </tr>
                {
                    data.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.addr}</td>
                                <td>{item.done? '동의':'비동의'}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};

export default Am;