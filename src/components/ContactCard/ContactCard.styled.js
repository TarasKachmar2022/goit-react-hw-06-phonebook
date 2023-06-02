import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 0 0.4px 0.4px #000;
`;

export const DeleteBtn = styled.button`
  background-color: ${p => p.theme.colors.darkGrey};
  border-radius: 10px;
  padding: 3px 7px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.darkGrey};
  transition: background-color 250ms linear;

  :hover {
    background-color: ${p => p.theme.colors.orange};
  }

  :active {
    scale: 0.95;
    background-color: ${p => p.theme.colors.orange};
  }
`;
