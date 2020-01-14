import Head from 'next/head'
import Layout from '../components/layout'
import React from 'react'

function CodeOfConduct() {
  return (
    <Layout>
      <Head>
        <title>Topluluk Politikası</title>
      </Head>

      <section className="py-128">
        <div className="container">
          <h1>Topluluk Politikası</h1>

          <h3>Teminatımız</h3>

          <p>
            Herkes için açık ve erişilebilir bir ortam sağlamak amacıyla
            topluluğun katkıcıları ve yürütücüleri olarak, katkı vermeyi yaş,
            beden tipi, engel durumu, etnik köken, cinsel kimlik, cinsel
            yönelim, cinsiyet ifadesi, tecrübe, milliyet, dış görünüş, ırk ve
            din ayrımı gözetmeden keyifli ve güvenli bir tecrübe haline
            getirmeyi taahhüt ederiz.
          </p>

          <h3>Kaidelerimiz</h3>

          <p>
            Olumlu bir ortam yaratmaya yardımcı davranışlara aşağıdakiler örnek
            gösterilebilir:
          </p>

          <ul>
            <li>Hoşgörülü ve kapsayıcı bir dil kullanmak</li>
            <li>Hoşgörülü ve kapsayıcı bir dil kullanmak</li>
            <li>Farklı görüşlere ve deneyimlere karşı saygılı olmak</li>
            <li>Yapıcı eleştirileri hoş karşılamak</li>
            <li>Topluluk için en iyisinin ne olduğuna odaklanmak</li>
            <li>Topluluğun diğer üyelerine empatiyle yaklaşmak</li>
          </ul>

          <p>Kabul edilemez davranışlara aşağıdakiler örnek gösterilebilir;</p>

          <ul>
            <li>
              Cinsiyetçi dil veya görsellerin kullanımı ve diğer katkıcılara
              istenmeyen romantik ilgi göstermek veya romantik tekliflerde
              bulunmak
            </li>
            <li>
              Trollemek, hakaret/aşağılama içeren yorumlar ve birinin şahsına
              veya siyasi görüşlerine saldırmak
            </li>
            <li>Birini alenen veya gizlice taciz etmek</li>
            <li>
              Başka insanların kişisel bilgilerini, mesela ev adreslerini,
              rızaları olmadan yayınlamak
            </li>
            <li>
              Profesyonel bir ortamda uygunsuz kaçabilecek davranışlarda
              bulunmak
            </li>
          </ul>

          <h3>Yetki ve Sorumluluklarımız</h3>

          <p>
            Topluluk yöneticileri, üyelerden bekledikleri davranış biçimini
            açıklamakla ve kabul edilemez davranışlara karşı tekrarlanmamaları
            için adil ve uygun bir şekilde gerekli düzenlemeleri yapmakla
            sorumludur. Proje yürütücüleri bu topluluğa uymayan yorumları,
            beyanları, linkleri veya diğer katkıları silme, değiştirme veya
            reddetme yetkisine sahiptir. Buna davranışları uygunsuz, kırıcı,
            saldırgan veya zararlı bulunan katkıcıları geçici veya kalıcı olarak
            topluluktan uzaklaştırmak da dahildir.
          </p>

          <h3>Kapsam</h3>

          <p>
            Bu kanal topluluğa ait alanlarda ve birinin projeyi veya topluluğunu
            kamusal bir alanda temsil etmesi halinde geçerlidir. Topluluğu
            temsil etmek, topluluğun sosyal medya hesaplarını yönetmek veya bir
            etkinlikte topluluk adına görev almak şeklinde olabilir. Topluluğun
            temsilini topluluk yöneticileri tanımlayabilir veya
            detaylandırabilir.
          </p>

          <h3>İcra</h3>

          <p>
            Kabul edilemeyecek herhangi bir davranış içeren bir olay yaşanması
            durumunda topluluk ekibiyle eposta adresindeki yöneticiler ile
            direkt iletişim kurulabilir. Bu kişilere iletilen ve uygun görülen
            şikayetlerin tümü dikkate alınacak, araştırılacak ve duruma uygun
            bir şekilde yanıtlanacaktır. Topluluk yöneticileri olayı haber veren
            kişinin kimliğini gizli tutmakla yükümlüdür. Sözleşmenin icrasına
            dair yönergeler ayrıca yayınlanabilir.
          </p>

          <p>
            Topluluk yöneticileri bu sözleşmeyi iyi niyetle uygulamayan topluluk
            yöneticilerine karşı geçici veya kalıcı yaptırımlar uygulayabilir.
          </p>

          <h3>Kaynak</h3>

          <p>
            Bu Topluluk Sözleşmesi, İstanbul PHP Topluluğu'nun v0.0.1 sürümünde
            ufak değişiklikler yapılarak kullanılmıştır. İstanbul PHP Topluluğu,
            Contributor Covenant 1.4 sürümünden çevirmiştir, aslına bu adresten
            erişebilirsiniz:{' '}
            <a
              href="http://contributor-covenant.org/version/1/4"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://contributor-covenant.org/version/1/4
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default CodeOfConduct
