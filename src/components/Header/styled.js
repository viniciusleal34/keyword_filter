import styled from 'styled-components';

export const HeaderPluginWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
  padding: 0.5rem 0.5rem 1rem;

  border-bottom: 1px solid #d2dfe6;

  > div{
    display: flex;

    > bds-button::part(button) {
        width: 98%;
        margin-right: 10px;
    }
  }

`;