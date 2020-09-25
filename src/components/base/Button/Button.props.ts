import { ButtonHTMLAttributes } from 'react';

import { Theme } from 'types/Theme';

export type Variants = 'default' | 'disabled' | 'success';
export type IconPosition = 'before' | 'after';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  color?: keyof Theme['brand'];
  text?: string;
  iconPosition?: IconPosition;
  variant?: Variants;
  icon?: JSX.Element;
  takeFullWidth?: boolean;
}
