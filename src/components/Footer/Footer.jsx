import React from 'react'
import styles from "./Footer.module.css";
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
*/
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footername}>Emre Cavus</div>
      <div className={styles.copyright}>
        Copyright@2023
      </div>
      <div className={styles.socialmedia}>
        <div className={styles.links}>
          <a href="#">
            <img src="./assets/social/github.png" alt="images-button" />
          </a>
        </div>

        <div className={styles.links}>
          <a href="#">
            <img src="./assets/social/twitter.png" alt="images-button" />
          </a>
        </div>

        <div className={styles.links}>
          <a href="#">
            <img src="./assets/social/instagram.png" alt="images-button" />
          </a>        </div>

        <div className={styles.links}>
          <a href="#">
            <img src="./assets/social/spotify.png" alt="images-button" />
          </a>        </div>

        <div className={styles.links}>
          <a href="#">
            <img src="./assets/social/youtube.png" alt="images-button" />
          </a>        </div>

        <div className={styles.links}>
          <a href="#">
            <img src="./assets/social/whatsapp.png" alt="images-button" />
          </a>        </div>

        <div className={styles.links}>
          <a href="#">
            <img src="./assets/social/link.png" alt="images-button" />
          </a>        </div>
      </div>
    </div>
  );
}
