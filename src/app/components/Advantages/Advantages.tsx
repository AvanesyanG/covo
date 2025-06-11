import styles from "./Advantages.module.css"

function Advantages () {
    return (
        <section className={styles.advantages}>
            <p className={styles.header}>преимущества</p>
            <div>
                <img src="/Icon1.svg" alt="" />
                <p>современный дизайн и удобный интерфейс</p>
            </div>
            <div>
                <img src="/Icon2.svg" alt="" />
                <p>гибкая кастомизация под нужды вашей компании</p>
            </div>
            <div>
                <img src="/Icon3.svg" alt="" />
                <p>интеграция с сервисами компании</p>
            </div>
            <div>
                <img src="/Icon4.svg" alt="" />
                <p>улучшение коммуникации между сотрудниками</p>
            </div>
            <div>
                <img src="/Icon5.svg" alt="" />
                <p>мониторинг вовлеченности и настроений сотрудников через ИИ</p>
            </div>

        </section>
    )
}
export default Advantages