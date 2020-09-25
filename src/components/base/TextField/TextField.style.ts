import Text from 'components/base/Text';
import styled from 'utils/styled';

export const Container = styled.div``;

const fontStyle = `
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 24px;
`;

export const FieldContainer = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.brand.error : theme.neutral.shade5)};
  background-color: ${({ theme }) => theme.neutral.shade1};
  filter: drop-shadow(0px 4px 20px rgba(229, 229, 229, 0.5));
`;

export const Field = styled.input`
  background-color: ${({ theme }) => theme.neutral.shade1};
  display: flex;
  flex: 1;
  border-radius: 10px;
  padding: 12px 16px;
  border: 0;
  height: 100%;
  :focus {
    outline: none;
  }
  ${fontStyle};
  ::placeholder {
    color: ${({ theme }) => theme.neutral.shade6};
    opacity: 1;
  }
`;

export const LeftComponentContainer = styled.div`
  display: flex;
  width: 48px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.neutral.shade5};
`;

export const VisibilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-right: 10px;
  padding-left: 4px;
`;

export const Error = styled(Text)`
  margin-top: 4px;
`;

export const Prefix = styled.span`
  padding-left: 12px;
  ${fontStyle};
`;
