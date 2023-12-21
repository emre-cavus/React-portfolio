import React from 'react'
import styles from "./Skills.module.scss";
export const Skills = () => {
  return (
    <section>
      <hr />
      <div className={styles.head} id='skills'>
        <h1> Skills</h1>
      </div>
      <div >
        <div className={styles.skillBox}>
          <img src="../../assets/code/React.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/laravel.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/nodejs.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/c-sharp.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/sass.svg" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/css.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/html.svg.png" />
        </div>
        <br />
        <div className={styles.skillBox}>
          <img src="../../assets/code/java.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/javascript.png" />
        </div>

        <div className={styles.skillBox}>
          <img src="../../assets/code/typescript.svg.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/vitejs.svg.png" />
        </div>

        <div className={styles.skillBox}>
          <img src="../../assets/code/angular.svg.png" />
        </div>

        <div className={styles.skillBox}>
          <img src="../../assets/code/python.png" />
        </div>


        <div className={styles.skillBox}>
          <img src="../../assets/code/ruby.png" />
        </div>
        <br />
        <div className={styles.skillBox}>
          <img src="../../assets/code/vuejs.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/premierpro.svg.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/photoshop.svg.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/illustrator.svg.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/aftereffect.svg.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/figma.png" />
        </div>
        <div className={styles.skillBox}>
          <img src="../../assets/code/php.svg" />
        </div>
      </div>
    </section>
  )
}
