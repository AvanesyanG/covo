'use client';

import styles from "./Hero.module.css";
import TestButton from "../Button/TestButton";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Hero");
  
  // Scroll handler
  const handleScrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroMain}>
        <p className={styles.titleText}>{t('title')}</p>
        <p className={styles.mobileText}>{t('description')}</p>
        {/* Pass scroll handler to button */}
        <TestButton onClick={handleScrollToForm} />
      </div>
      <div className={styles.heroText}>
        <p>{t('description')}</p>
      </div>
    </section>
  );
}

export default Hero;