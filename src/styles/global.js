import React from 'react'
import { Global, css } from '@emotion/core'
import theme from './theme'

const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Manrope';
        src: url('/fonts/manrope-medium.woff2') format('woff2'),
          url('/fonts/manrope-medium.woff') format('woff');
        font-weight: ${theme.fontWeights.normal};
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Manrope';
        src: url('/fonts/manrope-bold.woff2') format('woff2'),
          url('/fonts/manrope-bold.woff') format('woff');
        font-weight: ${theme.fontWeights.bold};
        font-style: normal;
        font-display: swap;
      }

      body {
        font-family: ${theme.fonts.body};
        font-weight: ${theme.fontWeights.normal};
        font-size: ${theme.fontSizes.body};
        line-height: ${theme.lineHeights.body};
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      }
    `}
  />
)

export default GlobalStyle
