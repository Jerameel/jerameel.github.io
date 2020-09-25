import styled from 'utils/styled';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  padding-top: 96px;
  width: 100%;
  align-items: center;
  @media (min-width: 701px) {
    max-width: 800px;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    max-width: 400px;
  }

  .title-container {
    margin-top: 40px;
    p {
      text-align: center;
    }
  }

  .description-container {
    margin-top: 16px;
    p {
      text-align: center;
    }
  }

  .button-container {
    margin-top: 64px;
  }
`;
