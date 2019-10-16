import React from 'react'
import { Box, Text, SubTitle } from './Styles'
import { opacify } from 'polished'
import { colors } from '../styles/theme'

const Event = ({ title, tags, link, description, event_date }) => {
  return (
    <Box
      position="relative"
      borderTop="1px solid"
      borderColor={opacify(-0.7, colors.primary)}
      py={4}
    >
      <Text
        textAlign={['left', 'right']}
        mr={4}
        position={['static', 'absolute']}
        right="100%"
        mb={2}
      >
        YAKINDA
      </Text>
      <SubTitle>{title}</SubTitle>
      <Text mt={2}>{description}</Text>
    </Box>
  )
}

export default Event
