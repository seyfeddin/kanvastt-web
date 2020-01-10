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
            etkinliklere başladı
          </Link>
          .
        </Title>

        <SubTitle as="p" lineHeight="body" mt={4}>
          Kanvas; dijital tasarımı sadece estetik olarak değil, bir amaç
          doğrultusunda yapılan hareketler bütünü olarak gören herkesi, bir
          araya getirmeyi hedefleyen bir topluluktur.
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

        <SubTitle color="light" mt={6}>
          Size nasıl ulaşabilirim?
        </SubTitle>
        <Text mt={2}>
          Tavsiyelerini, aklına gelen soruları veya topluluğumuzun düzenlemesini
          istediğin etkinlik isteklerini{' '}
          <Link
            color="light"
            href="mailto:merhaba@kanvas.istanbul"
            target="_blank"
            rel="noopener noreferrer"
          >
            merhaba@kanvas.istanbul
          </Link>{' '}
          e-posta adresinden bize gönderebilirsin.
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
          <Link
            color="light"
            href="https://instagram.com/kanvas_tt"
            target="_blank"
            rel="noopener noreferrer"
            ml={4}
            aria-label="KanvasTT instagram profili"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16V2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z"
                fill="#FFEBE6"
              />
            </svg>
          </Link>
          <Link
            color="light"
            href="mailto:merhaba@kanvas.istanbul"
            target="_blank"
            rel="noopener noreferrer"
            ml={4}
            aria-label="KanvasTT eposta adresi"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.4885 10.0617C26.6941 9.89824 27 10.0512 27 10.3096V21.0938C27 22.4912 25.8662 23.625 24.4688 23.625H2.53125C1.13379 23.625 0 22.4912 0 21.0938V10.3148C0 10.0512 0.300586 9.90352 0.511523 10.067C1.69277 10.9846 3.25898 12.15 8.63789 16.0576C9.75059 16.8697 11.6279 18.5783 13.5 18.5678C15.3826 18.5836 17.2969 16.8381 18.3674 16.0576C23.7463 12.15 25.3072 10.9793 26.4885 10.0617ZM13.5 16.875C14.7234 16.8961 16.4848 15.3352 17.3707 14.6918C24.3686 9.61348 24.9012 9.17051 26.5148 7.90488C26.8207 7.66758 27 7.29844 27 6.9082V5.90625C27 4.50879 25.8662 3.375 24.4688 3.375H2.53125C1.13379 3.375 0 4.50879 0 5.90625V6.9082C0 7.29844 0.179297 7.6623 0.485156 7.90488C2.09883 9.16523 2.63145 9.61348 9.6293 14.6918C10.5152 15.3352 12.2766 16.8961 13.5 16.875Z"
                fill="#FFEBE6"
              />
            </svg>
          </Link>
        </Box>
      </Container>
    </Section>
  )
}

export default Hero
