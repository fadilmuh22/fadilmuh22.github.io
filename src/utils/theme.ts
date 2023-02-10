import { extendTheme, theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const myTheme = extendTheme({
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
        background: '#fff',
        cardBG: '#fff',
        tagBG: '#EBF8FF',
        border: '#e2e8f0',
        text: '#1a202c',
        subtext: '#334E68',
        heading: '#102a43',
        icon: '#9FB3C8',
        link: '#9F00FF',
        career: {
          tagBG: '#f7fafc',
          text: '#1a202c',
          subtext: '#2d3748',
        },
        skills: {
          color: '#4299E1',
          border: '#4299E1',
          bg: '#d7e8f3',
        },
      },
      dark: {
        logo: '#ffffff',
        background: 'rgb(16, 42, 67)',
        cardBG: 'rgb(33 57 82)',
        tagBG: '#CEEDFF',
        border: '#718096',
        text: '#fff',
        subtext: '#fff',
        color: '#fff',
        heading: '#fff',
        icon: '#486581',
        link: '#F8CCFF',
        career: {
          tagBG: 'rgba(237, 242, 247, 0.16)',
          text: '#fff',
          subtext: '#fff',
        },
        skills: {
          color: '#fff',
          border: '#4299E1',
          bg: '#427a9e',
        },
      },
    },
  },
});
