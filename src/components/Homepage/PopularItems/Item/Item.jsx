import React from 'react';
import styles from './Item.module.scss';

const Item = (props) => {
    return (
        <div className ={styles.item}>
            <img src={props.photo} alt="" className ={styles.itemImage}/>
            <h5>{props.name}</h5>
            <p>$ {props.price}</p>
        </div>
    )
}

export default Item;