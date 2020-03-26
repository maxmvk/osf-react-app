import React from 'react';
import styles from './LoginModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const LoginModal = (props) => {
    return (
        <div>
            <div className={styles.modalWrap}>
                <div className={styles.loginModal}>
                    <h2>Sign in</h2>
                    <div className={styles.forms}>
                        <div className={styles.inputWrap}>
                            <p>Email</p>
                            <input type="email" placeholder=" " required/>
                        </div>
                        <div className={styles.inputWrap}>
                            <div>
                                <p>Lato</p>
                                <p className={styles.forgot}>forgot password</p>
                            </div>
                            <input type={props.isPasswordVisible? "text": "password"} placeholder=" " required pattern="(?=^.{6,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/>
                            {props.isPasswordVisible?
                            <FontAwesomeIcon icon={faEyeSlash} className={styles.eyeSlash} onClick={() => { props.toogleIsPasswordVisible(false) }}/>
                            :<FontAwesomeIcon icon={faEye} className={styles.eye} onClick={() => { props.toogleIsPasswordVisible(true) }}/>}
                        </div>
                    </div>
                    <div className={styles.login}>
                        <button>Login</button>
                        <p className={styles.noAccount}>I don't have an account</p>
                    </div>
                </div>
            </div>
            <div onClick={() => { props.toogleIsLoginModal(false) }} className={styles.overlay}></div>
        </div>
    )
}

export default LoginModal;