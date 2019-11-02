import React from 'react'
import { Box, Text, SubTitle, RegisterLink } from './Styles'
import { opacify } from 'polished'
import { colors } from '../styles/theme'
import { Link } from 'gatsby'

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
        {event_date === 'Invalid date' ? 'YAKINDA' : event_date}
      </Text>
      <SubTitle>{title}</SubTitle>
      <Text mt={2}>{description}</Text>
      {link && (
        <RegisterLink
          mt={2}
          color="primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Kayıt ol
        </RegisterLink>
      )}
    </Box>
  )
}

export default Event
