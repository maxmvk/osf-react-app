import React from 'react';
import styles from './ProductDetailedPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import preview1 from '../../assets/images/PG.10216885.JJ169XX.PZ.jpg'
import preview2 from '../../assets/images/PG.10216885.JJ169XX.BZ.jpg'
import preview3 from '../../assets/images/PG.10216885.JJ8UTXX.BZ.jpg'
import preview4 from '../../assets/images/PG.10216885.JJ8UTXX.PZ.jpg'
import Services from '../shared/Services/Services';
import { faFacebookF, faGooglePlusG, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const ProductDetailedPage = (props) => {

    let previews = [preview1, preview2, preview3, preview4];
    let tabs = ['Description','Additional Information','Reviews (3)'];

    let newQuantity = React.createRef();

    let onQuantityChange = () => {
        let quantity = Number(newQuantity.current.value);
        if ((quantity === 0)||(!quantity === false)) {
            props.setQuantity(quantity);
        }
    }
    console.log(props.cookies.get('added'));
    return (
        <div className={styles.productDetailedWrapper}>
            <section className={styles.productDetails}>
                <div className={styles.breadcrumbs}>
                    <div><NavLink to="/" >Home</NavLink></div>
                    <div>/</div>
                    <div><NavLink to="/category-services">OSF Theme</NavLink></div>
                    <div>/</div>
                    <div className={styles.active}>Ruffle Front</div>
                    <span>V-Neck Cardigan</span>
                </div>
                <div className={styles.pageName}>
                    <div></div>
                    <h1><span>Ruffle Front </span>V-Neck Cardigan</h1>
                    <div></div>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.imgContainer}>
                        {previews.map((p, index) => {
                            return props.currentPreview === (index+1) ?
                            <img src={p}/>
                            : null
                        })}
                        <div onClick={() => { props.toogleIsFullSizeImg(true) }} className={styles.fullSize}>⤧</div>
                        <div className={styles.preview}>
                            {previews.map((p, index) => {
                                return <img src={p}
                                className={props.currentPreview === (index+1) ? styles.prevActive : styles.prev}
                                onClick={() => { props.setCurrentPreview(index+1) }}/>
                            })}
                        </div>
                        <div className={styles.details}>
                            <h2>$299.99</h2>
                            <button className={styles.dropdownColor}>
                                <div></div>
                                Dark Gray
                                <span>▼</span>
                            </button>
                            <div className={styles.addWrap}>
                                <button className={styles.quantity}>
                                    {props.quantity > 0 ?
                                    <span onClick={() => { props.decreaseQuantity() }}>—</span>
                                    : <span>—</span>}
                                    <input type="text" maxLength="2" onChange={ onQuantityChange } ref={newQuantity} value={props.quantity}/>
                                    <span onClick={() => { props.increaseQuantity() }}>+</span>
                                </button>
                                {props.cookies.get('added') === 1
                                ? <button onClick={() => { props.onChangeProductCount(13, 299.99) }} className={styles.add}>Add to cart</button>
                                : <button onClick={() => { props.onAddToCart(13, 'Ruffle Front V-Neck Cardigan', 299.99) }} className={styles.add}>Add to cart</button>}
                            </div>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit 
                                voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inven&shy;tore 
                                Beatae vitae dicta sunt explicabo. <br/>
                                Nemo enim ipsam voluptatem quia voluptas 
                                {
                                    props.isReadMore === true?
                                    <span> dolor sit amet consectetur adipisicing elit. Unde 
                                        nemo ab quas quaerat aliquid perspiciatis vel doloribus, 
                                        necessitatibus voluptates quos et sint, reiciendis.
                                    </span> 
                                    : null
                                }
                            </p>
                            <div onClick={() => { props.setReadMore(!props.isReadMore) }} className={styles.read}>{props.isReadMore === true? 'Read less' : 'Read more'}</div>
                            <div className={styles.socialIcons}>
                                <div>Share</div>
                                <div><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></div>
                                <div><a href="https://plus.google.com/"><FontAwesomeIcon icon={faGooglePlusG} /></a></div>
                                <div><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></div>
                                <div><a href="https://www.pinterest.com/"><FontAwesomeIcon icon={faPinterestP} /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tabsContainer}>
                        <div className={styles.tabs}>
                            {tabs.map((t, index) => {
                                return <div
                                className={props.currentTab === index ? styles.tabActive : styles.tab}
                                onClick={() => { props.setCurrentTab(index) }}>{t}</div>
                            })}
                        </div>
                        <div className={styles.content}>
                            {props.currentTab === 0
                            ?<p>
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                                natoque penatibus et magnis dis parturient montes, nascetur 
                                ridiculus mus.
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            </p>
                            :<p>
                                Nulla consequat 
                                massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
                                vulputate eget, arcu. 
                                Cum sociis natoque penatibus et magnis dis parturient montes, 
                                nascetur ridiculus mus. Donec quam felis, <br/>
                                ultricies nec, pellentesque eu, pretium quis, sem.
                            </p>
                            }
                            {props.currentTab === 1
                            ?<p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                                natoque penatibus et magnis dis parturient montes, nascetur 
                                ridiculus mus.</p>
                            </p>
                            :<p>
                                Cum sociis natoque penatibus et magnis dis parturient montes, 
                                nascetur ridiculus mus. Donec quam felis, <br/>
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
                                massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
                                vulputate eget, arcu. 
                            </p>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.titleContainer}>
                    <div></div>
                    <h4>Popular Items</h4>
                    <div></div>
                </div>
                <div className={styles.itemsContainer}>
                    {
                        props.products.map(p => (p.type !== 3)&&(p.id < 5)
                            ? <div className={styles.item}>
                                <img src={'.' + p.photo} alt="" className ={styles.itemImage} />
                                <h5>{p.name}</h5>
                                <p>$ {p.price}</p>
                            </div>
                            : null)
                    }
                </div>
                <div className={styles.itemsContainerMobile}>
                    {
                        props.products.map((p, index) => (p.type === 1)&&((index+1) === props.currentProductSlide)
                            ? <div className={styles.item}>
                                <img src={'.' + p.photo} alt="" className ={styles.itemImage} />
                                <h5>{p.name}</h5>
                                <p>$ {p.price}</p>
                            </div>
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
                <button onClick={() => { window.scrollTo(0,0) }} className={styles.scroll}>Scroll to top</button>
            </section>
            <Services />
        </div>
    )
}

export default ProductDetailedPage;