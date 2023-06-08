import React from 'react';

const Test3 = () => {
    const url = 'https://static.ebs.co.kr/images/public/lectures/2014/06/19/10/bhpImg/44deb98d-1c50-4073-9bd7-2c2c28d65f9e.jpg'
    const desc = '뽀로로'
    const styles = {
        wrap: {
            margin: 20,
            padding: 20,
            display: 'flex',
            border: "1px solid #000",
            borderRadius: 50
        },
        imgBox: {
            padding: 5,
            height: 100,
            borderRadius: '50%'
        },
        conBox : {
            marginLeft : 15,
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center'
        }
    }
    return (
        <div style={styles.wrap}>
            <div

            // 한 줄 주석 (태그 안)
            /* 여러줄 주석 */

            >
                
                <img src={url} alt="" style={styles.imgBox} />
            </div>
            <div style={styles.imgBox}>
                <span>{desc}</span>
                <span></span>
            </div>
        </div>
    );
};

export default Test3;