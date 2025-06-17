import styles from "./page.module.css";
import "../globals.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Advantages from "../components/Advantages/Advantages";
import Services from "../components/Services/Services"
import Roadmap from '../components/Roadmap/Roadmap';
import Team from '../components/Team/Team';
import Form from '../components/Form/Form';

export default function Home() {
  return (
    <main style={{position: 'relative'}} className={styles.main}>
      <Header/>
      <Hero/>
      <Advantages/>
      <Services/>
      <Roadmap />
      <Team />
      <section style={{width: '100%', display: 'flex', justifyContent: 'center'}} id="contact-form">
        <Form />
      </section>
{/* <img
    src="/Landing.png"
    alt="Design Overlay"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 'auto',
      opacity: 0.5,
      pointerEvents: 'none',
      zIndex: 10,
    }}
  />    */}
  </main>
  );
}
