import styles from "./page.module.css";
import "./globals.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero/>
      <Advantages/>
      <Services/>
    </main>
  );
}
