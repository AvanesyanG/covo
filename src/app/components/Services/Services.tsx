"use client";

import styles from "./Services.module.css"
import { useTranslations } from "next-intl";

function Services () {
    const t = useTranslations("Services");
    
    const renderSection = (sectionKey: 'employee' | 'news' | 'booking') => (
        <>
            <div className={styles.sectionTitle}>
                <p>{t(`sections.${sectionKey}.number`)}</p>
                <p>{t(`sections.${sectionKey}.title`)}</p>
            </div>
            <div className={styles.grid}>
                <div className={`${styles.serviceItem} ${styles.alignLeft}`}>
                    <img src="/img1.svg" alt="img1" />
                    <p className={styles.itemTitle}>{t(`sections.${sectionKey}.items.profile.title`)}</p>
                    <p className={styles.itemDesc}>{t(`sections.${sectionKey}.items.profile.description`)}</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignRight}`}>
                    <img src="/img2.svg" alt="img2" />
                    <p className={styles.itemTitle}>{t(`sections.${sectionKey}.items.calendar.title`)}</p>
                    <p className={styles.itemDesc}>{t(`sections.${sectionKey}.items.calendar.description`)}</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignLeft}`}>
                    <img src="/img3.svg" alt="img3" />
                    <p className={styles.itemTitle}>{t(`sections.${sectionKey}.items.awards.title`)}</p>
                    <p className={styles.itemDesc}>{t(`sections.${sectionKey}.items.awards.description`)}</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignRight}`}>
                    <img src="/img4.svg" alt="img4" />
                    <p className={styles.itemTitle}>{t(`sections.${sectionKey}.items.integration.title`)}</p>
                    <p className={styles.itemDesc}>{t(`sections.${sectionKey}.items.integration.description`)}</p>
                </div>
            </div>
        </>
    );

    return (
        <section className={styles.services}>
            <p className={styles.header}>{t('title')}</p>
            {renderSection('employee')}
            {renderSection('news')}
            {renderSection('booking')}
        </section>
    )
}
export default Services