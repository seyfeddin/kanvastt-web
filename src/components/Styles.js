import {
  layout,
  space,
  color,
  typography,
  flexbox,
  position
} from 'styled-system'
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

export const Base = styled('div', {
  shouldForwardProp
})(layout, space, color, flexbox, position)

export const Box = styled(Base)()

export const Section = styled(Box)()
Section.defaultProps = {
  as: 'section',
  py: 7
}

export const Text = styled(Base)(typography)
Text.defaultProps = {
  as: 'p',
  fontSize: ['body', 'bodyDesktop']
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
