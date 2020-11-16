import { useTheme as useThemeBase } from 'emotion-theming';
import { Theme } from 'types/Theme';

export const useTheme = (): Theme => useThemeBase();

const rootFontSizePx = 16;
export const pxToRem = (n: number): string => `${n / rootFontSizePx}rem`;

export const theme: Theme = {
  brand: {
    primary: '#1a1a1a',
    secondary: '#fff',
    info: '#1890ff',
    success: '#52C41A',
    warning: '#faad14',
    error: '#ff4d4f',
  },
  // Ant Design Neutral Colors
  neutral: {
    shade1: '#ffffff',
    shade2: '#fafafa',
    shade3: '#f5f5f5',
    shade4: '#f0f0f0',
    shade5: '#d9d9d9',
    shade6: '#bfbfbf',
    shade7: '#8c8c8c',
    shade8: '#595959',
    shade9: '#434343',
    shade10: '#262626',
    shade11: '#1f1f1f',
    shade12: '#141414',
    shade13: '#000000',
  },
};

export default theme;
