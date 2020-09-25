import styled from 'utils/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.brand.secondary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
  align-items: center;
  @media (min-width: 701px) {
    max-width: 800px;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    max-width: 400px;
  }
`;
