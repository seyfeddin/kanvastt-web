import {
  layout,
  space,
  color,
  typography,
  flexbox,
  position,
  border
} from 'styled-system'
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { opacify } from 'polished'
import { colors } from '../styles/theme'

export const Base = styled('div', {
  shouldForwardProp
})(layout, space, color, flexbox, position, border)

export const Box = styled(Base)()

export const Section = styled(Box)()
Section.defaultProps = {
  as: 'section',
  py: [6, 7]
}

export const Container = styled(Box)()

Container.defaultProps = {
  width: 1,
  maxWidth: '800px',
  mx: 'auto',
  px: 4
}

export const Text = styled(Base)(typography)

Text.defaultProps = {
  as: 'p',
  fontSize: ['body', 'bodyDesktop']
}

export const HTMLText = styled(Text)`
  & * a {
    text-decoration: underline;
  }
  & p {
    margin-bottom: 20px;
  }
  & h2 {
    margin-bottom: 10px;
    margin-top: 60px;
  }
  & ul > li {
    list-style-type: disc;
    list-style-position: inside;
  }
  & ul {
    margin-bottom: 32px;
  }
  line-height: 1.6;
`
HTMLText.defaultProps = {
  as: 'div',
  fontSize: ['body', 'bodyDesktop']
}

export const Link = styled(Text)({
  textDecoration: 'underline'
})

Link.defaultProps = {
  as: 'a'
}
export const Title = styled(Text)()

Title.defaultProps = {
  as: 'h1',
  fontSize: ['title', 'titleDesktop'],
  lineHeight: 'heading'
}

export const SubTitle = styled(Text)()

SubTitle.defaultProps = {
  as: 'h3',
  fontSize: ['subTitle', 'subTitleDesktop'],
  lineHeight: 'heading'
}

export const Location = styled(Text)()

Location.defaultProps = {
  as: 'p',
  fontSize: ['caption', 'captionDesktop'],
  lineHeight: 'caption',
  marginTop: ['8px', '4px']
}

export const RegisterLink = styled(Link)()

RegisterLink.defaultProps = {
  as: 'a',
  fontSize: ['body', 'bodyDesktop'],
  lineHeight: 'heading',
  textDecoration: 'underline',
  fontWeight: 'bold',
  display: 'inline-block'
}

export const LocationIcon = styled(Text)()

LocationIcon.defaultProps = {
  as: 'span',
  display: 'inline-block',
  marginRight: '0.3em',
  verticalAlign: 'middle',
  marginTop: '-4px'
}

export const Input = styled(Text)({
  '&::placeholder': {
    color: opacify(-0.5, colors.white)
  }
})

Input.defaultProps = {
  as: 'input',
  p: 3,
  width: 1,
  color: 'white',
  backgroundColor: opacify(-0.9, colors.light),
  border: 0,
  boxShadow: 'none',
  borderBottom: '2px solid',
  borderColor: 'light',
  borderRadius: 0
}
