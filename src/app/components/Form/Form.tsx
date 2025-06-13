'use client';

import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { useTranslations } from 'next-intl';

function Form() {
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
    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Function to validate phone (basic validation)
    const isValidPhone = (phone: string) => {
        return /^\+?[\d\s-]{10,}$/.test(phone);
    };
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
    return (
        
        <section className={styles.form}>
            <div>
                <h2 className={styles.header}>{t('title')}</h2>
                <p className={styles.note}>{t('note')}</p>
            </div>
            <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.leftColumn}>
                    <div className={styles.inputGroup}>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder={t('fields.name')}
                            className={styles.input}
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
                            className={styles.input}
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
                            className={styles.input}
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
                            className={styles.input}
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
                    <button 
                        type="submit" 
                        className={`${styles.submitButton} ${isFormValid ? styles.submitButtonActive : ''}`}
                    >
                        {t('submit')}
                    </button>
                </div>
            </form>
            <div className={styles.footer}>
                <p>{t('footer.copyright')}</p>
                <div className={styles.footerLinks}>
                    <p>{t('footer.privacy')}</p>
                    <p>{t('footer.cookies')}</p>
                </div>
            </div>  
        </section>
    );
}

export default Form;