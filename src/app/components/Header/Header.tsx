"use client";

import styles from "./Header.module.css";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale: string) => {
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    // Navigate to the same path with the new locale
    router.replace(`/${newLocale}${pathWithoutLocale}`);
  };

  const handleLogoClick = () => {
    // Simply navigate to the root with current locale
    router.push(`/${currentLocale}`);
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <img 
            src="/logo-vs.svg" 
            alt="logo" 
            className={styles.logo} 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={styles.headerButtons}>
          <button 
            className={`${styles.headerButton} ${currentLocale === 'en' ? styles.active : ''}`}
            onClick={() => switchLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`${styles.headerButton} ${currentLocale === 'ru' ? styles.active : ''}`}
            onClick={() => switchLanguage('ru')}
          >
            RU
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;