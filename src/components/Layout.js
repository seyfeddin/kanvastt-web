import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { ThemeProvider } from 'emotion-theming'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import ResetStyle from '../styles/reset'
import Seo from './Seo'

const { NODE_ENV } = process.env

const Layout = ({ children }) => {
  useEffect(() => {
    if (NODE_ENV === 'production') {
      ReactGA.initialize('UA-150296399-1')
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <ResetStyle />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Layout
