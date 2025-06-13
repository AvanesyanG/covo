"use client";

import styles from "./Advantages.module.css"
import { useTranslations } from "next-intl";

function Advantages () {
    const t = useTranslations("Advantages");
    
    return (
        <section className={styles.advantages}>
            <p className={styles.header}>{t('title')}</p>
            <div>
                <img src="/Icon1.svg" alt="" />
                <p>{t('items.design')}</p>
            </div>
            <div>
                <img src="/Icon2.svg" alt="" />
                <p>{t('items.customization')}</p>
            </div>
            <div>
                <img src="/Icon3.svg" alt="" />
                <p>{t('items.integration')}</p>
            </div>
            <div>
                <img src="/Icon4.svg" alt="" />
                <p>{t('items.communication')}</p>
            </div>
            <div>
                <img src="/Icon5.svg" alt="" />
                <p>{t('items.monitoring')}</p>
            </div>
        </section>
    )
}
export default Advantages