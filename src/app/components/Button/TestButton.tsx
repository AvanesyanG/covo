import styles from './TestButton.module.css';

function TestButton() {
    return (
        <button className={styles.testButton}>
            потестим!
        </button>
    );
}

export default TestButton;