import React from 'react';
import styles from './PopularItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { faComment } from '@fortawesome/free-regular-svg-icons';
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
                {
                props.products.map(p => p.type !==3 
                    ? <Item photo = {p.photo} 
                        name = {p.name} 
                        type = {p.type}
                        price = {p.price} 
                        id = {p.id}
                        wishCount={props.wishCount} 
                        increaseWishCount={props.increaseWishCount}
                        productCount={props.productCount}
                        onChangeProductCount={props.onChangeProductCount}
                        onAddToCart={props.onAddToCart}
                        added={p.added} />
                    : <div className={styles.imgGradient}>
                        <p>{p.name}</p>
                        <span><FontAwesomeIcon icon={faComment} className ={styles.comment}/> 5H AGO</span>
                        <div className={styles.gradient}></div>
                        <img src={p.photo} alt="" className ={styles.itemImage} />
                    </div> )
                }
            </div>
            <div className={styles.itemsContainerMobile}>
                {
                props.products.map((p, index) => (p.type === 1)&&((index+1) === props.currentProductSlide)
                    ? <Item photo = {p.photo} 
                        name = {p.name} 
                        type = {p.type}
                        price = {p.price} 
                        id = {p.id}
                        wishCount={props.wishCount} 
                        increaseWishCount={props.increaseWishCount}
                        productCount={props.productCount}
                        onChangeProductCount={props.onChangeProductCount}
                        onAddToCart={props.onAddToCart}
                        added={p.added} />
                    : null )
                }
            </div>
            <div className={styles.dotsContainer}>
                {props.products.map((p, index) => p.type === 1
                ? <div className={(index+1) === props.currentProductSlide ? styles.dotActive : styles.dot}
                    onClick={() => { props.setCurrentProductSlide(index+1) }}></div>
                : null
                )}
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