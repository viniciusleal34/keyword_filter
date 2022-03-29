import styled from 'styled-components';

export const Keyword = styled.div`
    display: grid;
    row-gap: 0.5rem;

    padding-bottom: 1rem;
    border-bottom: 1px solid #d2dfe6;

    > bds-button::part(button) {
        width: 100%;
    }

    > .moreKey {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 0.5rem;
    }
`;

export const bdsSwitch = styled.div`
    display: grid;
    gap: 4px;
    padding: 7px 4px 8px 12px;

    > bds-typo {
        color: #8ca0b3;
    }
`;

export const ContainerSwitch = styled.div`
    display: grid;
    row-gap: 0.5rem;
    grid-template-columns: 2fr 1fr;
    justify-content: space-around;
    align-items: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d2dfe6;
    margin-top: 5px;
    > bds-button::part(button) {
        width: 100%;
    }
    > div {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: auto;
        > bds-button::part(button) {
            margin-right: 5px;
            width: 50px;
          
        }
    }
`;

export const ContentTab = styled.div`
  display: grid;
  row-gap: 0.5rem;
  padding-bottom: 30px;
  > bds-button::part(button) {
    width: 100%;
  }
  > .moreKey {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0.5rem;
  }
`;

export const SidebarFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: end;

    > bds-button::part(button) {
        width: 100%;
    }
`;
