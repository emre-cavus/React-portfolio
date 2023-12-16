import React from 'react';
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div class="container">
      <p className={styles.paragraph} aria-label="Geist Mono">
        <span aria-hidden="true">E</span>
        <span aria-hidden="true">m</span>
        <span aria-hidden="true">r</span>
        <span aria-hidden="true">e</span>
        <span aria-hidden="true"> </span>
        <span aria-hidden="true">C</span>
        <span aria-hidden="true">a</span>
        <span aria-hidden="true">v</span>
        <span aria-hidden="true">u</span>
        <span aria-hidden="true">s</span>
      </p>
    </div>
  )
}

const spans = document.querySelectorAll('p span');

const numLetters = spans.length;

spans.forEach(function (span, i) {
  const mappedIndex = i - (numLetters / 2)
  span.style.animationDelay = (mappedIndex * 0.25) + 's';
});
