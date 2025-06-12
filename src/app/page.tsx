import styles from "./page.module.css";
import "./globals.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services"
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import Form from './components/Form/Form';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero/>
      <Advantages/>
      <Services/>
      <Roadmap />
      <Team />
      <Form />
    </main>
  );
}
