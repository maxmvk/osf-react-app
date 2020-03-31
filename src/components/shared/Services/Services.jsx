import React from 'react';
import styles from './Services.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faRecycle, faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Services = (props) => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faDolly} className={styles.icon} />
                </div>
                <div className={styles.textContainer}>
                    <h5>FOCUS</h5>
                    <p>Our unwavering focus on superior service delivery and building next generation com&shy;petencies</p>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faRecycle} className={styles.icon} />
                </div>
                <div className={styles.textContainer}>
                    <h5>METHOD</h5>
                    <p>A standardized method&shy;ology designed to de&shy;liver measurable busi&shy;ness results and predict&shy;able costs</p>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />
                </div>
                <div className={styles.textContainer}>
                    <h5>KNOWLEDGE</h5>
                    <p>A highly skilled, proac&shy;tive workforce that reli&shy;ably improves each client’s ROI while miti&shy;gating their business risk</p>
                </div>
            </div>
        </section>
    )
}

export default Services;