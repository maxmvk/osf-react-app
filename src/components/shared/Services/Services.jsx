import React from 'react';
import styles from './Services.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faRecycle, faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Services = (props) => {
    return (
        <section className={styles.servicesSection}>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faDolly} className={styles.icon}/>
                    <div>
                        <h5>FOCUS</h5>
                        <p>Our unwavering focus on superior service delivery and building next generation competencies</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faRecycle} className={styles.icon}/>
                    <div>
                        <h5>METHOD</h5>
                        <p>A standardized methodology designed to deliver measurable business results and predictable costs</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faClipboardList} className={styles.icon}/>
                    <div>
                        <h5>KNOWLEDGE</h5>
                        <p>A highly skilled, proactive workforce that reliably improves each client’s ROI while mitigating their business risk</p>
                    </div>
                </div>
        </section>
    )
}

export default Services;