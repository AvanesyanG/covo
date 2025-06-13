'use client';

import styles from './privacy.module.css';
import Header from '../../components/Header/Header';
import { useTranslations } from 'next-intl';

export default function Privacy() {
    const t = useTranslations('Privacy');

    return (
        <div className={styles.privacy}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{t('title')}</h1>
                <div>
                    <p className={styles.contentText}>{t('content')}</p>
                    <div className={styles.contactButtons}>
                        <a 
                            href="mailto:example@user.com?subject=Privacy Policy Inquiry"
                            className={styles.contactButton}
                        >
                            hello@covo.so
                        </a>
                        <a 
                            href="tel:+362423324234"
                            className={styles.contactButton}
                        >
                            +362423324234
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}