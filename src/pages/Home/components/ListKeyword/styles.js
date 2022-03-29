import styled from 'styled-components';

export const Container = styled.div`
    overflow: auto;
    height: 800px;
    -ms-overflow-style: initial;

    ::-webkit-scrollbar-track {
        background-color: #f4f4f4;
        border-radius: 30px !important;

        margin-left: 10px !important;
    }
    ::-webkit-scrollbar {
        width: 8px;
        background: #f4f4f4;
        border-radius: 30px !important;
        margin-left: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
        border-radius: 30px !important;
        margin-left: 10px !important;
    }
`;

export const Content = styled.main`
    background-color: #ffffff;
    margin: 20px 10px;
    min-height: 86px;
    box-shadow: 0px 2px 8px rgba(7, 71, 166, 0.15);
    border-radius: 8px;
    padding: 20px;
    > button {
        background-color: #e8f2ff;
        color: #3f7de8;
        border: 0px;
        height: 24px;
        border-radius: 8px;
        padding: 3px, 8px, 3px, 8px;
        margin-left: 7px;
        cursor: pointer;
    }
`;

export const ContentHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
    display: flex;
    flex-direction: row;
    align-items: center;

    > strong {
        color: #505f79;
        font-family: 'Nunito Sans';
        font-style: bold;
        font-weight: 900;
        font-display: swap;
        margin-right: 30px;
    }
    > bds-button::part(button) {
        :hover {
            background-color: transparent;
            cursor: default;
            color: rgb(80, 95, 121);
        }
    }
`;

export const ContentFooter = styled.footer`
    display: flex;
    width: 98%;
    justify-content: space-between;
    margin-left: 15px;
    text-align: justify;
    p {
       margin-right: 30px;
    }
    > div {
        display: flex;
        > bds-button::part(button) {
            width: 20px;
            font-family: 15px;
    }
  
`;
