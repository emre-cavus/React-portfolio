import styles from './App.module.scss';
import AnimatedCursor from "react-animated-cursor"
import { Navbar } from './components/Navbar/Navbar';
import { Content } from './components/Content/Content';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Experiance } from './components/Experiance/Experiance';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Design } from './components/Design/Design';
function App() {

  return (
    <div className={styles.App}>
      <AnimatedCursor className={styles.Cursor}
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
      />
      <div className={styles.vl}></div>
      <div className={styles.BlurBox}></div>
      <div className={styles.BlurBox2}></div>
      <div className={styles.box}>
        <img src="./assets/left-menu/skill.png" />
      </div>
      <div className={styles.box2}>
        <img src="./assets/left-menu/puzzle.png" />
      </div>
      <div className={styles.box3}>
        <img src="./assets/left-menu/about.png" />
      </div>
      <div className={styles.box4}>
        <img src="./assets/left-menu/experiance.png" />
      </div>
      <div className={styles.box5}>
        <img src="./assets/social/github.png" />
      </div>
      <div className={styles.box6}>
        <img src="./assets/left-menu/skill.png" />
      </div>
      <div className={styles.box7}>
        <img src="./assets/left-menu/photoshop.png" />
      </div>
      <Navbar />
      <Content />
      <About />
      <Experiance />
      <Projects />
      <Skills />
      <Design />
      <Footer />
    </div>
  );

}

export default App;
