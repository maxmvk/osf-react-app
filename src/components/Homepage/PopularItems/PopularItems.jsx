import React from 'react';
import styles from './PopularItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { faComment } from '@fortawesome/free-regular-svg-icons';
import product1 from '../../../assets/images/product-1.png'
import product2 from '../../../assets/images/product-2.png'
import product3 from '../../../assets/images/product-3.png'
import product4 from '../../../assets/images/product-4.png'
import product5 from '../../../assets/images/product-5.png'
import product6 from '../../../assets/images/product-6.png'
import product7 from '../../../assets/images/product-7.png'
import Item from './Item/Item';

const PopularItems = (props) => {
    return (
        <section className={styles.popularItemsSection}>
            <div className={styles.titleContainer}>
                <div></div>
                <h4>Popular Items</h4>
                <div></div>
            </div>
            <div className={styles.itemsContainer}>
                <div>
                    <img src={product1} alt="" className ={styles.itemImage}/>
                    <h5>Kristina Dam Oak Table With White Marble Top</h5>
                    <p>$ 799.55</p>
                </div>
                <div>
                    <img src={product2} alt="" className ={styles.itemImage}/>
                    <h5>Hay - About A Lounge  Chair AAL 93</h5>
                    <p>$659.55</p>
                </div>
                <div>
                    <img src={product3} alt="" className ={styles.itemImage}/>
                    <h5>Activate Facial Mask and Charcoal Soap </h5>
                    <p>$ 129.55</p>
                </div>
                <div>
                    <img src={product4} alt="" className ={styles.itemImage}/>
                    <h5>Cocktail Table Walnut  <br/>| YES</h5>
                    <p>$ 299.99</p>
                </div>
                <div>
                    <img src={product5} alt="" className ={styles.itemImage}/>
                    <h5>Hay - About A Lounge  Chair AAL 93</h5>
                    <p>$ 659.55</p>
                </div>
                <div>
                    <img src={product6} alt="" className ={styles.itemImage}/>
                    <h5>TORY DESK CALENDAR</h5>
                    <p>$ 410.99</p>
                </div>
                <div>
                    <img src={product7} alt="" className ={styles.itemImage}/>
                    <h5>CH445 Wing Chair on  SUITE NY</h5>
                    <p>$ 330.55</p>
                </div>
                <div className={styles.imgGradient}>
                    <p>My dragons are  misbehaving again. Unbelieveable!</p>
                    <span><FontAwesomeIcon icon={faComment} className ={styles.comment}/> 5H AGO</span>
                </div>
                {
                props.products.map(p => <Item photo = {p.photo} name = {p.name} price = {p.price}/>)
                }
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={() => { props.onAddProducts() }}>
                    Load More
                    <div><FontAwesomeIcon icon={faRedoAlt} transform={{ rotate: 225 }}/></div>
                </button>
            </div>
        </section>
    )
}

export default PopularItems;