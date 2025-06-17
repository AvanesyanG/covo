'use client';

import { useEffect, useState } from 'react';
import styles from './cookies.module.css';
import Header from '../../components/Header/Header';
import { useTranslations } from 'next-intl';
import { getPolicy } from '../../lib/supabase';
import { useLocale } from 'next-intl';

export default function Cookies() {
    const t = useTranslations('Cookies');
    const [policy, setPolicy] = useState<string | null>(null);
    const locale = useLocale();

    // Ensure locale is 'en' or 'ru'
    const typedLocale = (locale === 'en' || locale === 'ru' ? locale : 'en') as 'en' | 'ru';

    useEffect(() => {
        const fetchPolicy = async () => {
            const latestPolicy = await getPolicy('cookies', typedLocale);
            setPolicy(latestPolicy);
        };

        fetchPolicy();
    }, [typedLocale]);

    return (
        <div className={styles.cookies}>
            <Header />
            <main className={styles.main}>
                <h1>{t('title')}</h1>
                <div className={styles.content}>
                    <p className={styles.contentText}>{policy}</p>
                    <div className={styles.contactButtons}>
                        <a 
                            href="mailto:example@user.com?subject=Cookies Policy Inquiry"
                            className={styles.contactButton}
                        >
                            example@user.com
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