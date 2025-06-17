'use client';

import { useEffect, useState } from 'react';
import styles from './privacy.module.css';
import Header from '../../components/Header/Header';
import { useTranslations } from 'next-intl';
import { getPolicy } from '../../lib/supabase';
import { useLocale } from 'next-intl';

export default function Privacy() {
    const t = useTranslations('Privacy');
    const [policy, setPolicy] = useState<string | null>(null);
    const locale = useLocale();

    useEffect(() => {
        const fetchPolicy = async () => {
            // Ensure locale is 'en' or 'ru'
            const typedLocale = (locale === 'en' || locale === 'ru' ? locale : 'en') as 'en' | 'ru';
            const latestPolicy = await getPolicy('privacy', typedLocale);
            setPolicy(latestPolicy);
        };
        fetchPolicy();
    }, [locale]);

    return (
        <div className={styles.privacy}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{t('title')}</h1>
                <div className={styles.content}>
                <p className={styles.contentText}>{policy}</p>
                <div className={styles.contactButtons}>
                        <a 
                            href="mailto:example@user.com?subject=Privacy Policy Inquiry"
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