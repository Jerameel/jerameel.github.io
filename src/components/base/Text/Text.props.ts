import { CSSProperties, ReactHTMLElement, HTMLAttributes } from 'react';

import { Theme } from 'types/Theme';

export type Variants = 'title' | 'subtitle' | 'body' | 'label' | 'caption';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: any;
  variant?: Variants;
  color?: keyof Theme['brand'] | keyof Theme['neutral'];
  weight?: string;
  align?: 'center' | 'left' | 'right';
  component?: string;
  style?: CSSProperties;
  className?: string;
}
