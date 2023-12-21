import React from 'react'
import styles from "./Experiance.module.scss"

export const Experiance = () => {
  return (
    <section id='experience'>
      <div>
        <hr />
        <div className={styles.head}>
          <h1>Experiance</h1>
        </div>
        <div class={styles.bg__gradient}></div>

        <div class={styles.card}>
          <h1>Borsa istanbul</h1>
          <p>Eğitimimi tamamladım ve sınavlardan yüksek notlar ile geçtim.</p>
        </div>

        <div class={styles.card}>
          <h1>Envepo Yazılım</h1>
          <p>Stajımı tamamladım pek çok yeni teknoloji ile işler yürüttüm.</p>
        </div>

        <div class={styles.card}>
          <h1>Gazi Üniversitesi Ankara</h1>
          <p>Yazılım bölümünü okudum ve yüksek başarı derecesi ile bölümümü bitirdim.</p>
        </div>
      </div>
    </section>
  )
}
