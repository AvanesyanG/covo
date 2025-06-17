'use client';

import { useEffect, useState } from 'react';
import styles from './cookies.module.css';
import Header from '../../components/Header/Header';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Privacy() {
    const t = useTranslations('Privacy');
    const [policy, setPolicy] = useState<string | null>(null);
    const locale = useLocale();
    console.log(locale)

    useEffect(() => {
        fetch(`/cookie-${locale}.html`)
            .then(response => response.text())
            .then(html => setPolicy(html))
            .catch(err => {
                console.error('Failed to load policy.html:', err);
                setPolicy('<p>Unable to load policy.</p>');
            });
    }, []);

    return (
        <div className={styles.privacy}>
            <Header />
            <main className={styles.main}>
                <div
                    className={styles.contentText}
                    dangerouslySetInnerHTML={{ __html: policy || '' }}
                />
            </main>
        </div>
    );
}
