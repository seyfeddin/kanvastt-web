import React from 'react'
import { Global, css } from '@emotion/core'

const ResetStyle = () => (
  <Global
    styles={css`
      // github.com/ademilter/formalize
      * {
        &,
        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      html {
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
      }

      body {
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      input,
      textarea,
      select,
      button {
        font: inherit;
      }

      textarea {
        resize: vertical;
      }

      button {
        cursor: pointer;
        background-color: transparent;
        user-select: none;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        vertical-align: middle;
        max-width: 100%;
      }

      svg {
        display: inline-block;
        vertical-align: middle;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figure,
      p,
      pre,
      fieldset,
      ul,
      ol,
      menu,
      form {
        margin: 0;
      }

      fieldset,
      ul,
      ol,
      button,
      menu,
      td {
        padding: 0;
      }

      button,
      fieldset,
      iframe {
        border: 0;
      }

      fieldset {
        min-width: 0;
      }

      ol,
      ul {
        list-style: none;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
      }

      th {
        text-align: left;
      }
    `}
  />
)

export default ResetStyle
