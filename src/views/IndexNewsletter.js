import React, { useState } from 'react'
import {
  Container,
  Box,
  Title,
  Text,
  Section,
  Input
} from '../components/Styles'
import addToMailchimp from 'gatsby-plugin-mailchimp'

function Hero() {
  const [email, setEmail] = useState('')
  const [messages, setMessages] = useState('')

  const submitForm = e => {
    e.preventDefault()

    addToMailchimp(email, {})
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg
        }
        setMessages(msg)
      })
      .catch(err => {
        setMessages(err)
      })
  }

  return (
    <Section id="newsletter">
      <Container>
        <Title>Sen de bizim gibi heyecanlı mısın?</Title>
        <Text as="label" display="block" for="email" mt={4}>
          O halde topluluğun şekillenmesinde söz sahibi olmak ve tüm
          gelişmelerden ilk haberdar olmak istiyorsan, e-posta listesine kayıt
          ol
        </Text>

        <Box as="form" onSubmit={submitForm} mt={4} position="relative">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Eposta adresi"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <Box
            as="button"
            color="light"
            position="absolute"
            top="10px"
            right="10px"
            type="submit"
            aria-label="Register Newsletter"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0ZM30.6371 20.1358L22.7526 12.358C22.2687 11.8807 21.4843 11.8807 21.0004 12.358C20.5166 12.8353 20.5166 13.6091 21.0004 14.0864L26.77 19.7778H12.2222C11.5472 19.7778 11 20.325 11 21C11 21.675 11.5472 22.2222 12.2222 22.2222H26.77L21.0004 27.9136C20.5166 28.3909 20.5166 29.1647 21.0004 29.642C21.4843 30.1193 22.2687 30.1193 22.7526 29.642L30.6371 21.8642C31.121 21.3869 31.121 20.6131 30.6371 20.1358Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          {messages && <Text mt={4}>{messages}</Text>}
        </Box>
      </Container>
    </Section>
  )
}

export default Hero
