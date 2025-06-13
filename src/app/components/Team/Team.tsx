'use client';

import styles from './Team.module.css';
import { useTranslations } from 'next-intl';

function Team() {
    const t = useTranslations("Team");

    const renderTeamMember = (memberKey: 'salavat' | 'mark', isRight: boolean = false) => (
        <div className={`${styles.teamMemberContent} ${isRight ? styles.teamMemberRight : ''}`}>
            <p className={styles.description}>
                {t(`members.${memberKey}.description`)}
            </p>
            <div className={styles.teamMember}>
                <img src="/teamIcon.png" alt="" />
                <div>
                    <p className={styles.name}>{t(`members.${memberKey}.name`)}</p>
                    <p className={styles.position}>{t(`members.${memberKey}.position`)}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className={styles.team}>
            <p className={styles.header}>{t('title')}</p>
            <div className={styles.teamContent}>
                {renderTeamMember('salavat')}
                {renderTeamMember('mark', true)}
            </div>
        </section>
    );
}

export default Team;