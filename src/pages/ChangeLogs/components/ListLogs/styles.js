import styled from 'styled-components';

export const Container = styled.div`
    overflow: auto;
    height: 900px;
    overflow: auto;
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
    @media (max-height: 800px) {
        height: 750px;
    }
`;

export const Content = styled.main`
    background-color: #ffffff;
    margin: 20px;
    width: 95%;
    min-height: 86px;
    box-shadow: 0px 2px 8px rgba(7, 71, 166, 0.15);
    border-radius: 8px;
    padding: 20px;
    border-bottom: ${({action}) => action === "Deletado" && "3px solid #FF4C4C" };
    border-bottom: ${({action}) => action === "Adicionado" && "3px solid #21CC79" };
    border-bottom: ${({action}) => action === "Editado" && "3px solid #F6A721" };

`;

export const ContentHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
    display: flex;
    flex-direction: row;
    align-items: center;
    > bds-button::part(button) {
        :hover {
            background-color: transparent;
            cursor: default;
            color: rgb(80, 95, 121);
        }
        > button {
            background-color: #e8f2ff;
            color: #3f7de8;
            border: 0px;
            border-radius: 8px;
            padding: 10px;
            margin-left: 7px;
            cursor: pointer;
        }
        > strong {
            color: #505f79;
            font-family: 'Nunito Sans';
            font-style: bold;
            font-weight: 900;
            font-display: swap;
            margin-right: 30px;
        }
    }
`;

export const ContentFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: space-between;

    > div {
        display: flex;
        > bds-button::part(button) {
            width: 20px;
            font-family: 15px;
    }
`;

export const LogItem = styled.footer`
    display: flex;
    width: 100%;
    justify-content: space-around;

    > div {
        display: flex;
        > bds-button::part(button) {
            width: 20px;
            font-family: 15px;
       
    }
`;

export const LogInfo = styled.footer`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 10px;

    > p {
        > bds-button::part(button) {
            width: 20px;
            font-family: 15px;
       
    }
`;

export const Divisor = styled.div`
    display: flex;
    height: 10rem;
    width: 3px;
    border-radius: 15px;
    background: #a7a9ac;
    margin-left: 1rem;
    margin-right: 4rem;
    opacity: 30%;
`;

export const ButtonLog = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    height: 100%;
    margin-top: 7px;
`;

export const HeaderLog = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    height: 100%;
    margin-top: 7px;
`;

export const KeywordLog = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    height: 100%;
    margin-top: 7px;
`;

export const ConfigurationLog = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    height: 100%;
    margin-top: 7px;
`;
