import styled from 'styled-components';

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  width: 650px;

  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  text-shadow: ${p => p.theme.shadows.textShadow};
`;

export const Title = styled.h2`
  font-size: 38px;
  text-shadow: ${p => p.theme.shadows.textShadow};
`;
