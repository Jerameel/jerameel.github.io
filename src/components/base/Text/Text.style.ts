import styled from 'utils/styled';
import { pxToRem } from 'utils/Theme';

import { Variants, TextProps } from './Text.props';

const styles: Record<Variants, string> = {
  title: `
        font-size: ${pxToRem(36)};
        line-height: 40px;
    `,
  subtitle: `
        font-size: ${pxToRem(24)};
    `,
  body: `
        font-size: ${pxToRem(18)};
    `,
  label: `
        font-size: ${pxToRem(14)};
        letter-spacing: 10%;
        text-transform: uppercase;
    `,
  caption: `
        font-size: ${pxToRem(14)};
        
    `,
};

const weights: Record<string, string> = {
  Light: '300',
  Regular: '400',
  Medium: '500',
  SemiBold: '600',
  Bold: '700',
};

const fontWeights: Record<string, string> = {
  title: weights.Bold,
  subtitle: weights.Regular,
  body: weights.Light,
  label: weights.Bold,
  caption: weights.Medium,
};

export const P = styled.p<TextProps>`
  ${({ variant }) => styles[variant || 'body']};
  font-weight: ${({ variant, weight }) =>
    weight || fontWeights[variant || 'body']};
  color: ${({ theme, color = 'shade13' }) =>
    ({ ...theme.neutral, ...theme.brand }[color])};
  text-align: ${({ align }) => align || 'left'};
  margin: 0;
`;
