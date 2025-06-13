'use client';

import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

function Form() {
    const pathname = usePathname();
    const locale = pathname.split('/')[1];
    const t = useTranslations("Form");
    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        consent: false
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [readyForAnother, setReadyForAnother] = useState(false);

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^\+?[\d\s-]{10,}$/.test(phone);

    useEffect(() => {
        const isNameValid = formData.name.trim().length > 0;
        const isCompanyValid = formData.company.trim().length > 0;
        const isEmailValid = isValidEmail(formData.email);
        const isPhoneValid = isValidPhone(formData.phone);
        const isConsentValid = formData.consent;

        setIsFormValid(
            isNameValid && 
            isCompanyValid && 
            isEmailValid && 
            isPhoneValid && 
            isConsentValid
        );
    }, [formData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    // NEW: Submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            if (result.success) {
                setStatus('success');
                setReadyForAnother(true);
            } else {
                setStatus('error');
                setErrorMsg(result.error || 'Unknown error');
            }
        } catch (err: any) {
            setStatus('error');
            setErrorMsg(err.message || 'Unknown error');
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
            consent: false
        });
        setStatus('idle');
        setReadyForAnother(false);
    };

    return (
        <section className={styles.form}>
            <div>
                <h2 className={styles.header}>{t('title')}</h2>
                <p className={styles.note}>{t('note')}</p>
            </div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.leftColumn}>
                    <div className={styles.inputGroup}>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder={t('fields.name')}
                            className={`${styles.input} ${formData.name ? styles.filled : ''}`}
                            value={formData.name}
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input 
                            type="text" 
                            id="company"
                            name="company"
                            placeholder={t('fields.company')}
                            className={`${styles.input} ${formData.company ? styles.filled : ''}`}
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder={t('fields.email')}
                            className={`${styles.input} ${formData.email ? styles.filled : ''}`}
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input 
                            type="tel" 
                            id="phone"
                            name="phone"
                            placeholder={t('fields.phone')}
                            className={`${styles.input} ${formData.phone ? styles.filled : ''}`}
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.inputGroup}>
                        <textarea 
                            id="message"
                            name="message"
                            placeholder={t('fields.message')}
                            className={styles.textarea}
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input 
                            type="checkbox" 
                            id="consent" 
                            name="consent"
                            className={styles.checkbox}
                            required
                            checked={formData.consent}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="consent" className={styles.checkboxLabel}>
                            {t('consent')}
                        </label>
                    </div>
                    {readyForAnother ? (
                        <button
                            type="button"
                            className={`${styles.submitButton} ${styles.submitButtonReady}`}
                            onClick={handleReset}
                        >
                            Готово, ещё?
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className={`${styles.submitButton} ${isFormValid ? styles.submitButtonActive : ''}`}
                            disabled={!isFormValid || status === 'sending'}
                        >
                            {status === 'sending' ? t('sending') : t('submit')}
                        </button>
                    )}
                    {status === 'error' && <p className={styles.errorMsg}>{t('error')}: {errorMsg}</p>}
                </div>
            </form>
            <div className={styles.footer}>
                <p>{t('footer.copyright')}</p>
                <div className={styles.footerLinks}>
                    <a href={`/${locale}/privacy`} className={styles.footerLink}>{t('footer.privacy')}</a>
                    <a href={`/${locale}/cookies`} className={styles.footerLink}>{t('footer.cookies')}</a>
                </div>  
            </div>
        </section>
    );
}

export default Form;