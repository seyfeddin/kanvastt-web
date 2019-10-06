import React from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import TwitterLink from "../components/TwitterLink";
import RegisterForm from "../components/RegisterForm";

const Index = () => (
  <Layout>
    <Logo />
    <div class="container">
      <div class="hello">
        <p>
          Merhaba,
          <br />
          Tasarımı sadece estetik olarak görmeyen, tasarımın bir amaç
          doğrultusunda yapılan hareketler bütünü olduğunu bilen herkesi bir
          araya getirmeyi ve topluma yeni tasarımcılar kazandırmayı hedefleyen
          bir topluluğuz.
        </p>
      </div>
      <div class="what-we-do">
        <h2>Ne Yapar?</h2>
        <p>
          Tasarımı sadece estetik olarak görmeyen, tasarımın bir amaç
          doğrultusunda yapılan hareketler bütünü olduğunu bilen herkesi bir
          araya getirmeyi ve topluma yeni tasarımcılar kazandırmayı hedefleyen
          bir topluluktur.
        </p>
      </div>
      <div class="how-to-join">
        <h2>Nasıl Katılırım?</h2>
        <p>
          Tasarımı sadece estetik olarak görmeyen, tasarımın bir amaç
          doğrultusunda yapılan hareketler bütünü olduğunu bilen herkesi bir
          araya getirmeyi ve topluma yeni tasarımcılar kazandırmayı hedefleyen
          bir topluluktur.
        </p>
      </div>
      <TwitterLink />
      <RegisterForm />
    </div>
  </Layout>
);

export default Index;
