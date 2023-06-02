import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  max-width: 100%;
  margin-bottom: 10px;

  @media screen and (min-width: 320px) {
    width: 290px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1280px) {
    width: 450px;
  }
`;
