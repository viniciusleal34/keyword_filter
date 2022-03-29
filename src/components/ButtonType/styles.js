import styled from 'styled-components';

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
    grid-area: footer;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: end;
    margin-bottom: 20px;
    > bds-button::part(button) {
        width: 100%;
    }
`;