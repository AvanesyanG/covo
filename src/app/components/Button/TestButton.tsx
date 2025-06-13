import { useTranslations } from 'next-intl';
import styles from './TestButton.module.css';

function TestButton() {
    const t = useTranslations("Hero");
    return (
        <button className={styles.testButton}>
            {t('buttonText')}
        </button>
    );
}

export default TestButton;