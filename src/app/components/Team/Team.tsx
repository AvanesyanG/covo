'use client';

import styles from './Team.module.css';

function Team() {
    return (
        <section className={styles.team}>
            <p className={styles.header}>команда</p>
            <div className={styles.teamContent}>
                <div className={styles.teamMemberContent}>
                    <p className={styles.description}>В пособии подробно описываются методические приёмы, лежащие в основе анализа философского текста. Эти приёмы не только описываются, но и подробно иллюстрируются на большом количестве примеров. Даётся пошаговый анализ каждого</p>
                    <div className={styles.teamMember}>
                            <img src="/teamIcon.png" alt="" />
                            <div>
                                <p className={styles.name}>Салават Деникаев </p>
                                <p className={styles.position}>CPO</p>
                            </div>
                            
                    </div>
                </div>
                <div className={`${styles.teamMemberContent} ${styles.teamMemberRight}`}>
                    <p className={styles.description}>Даётся пошаговый анализ каждого приёма. В пособии подробно описываются методические приёмы, лежащие в основе анализа философского текста. Эти приёмы не только описываются, но и подробно иллюстрируются на большом</p>
                    <div className={styles.teamMember}>
                            <img src="/teamIcon.png" alt="" />
                            <div>
                                <p>Марк Тамм</p>
                            <p>CTO</p>
                            </div>
                            
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Team;