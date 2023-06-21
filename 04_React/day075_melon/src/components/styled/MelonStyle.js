import styled from 'styled-components'

export const Container = styled.div`
    width: 1200px;
    margin: auto;   
    h2 {
        padding: 20px 0; font-size: 16px;
    }
`

export const MelonFormStyled = styled.form`

    padding-bottom: 20px;
    margin-bottom: 20px;
    text-align: center;

    input {
        width: 50%;
        height: 50px;
        border: 1px solid #dcdcdc;
        padding: 3px 25px
    }

`
export const MelonListStyled = styled.div`

    table {
        width: 100%;

        .w1 {
            width: 7%
        }

        .w2 {}

        .w3 {
            width: 25%
        }

        .w4 {
            width: 10%
        }

        .w5 {
            width: 10%
        }

        .w6 {
            width: 10%
        }

        tr:last-child td {
            border-bottom: 1px solid #000
        }

        th,
        td {
            border-bottom: 1px solid #dcdcdc;
            vertical-align: middle;
            text-align: center;
        }

        th {
            border-top: 1px solid #000;
            height: 50px
        }

        td {
            padding: 5px;

            &:nth-child(2) {
                text-align: left;
            }

            &:nth-child(3) {
                text-align: left;
            }

            img {
                margin-right: 20px;
                vertical-align: middle;
            }

            i {
                font-size: 20px;
                vertical-align: middle;
                cursor: pointer;
            }

            &.like i {
                margin-right: 5px;
            }

            &.img {
                display: flex
            }

            &.img p {
                padding-top: 5px;
            }

            &.img p span {
                display: block;
                ;
                color: #000
            }
        }
    }



`