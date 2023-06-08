import React from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    return (
        <>
            <Test8Sub
                name="김"
                age={20}
                addr="인천광역시 남동구"
                tel="010-9000-7444"
                done={true}
                color="red"
                bgColor="lightgray"
            />
            <Test8Sub
                name="이"
                addr="경기도 성남시"
                tel="010-1111-7545"
                done={false}
                color="blue"
                bgColor="lightpink"
            />
            <Test8Sub />
        </>
    );
};

export default Test8;