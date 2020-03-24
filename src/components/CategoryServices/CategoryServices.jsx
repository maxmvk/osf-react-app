import React from 'react';
import styles from './CategoryServices.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import productImg from '../../assets/images/product-12.png'
import Products from '../shared/Products/Products';

const CategoryServices = (props) => {
    return (
        <div className={styles.categoryServicesWrapper}>
            <section className={styles.categoryServices}>
                <div className={styles.breadcrumbs}>
                    <div><NavLink to="/" >Home</NavLink></div>
                    <div>/</div>
                    <div className={styles.active}>Category Landing Services</div>
                </div>
                <div className={styles.pageName}>
                    <div></div>
                    <h1>Services</h1>
                    <div></div>
                </div>
                <div className={styles.filters}>
                    <div className={styles.column}>
                        <div className={styles.filter}>
                            <p>Price</p>
                            <button>$0.00 — $100.00<span>▼</span></button>
                        </div>
                        <div className={styles.filter}>
                            <p>Color</p>
                            <div className={styles.dotsContainer}>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.filter}>
                            <p>Brands</p>
                            <button>Ukraine sport<span>▼</span></button>
                        </div>
                        <div className={styles.filter}>
                            <p>Sort by</p>
                            <button>Price<span>▼</span></button>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.filter}>
                            <p>Size</p>
                            <button>Small<span>▼</span></button>
                        </div>
                        <div className={styles.filter}>
                            <p>Show</p>
                            <button>16 per page<span>▼</span></button>
                        </div>
                    </div>
                </div>
                <h6>12,931 <span>results in apparel</span></h6>
                <div className={styles.itemsContainer}>
                    {
                        props.products.map(p => p.type !== 3
                            ? <div className={styles.item}>
                                <img src={p.photo} alt="" className ={styles.itemImage} />
                                <h5>{p.name}</h5>
                                <p>$ {p.price}</p>
                            </div>
                            : null)
                    }
                    <div className={styles.item}>
                        <img src={productImg} alt="" className ={styles.itemImage} />
                        <h5>Activate Facial Mask and Charcoal Soap</h5>
                        <p>$ 129.55</p>
                    </div>
                    <div className={styles.item}>
                        <img src={productImg} alt="" className ={styles.itemImage} />
                        <h5>CH445 Wing Chair on  SUITE NY</h5>
                        <p>$ 330.55</p>
                    </div>
                    {
                        props.products.map(p => p.type !== 3
                            ? <div className={styles.item}>
                                <img src={p.photo} alt="" className ={styles.itemImage} />
                                <h5>{p.name}</h5>
                                <p>$ {p.price}</p>
                            </div>
                            : null)
                    }
                </div>
                <div className={styles.load}>
                    <button onClick={() => { props.onAddProducts() }}>Load More</button>
                </div>
            </section>
            <Products />
        </div>
    )
}

export default CategoryServices;