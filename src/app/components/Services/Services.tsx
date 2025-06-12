import styles from "./Services.module.css"

function Services () {
    return (
        <section className={styles.services}>
            <p className={styles.header}>функционал</p>
            <div className={styles.sectionTitle}>
                <p>01</p>
                <p>личная страница сотрудника</p>
            </div>
            <div className={styles.grid}>
                <div className={`${styles.serviceItem} ${styles.alignLeft}`}>
                    <img src="/img1.svg" alt="img1" />
                    <p className={styles.itemTitle}>профиль</p>
                    <p className={styles.itemDesc}>детальная информация, включающая стаж, личные увлечения и профессиональные навыки. это создает полное представление о сотруднике в компании</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignRight}`}>
                    <img src="/img2.svg" alt="img2" />
                    <p className={styles.itemTitle}>календарь сотрудника</p>
                    <p className={styles.itemDesc}>удобный инструмент для просмотра занятости и быстрого бронирования встреч в пару кликов</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignLeft}`}>
                    <img src="/img3.svg" alt="img3" />
                    <p className={styles.itemTitle}>блок с наградами и благодарностями</p>
                    <p className={styles.itemDesc}>легкий способ выразить признательность. сотрудники могут видеть свои достижения и получать благодарности от коллег</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignRight}`}>
                    <img src="/img4.svg" alt="img4" />
                    <p className={styles.itemTitle}>интеграция с кадровой системой</p>
                    <p className={styles.itemDesc}>автоматическое обновление данных, включая изменения должности, контактов и рабочих достижений</p>
                </div>
            </div>
            <div className={styles.sectionTitle}>
                <p>02</p>
                <p>лента новостей сообщества мероприятия</p>
            </div>
            <div className={styles.grid}>
                <div className={`${styles.serviceItem} ${styles.alignLeft}`}>
                    <img src="/img1.svg" alt="img1" />
                    <p className={styles.itemTitle}>профиль</p>
                    <p className={styles.itemDesc}>детальная информация, включающая стаж, личные увлечения и профессиональные навыки. это создает полное представление о сотруднике в компании</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignRight}`}>
                    <img src="/img2.svg" alt="img2" />
                    <p className={styles.itemTitle}>календарь сотрудника</p>
                    <p className={styles.itemDesc}>удобный инструмент для просмотра занятости и быстрого бронирования встреч в пару кликов</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignLeft}`}>
                    <img src="/img3.svg" alt="img3" />
                    <p className={styles.itemTitle}>блок с наградами и благодарностями</p>
                    <p className={styles.itemDesc}>легкий способ выразить признательность. сотрудники могут видеть свои достижения и получать благодарности от коллег</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignRight}`}>
                    <img src="/img4.svg" alt="img4" />
                    <p className={styles.itemTitle}>интеграция с кадровой системой</p>
                    <p className={styles.itemDesc}>автоматическое обновление данных, включая изменения должности, контактов и рабочих достижений</p>
                </div>
            </div>
            <div className={styles.sectionTitle}>
                <p>03</p>
                <p>бронирование</p>
            </div>
            <div className={styles.grid}>
                <div className={`${styles.serviceItem} ${styles.alignLeft}`}>
                    <img src="/img1.svg" alt="img1" />
                    <p className={styles.itemTitle}>профиль</p>
                    <p className={styles.itemDesc}>детальная информация, включающая стаж, личные увлечения и профессиональные навыки. это создает полное представление о сотруднике в компании</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignRight}`}>
                    <img src="/img2.svg" alt="img2" />
                    <p className={styles.itemTitle}>календарь сотрудника</p>
                    <p className={styles.itemDesc}>удобный инструмент для просмотра занятости и быстрого бронирования встреч в пару кликов</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignLeft}`}>
                    <img src="/img3.svg" alt="img3" />
                    <p className={styles.itemTitle}>блок с наградами и благодарностями</p>
                    <p className={styles.itemDesc}>легкий способ выразить признательность. сотрудники могут видеть свои достижения и получать благодарности от коллег</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.alignRight}`}>
                    <img src="/img4.svg" alt="img4" />
                    <p className={styles.itemTitle}>интеграция с кадровой системой</p>
                    <p className={styles.itemDesc}>автоматическое обновление данных, включая изменения должности, контактов и рабочих достижений</p>
                </div>
            </div>
        </section>
    )
}
export default Services