import { useTranslations } from 'next-intl';
import styles from './TestButton.module.css';

interface TestButtonProps {
  onClick?: () => void; // Add onClick prop
}

function TestButton({ onClick }: TestButtonProps) {
  const t = useTranslations("Hero");
  return (
    <button 
      className={styles.testButton} 
      onClick={onClick} // Pass onClick to button
    >
      {t('buttonText')}
    </button>
  );
}

export default TestButton;