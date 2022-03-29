import styled from 'styled-components';
import modal from 'react-modal';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 13px;
    border: 1px solid #ccc;
    margin-top: 20px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.07);
    align-self: center;

    > div {
        margin: 20px;
        text-align: justify;
        > p{
            word-break: break-all;
        }
    }
    button {
        background: transparent;
        width: 100%;
        border: 0.5px solid #e5e5e5;
        border-bottom: 0px;
        border-left: 0px;
        border-right: 0px;
        font-weight: bold;
        padding: 11px 26px;
        color: #1bbec0;
        cursor: pointer;
    }
`;



export const Modal = styled(modal)`
    position: absolute;
    top: 0%;
    left: 35%;
    bottom: 25%;
    max-width: 550px;
    width: 550px;
    right: 25%;
  
`;
