'use client';
import styles from './Roadmap.module.css';
import { useTranslations } from 'next-intl';

function Roadmap() {
    const t = useTranslations("Roadmap");

    const renderTimelineItem = (type: 'up' | 'down', key: string, isGray: boolean = false) => (
        <div className={styles[`${type}LineItem`]}>
            <div className={`${styles[`vertical${type === 'up' ? 'Up' : 'Down'}Line`]} ${isGray ? styles.gray : ''}`}></div>
            <div className={`${styles.horizontalLine} ${isGray ? styles.gray : ''}`}></div>
            <div className={`${styles.intersectionSquare} ${isGray ? styles.gray : ''}`}>
                {isGray && <img src="/time.svg" alt="time" />}
            </div>
            <div className={`${styles[`${type}LineContent`]} ${isGray ? styles.grayText : ''}`}>
                {t(`items.${key}`)
                    .split('\n')
                    .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );

    return (
        <section className={styles.roadmap}>
            <p className={styles.header}>
                {t('title')}
            </p>
            <div className={styles.timeline}>
                {renderTimelineItem('up', 'employee')}
                {renderTimelineItem('down', 'news')}
                {renderTimelineItem('up', 'booking')}
                {renderTimelineItem('down', 'integration')}
                {renderTimelineItem('up', 'storage', true)}
                {renderTimelineItem('down', 'documents', true)}
                {renderTimelineItem('up', 'monitoring', true)}
                {renderTimelineItem('down', 'salary', true)}
            </div>
        </section>
    );
}

export default Roadmap;