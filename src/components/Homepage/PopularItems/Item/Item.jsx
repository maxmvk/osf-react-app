import React from 'react';
import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
    return (
        <div className ={styles.item}>
            {props.type === 1
            ?<div className={styles.itemHover}>
                <button className ={styles.add} onClick={() => { props.increaseProductCount() }}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className ={styles.wish} onClick={() => { props.increaseWishCount() }}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
            : null}
            <img src={props.photo} alt="" className ={styles.itemImage} />
            <h5>{props.name}</h5>
            {props.type === 1
            ? <p>$ {props.price}</p>
            : <div className ={styles.buyContainer}>
                <p>${props.price}</p>
                <button onClick={() => { props.increaseProductCount() }}>BUY NOW</button>
            </div>}
        </div>
    )
}

export default Item;