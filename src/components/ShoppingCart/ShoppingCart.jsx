import React from 'react';
import styles from './ShoppingCart.module.scss';
import { NavLink } from 'react-router-dom';

let dots = [10.00, 0, 60.00, 5.00, 0];

const ShoppingCart = (props) => {

    return (
        <div className={styles.shoppingCartWrapper}>
            <section className={styles.shoppingCart}>
                <div className={styles.breadcrumbs}>
                    <div><NavLink to="/" >Home</NavLink></div>
                    <div>/</div>
                    <div className={styles.active}>Shopping Cart</div>
                </div>
                <div className={styles.pageName}>
                    <div></div>
                    <h1>Shopping Cart</h1>
                    <div></div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.productsContainer}>
                        {props.cartProducts.map(p => 
                            <div className={styles.product}>
                                <img src={p.photo} alt=""/>
                                <div className={styles.details}>
                                    <h5>{p.name}</h5>
                                    <p>$ {p.price}</p>
                                </div>
                                <div className={styles.quantityContainer}>
                                    <button className={styles.quantity}>
                                        {p.quantity > 1 ?
                                        <span onClick={() => { props.decreaseQuantity(p.id, p.price) }}>—</span>
                                        : <span>—</span>}
                                        {p.quantity}
                                        <span onClick={() => { props.increaseQuantity(p.id, p.price) }}>+</span>
                                    </button>
                                    <h3>${(p.price*p.quantity).toFixed(2)}</h3>
                                    <button onClick={() => { props.deleteCartProduct(p.id, p.price, p.quantity) }} className={styles.delete}>×</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.paymentContainer}>
                        <div className={styles.coupon}>
                            <input placeholder="Enter Coupon Code"/>
                            <button>Apply</button>
                        </div>
                        <div className={styles.payment}>
                            <div className={styles.column}>
                                <button className={styles.update}>Update cart</button>
                                <button className={styles.proceed}>Proceed To CHECKOUT</button>
                            </div>
                            <div className={styles.column}>
                                <b>cart subtotal:</b>
                                <h6>${props.subtotal.toFixed(2)}</h6>
                            </div>
                            <div className={styles.column}>
                                <b>SHIPPIING AND HANDLING:</b>
                                <div className={styles.methods}>
                                    <div className={styles.dotsContainer}>
                                        {dots.map((d, index) => {
                                        return <span className={props.currentMethod === (index+1) ? styles.dotActive : styles.dot}
                                            onClick={() => { props.setCurrentMethod(index+1) }}></span>
                                        })}
                                    </div>
                                    <div className={styles.textContainer}>
                                        <div><p>Flat Rate:</p><b>$10.00</b></div>
                                        <div><p>Free Shipping</p></div>
                                        <div><p>International:</p><b>$60.00</b></div>
                                        <div><p>Local Delivery:</p><b>$5.00</b></div>
                                        <div><p>Local Pickup (Free)</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.column}>
                                <b>ORDER TOTAL:</b>
                                <h2>${dots.map((d, index) => props.currentMethod === (index+1)
                                    ?(props.subtotal+d).toFixed(2)
                                    :null)}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShoppingCart;