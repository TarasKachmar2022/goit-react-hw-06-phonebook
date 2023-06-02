import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 0 0.4px 0.4px #000;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;

export const ContactContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ContactTitle = styled.span`
  @media screen and (min-width: 320px) {
    font-size: 20px;
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 600;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ContactNumber = styled.span`
  @media screen and (min-width: 320px) {
    font-size: 20px;
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 600;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
  }
`;

export const DeleteBtn = styled.button`
  background-color: ${p => p.theme.colors.darkGrey};
  border-radius: 10px;

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

  @media screen and (min-width: 320px) {
    padding: 10px 15px;
  }
  @media screen and (min-width: 768px) {
    padding: 6px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 6px 10px;
    text-align: end;
  }
`;
