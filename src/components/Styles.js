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
