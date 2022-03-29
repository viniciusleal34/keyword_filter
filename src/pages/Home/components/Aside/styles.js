import styled from 'styled-components';

export const Container = styled.aside`
    min-width: 440px;
    max-width: 440px;
    background-color: #e7edf4;
    box-shadow: 2px 0px 12px 4px #d7dee5;
    display: block;
    left: 0;
    top: 0;
    padding: 1.5rem 1.5rem 2rem;
`;


export const SidebarCat = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'main' 'footer';
    max-height: 1000px;
`;

export const SidebarMain = styled.div`
    display: block;
    grid-area: main;

    > * {
        margin-top: 0.5rem;
    }
 
`;

export const SidebarFooter = styled.div`
    display: grid;
    grid-area: footer;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: end;

    > bds-button::part(button) {
        width: 100%;
    }
`;

export const bdsSwitch = styled.div`
    display: grid;
    gap: 4px;
    padding: 7px 4px 8px 12px;

    > bds-typo {
        color: #8ca0b3;n
    }
`;

export const ContentTab = styled.div`
    display: grid;
    row-gap: 0.5rem;

    > bds-button::part(button) {
        width: 100%;
    }

    > .moreKey {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 0.5rem;
    }
`;

export const ContentView = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > bds-button::part(button) {
        width: auto;
        opacity: 0.6;
        margin-right: 0px;
    }
`;
