import React from 'react'
import {
  Container,
  Title,
  SubTitle,
  Text,
  Section,
  Box,
  Link
} from '../components/Styles'

function Hero() {
  return (
    <Section>
      <Container>
        <Title color="light">
          Yepyeni bir tasarım topluluğu{' '}
          <Link color="light" href="#events">
            etkinliklere
          </Link>{' '}
          başlıyor.
        </Title>

        <SubTitle as="p" lineHeight="body" mt={4}>
          Kanvas, dijital tasarımı sadece estetik olarak değil bir amaç
          doğrultusunda yapılan hareketler bütünü olarak gören herkesi bir araya
          getirmeyi hedefleyen bir topluluktur.
        </SubTitle>

        <SubTitle color="light" mt={6}>
          Tasarımcı değil misin?
        </SubTitle>
        <Text mt={2}>
          Merak duyman yeterli. Hedeflerimizden biri de topluma yeni
          tasarımcılar kazandırmak. Planladığımız etkinlikler arasında sana
          uygun etkinlikler de olacak.
        </Text>

        <SubTitle color="light" mt={6}>
          Nasıl Katılabilirim?
        </SubTitle>
        <Text mt={2}>
          Bizi{' '}
          <Link
            color="light"
            href="https://twitter.com/kanvastt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{' '}
          üzerinden takip edebilir,{' '}
          <Link
            color="light"
            href="https://kommunity.com/kanvas-tasarim-toplulugu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kommunity’deki sayfamıza
          </Link>{' '}
          kaydolabilirsin. Tüm gelişmeler ve bazı özel buluşmalardan ilk
          haberdar olmak için ise{' '}
          <Link color="light" href="#newsletter">
            mail listemize
          </Link>{' '}
          kayıt olman gerek.
        </Text>

        <Box mt={6}>
          <Link
            color="light"
            href="https://twitter.com/kanvastt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KanvasTT twitter profili"
          >
            <svg
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter icon</title>
              <path
                fill="currentColor"
                d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
              />
            </svg>
          </Link>
          <Link
            color="light"
            href="https://kommunity.com/kanvas-tasarim-toplulugu"
            target="_blank"
            rel="noopener noreferrer"
            ml={4}
            aria-label="KanvasTT kommunity profili"
          >
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.76145 15.4716L7.46463 18.215V21.6921H0V0H7.46463V7.65605L13.9404 0H22.681L14.8336 9.41056L23 21.6921H14.2594L9.76145 15.4716Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </Box>
      </Container>
    </Section>
  )
}

export default Hero
