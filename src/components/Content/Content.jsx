import React, { useState } from "react";
import styles from "./Content.module.scss";

export const Content = () => {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.profile}>
          <img src="./assets/profile/pp.png" />
        </div>
        <div className={styles.name}>
          <h1> Hi, I'm 👋 Emre</h1>
          <p className={styles.paragraph}>Software engineer - Computer Scientist - Digiral Designer</p>
          <a href="mailto:cavus.emre5563@gmail.com">Mail links</a>
          <a href="https://github.com/emre-cavus">Github Profile</a>
          <a href="https://stackoverflow.com/users/18870780/jespster">Stack Overflow Profile</a>
        </div>

        <div className={styles.name2}>
          <h1> Skills</h1>
          <div className={styles.codeSkills}>
            <div className={styles.coding}>
              <h1>
                <img src="./assets/code/React.png" alt="image-button" />
                React</h1>
            </div>
            <div className={styles.coding}>
              <h1>
                <img src="./assets/code/laravel.png" alt="image-button" />
                Laravel</h1>
            </div>
            <div className={styles.coding}>
              <h1>
                <img src="./assets/code/c-sharp.png" alt="image-button" />
                C#</h1>
            </div>
            <div className={styles.coding}>
              <h1>
                <img src="./assets/code/nodejs.png" alt="image-button" />
                Node.js</h1>
            </div>
            <div className={styles.coding}>
              <h1>
                <img src="./assets/code/sass.svg" alt="image-button" />
                Sass</h1>
            </div>
          </div>
        </div>

        <div className={styles.name3}>
          <h1>Hobbies</h1>
          <div className={styles.codeSkills}>
            <div className={styles.coding}>
              <h1>
                <img class="change-my-color" src="./assets/hobbies/popcorn.svg" alt="image-button" />
                Film izlemek</h1>
            </div>
            <div className={styles.coding}>
              <h1>
                <img class="change-my-color" src="./assets/hobbies/books.svg" alt="image-button" />
                Kitap okumak</h1>
            </div>
            <div className={styles.coding}>
              <h1>
                <img class="change-my-color" src="./assets/hobbies/camera.svg" alt="image-button" />
                Çekim yapmak</h1>
            </div>
            <div className={styles.coding}>
              <h1>
                <img class="change-my-color" src="./assets/hobbies/science.svg" alt="image-button" />
                Bilim ile ilgilenmek</h1>
            </div>
            <div className={styles.coding}>
              <h1>
                <img class="change-my-color" src="./assets/hobbies/world.svg" alt="image-button" />
                Ülke Gezmek</h1>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
