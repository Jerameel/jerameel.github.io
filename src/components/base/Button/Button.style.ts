import styled from 'utils/styled';
import theme from 'utils/Theme';

import Text from '../Text';
import { Variants } from './Button.props';

const backgroundColor: Record<Variants, string> = {
  default: theme.neutral.shade13,
  disabled: theme.neutral.shade6,
  success: theme.brand.success,
};

export const Wrapper = styled.div<{ takeFullWidth: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid #00232977;
  padding: 6px 6px;
  margin 4px 4px;
  width: ${(props) => (props.takeFullWidth ? '100%' : 'auto')};
`;

export const BackgroundLayer = styled.div<{
  variant: Variants;
}>`
  width: 100%;
  max-height: 48px;
  background-color: ${({ variant }) => backgroundColor[variant]};
`;

export const ButtonContainer = styled.button`
  max-height: 48px;
  z-index: 999;
  width: 100%;
  padding: 18px 36px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :focus {
    outline: none;
  }

  background: linear-gradient(to right, #262626, #262626);
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 0.6s 0s;
`;

export const AnimatedButtonContainer = styled(ButtonContainer)`
  :hover {
    background-size: 100% 100%;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

export const IconContainer = styled.div<{
  hasText: boolean;
  iconPosition: 'before' | 'after';
}>`
  display: flex;
  align-items: center;
  margin-left: ${(props) =>
    props.hasText && props.iconPosition === 'after' ? '8px' : '0'};
  margin-right: ${(props) =>
    props.hasText && props.iconPosition === 'before' ? '8px' : '0'};
`;

export const ButtonText = styled(Text)`
  text-transform: uppercase;
`;
