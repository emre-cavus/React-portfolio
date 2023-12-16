import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';



function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );

}

export default App;
