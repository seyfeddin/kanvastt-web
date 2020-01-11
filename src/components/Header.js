import React from 'react'
import { Container, Box, Text, PlainLink } from './Styles'

const Header = () => (
  <Box as="header">
    <Container pt={[6, 7]}>
      <Text
        as="a"
        href="/"
        color="light"
        position="relative"
        display={['block', 'flex']}
        flexWrap="wrap"
        alignItems="center"
      >
        <svg
          width="60"
          height="76"
          viewBox="0 0 60 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0878906 0.39563H59.6635L32.0412 38.0449L59.6635 75.6941H0.0878906V0.39563ZM8.63717 69.9447L28.4758 42.9046L48.3144 69.9447H8.63717Z"
            fill="currentColor"
          />
        </svg>
        <Text
          as="b"
          fontSize={22}
          lineHeight={1.22}
          textAlign={['left', 'right']}
          display="block"
          mr={4}
          mt={[3, 0]}
          position={['static', 'absolute']}
          right="100%"
        >
          KANVAS
          <br />
          TASARIM
          <br />
          TOPLULUĞU
        </Text>
        <PlainLink
          href="/code-of-conduct"
          textAlign={['left', 'right']}
          display="block"
          float="right"
          mr={0}
          mt={[3, 0]}
          position={['static', 'absolute']}
          right="0"
        >
          Topluluk Kuralları
        </PlainLink>
      </Text>
    </Container>
  </Box>
)

export default Header
