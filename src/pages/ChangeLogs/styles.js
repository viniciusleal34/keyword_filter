import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    background-color: #f8fbfb;
    display: flex;
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
`;

export const Layout = styled.main`
    padding: 0 5.25rem 4rem;
    width: 100%;
`;

export const Section = styled.section``;

export const SearchContainer = styled.div`
    width: 98%;
    display: flex;
    margin-top: 20px;
    align-items: flex-end;
    margin-left: 10px;
    > bds-button::part(button) {
        margin-left: 10px;
    }
    padding-bottom: 30px;
    background-color: #f8fbfb;
    > div {
        width: 100%;
    }
`;
