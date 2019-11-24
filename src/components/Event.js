import React from 'react'
import {
  Box,
  Text,
  SubTitle,
  RegisterLink,
  LocationIcon,
  Location
} from './Styles'
import { opacify } from 'polished'
import { colors } from '../styles/theme'
import 'moment/locale/tr'
import Moment from 'react-moment'

const Event = ({
  title,
  tags,
  link,
  description,
  event_date,
  thumbnail,
  location
}) => {
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
        {!event_date ? (
          'YAKINDA'
        ) : (
          <Moment locale="tr-TR" format="DD MMMM YYYY HH:mm">
            {event_date}
          </Moment>
        )}
      </Text>
      <SubTitle>{title}</SubTitle>
      {location && (
        <Location mt={2}>
          <LocationIcon>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M15.75 8.26318C15.75 13.5132 9 18.0132 9 18.0132C9 18.0132 2.25 13.5132 2.25 8.26318C2.25 6.47297 2.96116 4.75608 4.22703 3.49021C5.4929 2.22434 7.20979 1.51318 9 1.51318C10.7902 1.51318 12.5071 2.22434 13.773 3.49021C15.0388 4.75608 15.75 6.47297 15.75 8.26318Z"
                  stroke="#085147"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10.5132C10.2426 10.5132 11.25 9.50582 11.25 8.26318C11.25 7.02054 10.2426 6.01318 9 6.01318C7.75736 6.01318 6.75 7.02054 6.75 8.26318C6.75 9.50582 7.75736 10.5132 9 10.5132Z"
                  stroke="#085147"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0 0.763184)"
                  />
                </clipPath>
              </defs>
            </svg>
          </LocationIcon>

          {location}
        </Location>
      )}
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
