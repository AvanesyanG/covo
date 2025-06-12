'use client';
import styles from './Roadmap.module.css';

function Roadmap() {
    return (
        <section className={styles.roadmap}>
            <p className={styles.header}>
                роадмап
            </p>
            <div className={styles.timeline}>
                <div className={styles.upLineItem}>
                    <div className={styles.verticalUpLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.intersectionSquare}></div>
                    <div className={styles.upLineContent}>
                        <p>личный кабинет сотрудников, профиль</p>
                    </div>
                </div>
                <div className={styles.downLineItem}>
                    <div className={styles.verticalDownLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.intersectionSquare}></div>
                    <div className={styles.downLineContent}>
                        <p>лента новостей и сообществ</p>
                    </div>
                </div>
                <div className={styles.upLineItem}>
                    <div className={styles.verticalUpLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.intersectionSquare}></div>
                    <div className={styles.upLineContent}>
                        <p>бронирование</p>
                    </div>
                </div>
                <div className={styles.downLineItem}>
                    <div className={styles.verticalDownLine}></div>
                    <div className={styles.horizontalLine}></div>
                    < div className={styles.intersectionSquare}></div>
                    <div className={styles.downLineContent}>
                        <p>интеграция с почтой и календарем</p>
                    </div>
                </div>
                <div className={styles.upLineItem}>
                    <div className={`${styles.verticalUpLine} ${styles.gray}`}></div>
                    <div className={`${styles.horizontalLine} ${styles.gray}`}></div>
                    <div className={`${styles.intersectionSquare} ${styles.gray}`}>
                    <img src="/time.svg" alt="time" />
                    </div>
                    <div className={`${styles.upLineContent} ${styles.grayText}`}>
                        <p>облачное хранилище для файлов</p>
                    </div>

                </div>
                <div className={styles.downLineItem}>
                    <div className={`${styles.verticalDownLine} ${styles.gray}`}></div>
                    <div className={`${styles.horizontalLine} ${styles.gray}`}></div>
                    <div className={`${styles.intersectionSquare} ${styles.gray}`}>
                    <img src="/time.svg" alt="time" />
                    </div>
                    <div className={`${styles.downLineContent} ${styles.grayText}`}>
                        <p>запросы справок и документов</p>
                    </div>
                </div>
                <div className={styles.upLineItem}>
                    <div className={`${styles.verticalUpLine} ${styles.gray}`}></div>
                    <div className={`${styles.horizontalLine} ${styles.gray}`}></div>
                    <div className={`${styles.intersectionSquare} ${styles.gray}`}>
                    <img src="/time.svg" alt="time" />
                    </div>
                    <div className={`${styles.upLineContent} ${styles.grayText}`}>
                        <p>мониторинг настроений сотрудников через ИИ</p>
                    </div>

                </div>
                <div className={styles.downLineItem}>
                    <div className={`${styles.verticalDownLine} ${styles.gray}`}></div>
                    <div className={`${styles.horizontalLine} ${styles.gray}`}></div>
                    <div className={`${styles.intersectionSquare} ${styles.gray}`}>
                        <img src="/time.svg" alt="time" />
                    </div>
                    <div className={`${styles.downLineContent} ${styles.grayText}`}>
                        <p>просмотр зарплатных квитков</p>
                    </div>
                </div>

            </div>

        </section>
    )
} 
export default Roadmap;