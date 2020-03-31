import React from 'react';
import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className ={styles.item}>
            {props.type === 1
            ?<div className={styles.itemHover}>
                {
                    props.added === false
                    ?<button className ={styles.add} onClick={() => { props.onAddToCart(props.id, props.name, props.price, props.photo) }}>
                            <FontAwesomeIcon icon={faPlus} />
                    </button>
                    :<button className ={styles.add} onClick={() => { props.onChangeProductCount(props.id, props.price) }}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                }
                <button className ={styles.wish} onClick={() => { props.increaseWishCount() }}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
            : null}
            <NavLink to="/category-services/product-details"><img src={props.photo} alt="" className ={styles.itemImage} /></NavLink>
            <h5><NavLink to="/category-services/product-details">{props.name}</NavLink></h5>
            {props.type === 1
            ? <p>$ {props.price}</p>
            : <div className ={styles.buyContainer}>
                <p><NavLink to="/category-services/product-details">${props.price}</NavLink></p>
                {
                    props.added === false
                    ?<button onClick={() => { props.onAddToCart(props.id, props.name, props.price, props.photo) }}>BUY NOW</button>
                    :<button onClick={() => { props.onChangeProductCount(props.id, props.price) }}>BUY NOW</button>
                }
            </div>}
        </div>
    )
}

export default Item;