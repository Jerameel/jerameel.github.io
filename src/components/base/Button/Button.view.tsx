import React from 'react';

import PuffLoader from 'react-spinners/PuffLoader';
import { Theme } from 'types/Theme';
import { useTheme } from 'utils/Theme';

import { ButtonProps } from './Button.props';
import {
  ButtonContainer,
  AnimatedButtonContainer,
  LoadingContainer,
  IconContainer,
  ButtonText,
  BackgroundLayer,
  Wrapper,
} from './Button.style';
const Button = (props: ButtonProps): JSX.Element => {
  const theme = useTheme();
  const {
    loading,
    icon,
    text,
    color,
    iconPosition = 'after',
    variant = 'default',
    takeFullWidth = false,
    ...buttonProps
  } = props;

  const hasText = text && text?.length > 0 ? true : false;

  const isDefault = variant === 'default';
  const BaseButton = isDefault ? AnimatedButtonContainer : ButtonContainer;

  let textColor: keyof Theme['brand'] | keyof Theme['neutral'] = 'shade13';
  let loadingColor = theme.neutral.shade13;

  if (isDefault) {
    textColor = 'shade1';
    loadingColor = theme.neutral.shade1;
  }

  return (
    <Wrapper takeFullWidth={takeFullWidth}>
      <BackgroundLayer variant={variant}>
        <BaseButton color={color} {...buttonProps}>
          {iconPosition === 'before' && (
            <IconContainer hasText={hasText} iconPosition={iconPosition}>
              {icon}
            </IconContainer>
          )}

          {text && (
            <ButtonText variant="caption" color={textColor}>
              {text}
            </ButtonText>
          )}
          {loading && (
            <LoadingContainer>
              <PuffLoader size={24} color={loadingColor} />
            </LoadingContainer>
          )}

          {iconPosition === 'after' && !loading && (
            <IconContainer hasText={hasText} iconPosition={iconPosition}>
              {icon}
            </IconContainer>
          )}
        </BaseButton>
      </BackgroundLayer>
    </Wrapper>
  );
};

export default Button;
