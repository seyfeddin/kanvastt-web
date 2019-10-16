import { layout, space, color } from 'styled-system'
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

export const Box = styled('div', {
  shouldForwardProp
})(layout, space, color)
