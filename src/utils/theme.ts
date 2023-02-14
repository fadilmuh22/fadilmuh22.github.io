import { extendTheme, theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const myTheme = extendTheme({
  config: {
    initialColorMode: 'system',
  },
  global: (props: any) => ({
    color: mode('gray.800', 'whiteAlpha.900')(props),
    bg: mode('gray.100', 'rgb(16, 42, 67)')(props),
  }),
  fontSizes: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '20px',
    '3xl': '24px',
    '4xl': '28px',
    '5xl': '32px',
    '6xl': '48px',
  },
  breakpoints: {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
  colors: {
    ...theme.colors,
    mode: {
      light: {
        logo: '#102a43',
        background: '#f7f7f7',
        cardBG: '#fff',
        tagBG: '#ebf8ff',
        border: '#e2e8f0',
        text: '#1a202c',
        subtext: '#2d3748',
        heading: '#102a43',
        icon: '#2d3748',
        link: '#9f00ff',
        shadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        career: {
          tagBG: '#82828218',
        },
        skills: {
          border: '#4299e1',
          bg: '#d7e8f3',
        },
      },
      dark: {
        logo: '#ffffffde',
        background: '#262626',
        cardBG: '#1C1B1F',
        tagBG: '#ceedff',
        border: '#718096',
        text: '#ffffffde',
        subtext: '#ffffff99',
        color: '#ffffffde',
        heading: '#ffffffde',
        icon: '#ffffffde',
        link: '#f8ccff',
        shadow:
          '0 4px 6px -1px rgba(113, 128, 150, 0.2), 0 2px 4px -1px rgba(113, 128, 150, 0.09)',
        career: {
          tagBG: '#edf2f729',
        },
        skills: {
          border: '#4299e1',
          bg: '#427a9e',
        },
      },
    },
  },
});
