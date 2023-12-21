import React from 'react'
import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section id='projects'>
      <hr />
      <div className={styles.head}>
        <h1>Projects</h1>
      </div>
      <div className={styles.box}>
        <img src="../../assets/profile/JESPSTERS24DAT00.png" alt="" />
        <h1>Github Project links</h1>
        <a href='https://github.com/emre-cavus'>click and go to the link</a>
      </div>
    </section>
  )
}
