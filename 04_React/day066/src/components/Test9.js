const Test9 = () => {
    const arr = ['김', '이', '박', '최', '윤']
    const data = [
        { id: 1, name: '김' },
        { id: 2, name: '이' },
        { id: 3, name: '박' },
        { id: 4, name: '최' },
        { id: 5, name: '윤' }
    ]
    return (
        <div>
            <h2>반복문 map + key</h2>
            <ul>
                {
                    arr.map((item, idx) => {
                        return (
                            <li key={idx}>
                                {idx}/{item}
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <ul>
                {arr.map((item, idx) => <li key={idx}>
                    {idx}/{item}
                </li>)}
            </ul>
            <hr />
            <ul>
                {
                    data.map((item, idx) => {
                        return (<li key={idx}>{idx}/{item.id}/{item.name}</li>)
                    })
                }
            </ul>
            <hr />
            <ul>
                {
                    data.map((item, idx) => {
                        const { id, name } = item
                        return (<li key={idx}>{idx}/{id}/{name}</li>)
                    })
                }
            </ul>
            <hr />
            <ul>
                {
                    data.map((item,idx)=> <li key={idx}>{item.id}/{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test9;

/* 
    Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다.
*/