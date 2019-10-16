import React from 'react'
import { Title, SubTitle, Text, Section } from '../components/Styles'

function Hero() {
  return (
    <Section>
      <Title color="light">
        Yepyeni bir tasarım topluluğu <a href="#event">etkinliklere</a>{' '}
        başlıyor.
      </Title>

      <SubTitle as="p" mt={4}>
        Kanvas, dijital tasarımı sadece estetik olarak değil bir amaç
        doğrultusunda yapılan hareketler bütünü olarak gören herkesi bir araya
        getirmeyi hedefleyen bir topluluktur.
      </SubTitle>

      <SubTitle color="light" mt={4}>
        Tasarımcı değil misin?
      </SubTitle>

      <Text mt={2}>
        Merak duyman yeterli. Hedeflerimizden biri de topluma yeni tasarımcılar
        kazandırmak. Planladığımız etkinlikler arasında sana uygun etkinlikler
        de olacak.
      </Text>

      <SubTitle color="light" mt={4}>
        Nasıl Katılabilirim?
      </SubTitle>

      <Text mt={2}>
        Bizi Twitter üzerinden takip edebilir, Kommunity’deki sayfamıza
        kaydolabilirsin. Tüm gelişmeler ve bazı özel buluşmalardan ilk haberdar
        olmak için ise mail listemize kayıt olman gerek.
      </Text>
    </Section>
  )
}

export default Hero
