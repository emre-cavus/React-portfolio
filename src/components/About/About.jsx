import React from 'react'
import styles from './About.module.scss';
export const About = () => {
  return (
    <section className='About'>
      <div class="bg__gradient"></div>

      <div id="about">
        <hr />
        <div className={styles.About}>
          <h1>Emre "JesPster" Cavus</h1>
          <p>Merhaba, Ben emre full stack developer, bilgisayar bilimci ve dijital tasarımcıyım aslında pek çok alanda uğraışım var fakat asıl mesleğim yazılımcılık yönetim ekibi gibi pek çok rolde göre vyapmış bulunmaktayım ve daha iyi pozisyonlarda işler yapacağımın garantisini verebilirim şu an pek çok konu ve işe hakimiyetim var yüksek performanslı takımlarda çalışmak ve kaptanı olmak gibi pek çok iş yapabilirim.</p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorum rem debitis praesentium qui placeat, asperiores esse provident explicabo voluptatibus in odit nostrum officia! Culpa dolorem ut veritatis aut repellendus!</p>
        </div>
      </div>
      <div className={styles.About}>
        <h1>Çalışma geçmişim</h1>
        <hr />
        <li><p>Mesleki Eğitim (Borsa istanbul)</p></li>
        <li><p>Envepo Yazılım (Staj)</p></li>
        <li><p>Gazi Üniversitesi (Ankara) Yazılım</p></li>
        <li><p>Atom Network Yazılım</p></li>
      </div>
      <div className={styles.About}>
        <h1>Çalışma Mantığım</h1>
        <hr />
        <li><p>Hedeflerini Belirle</p></li>
        <li><p>Başaracağına bütün kalbinle inan,</p></li>
        <li><p>Çalışma sistemini gözden geçir</p></li>
        <li><p> Haftalık program hazırla</p></li>
        <li><p>Programlarını kararlı bir şekilde uygula.</p></li>
        <li><p>Programına sadık kal.</p></li>
      </div>
    </section >
  )
}
