import React from 'react';
import styles from './PopularItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt , faPlus, faHeart} from "@fortawesome/free-solid-svg-icons";
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
                                            increaseProductCount={props.increaseProductCount} />
                                        : <div className={styles.imgGradient}>
                                            <p>{p.name}</p>
                                            <span><FontAwesomeIcon icon={faComment} className ={styles.comment}/> 5H AGO</span>
                                            <div className={styles.gradient}></div>
                                            <img src={p.photo} alt="" className ={styles.itemImage} />
                                        </div> )
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