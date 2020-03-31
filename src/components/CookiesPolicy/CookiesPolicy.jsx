import React from 'react';
import styles from './CookiesPolicy.module.scss';

const CookiesPolicy = (props) => {
    return (
        <div>
            <div className={styles.cookiesWrap}>
                <div className={styles.cookiesPolicy}>
                    <div className={styles.column}>
                        <h5>This website uses cookies</h5>
                        <p>
                            OSF uses its own and third-party cookies for statistical purposes, to know your preferences, for website performance 
                            and interaction with social media offering publicity tailored to your interests. If you continue browsing, we consider that you accept its use.
                            You can expand this information consulting our <span>Cookies Policy Page</span>.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <span onClick={() => { props.onClosePolicy() }}>╳</span>
                        <button onClick={() => { props.onAcceptPolicy() }}>Accept</button>
                    </div>
                </div>
            </div>
            <div className={styles.overlay}></div>
        </div>
    )
}

export default CookiesPolicy;