import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from './ProductsSlider.module.scss';
import slide1 from '../../../../assets/images/product-9.png'
import slide2 from '../../../../assets/images/product-14.png'
import slide3 from '../../../../assets/images/product-13.png'
import slide4 from '../../../../assets/images/product-10.png'
import slide5 from '../../../../assets/images/product-5.png'
import slide6 from '../../../../assets/images/product-4.png'
import slide7 from '../../../../assets/images/product-6.png'
import slide8 from '../../../../assets/images/product-1.png'
import { NavLink } from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

export default class ProductsSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1235,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <div className={styles.productsContainer}>
          <div className={styles.productsArrows}>
                <button onClick={this.previous}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <div></div>
                <span>///</span>
                <div></div>
                <button onClick={this.next}><FontAwesomeIcon icon={faAngleRight} /></button>
          </div>
        <Slider ref={c => (this.slider = c)} {...settings} className={styles.slider}>
          <div key={1}>
          <NavLink to="/category-services/product-details">
            <div className={styles.slide}>
              <img src={slide1} alt="" className={styles.slideImg}/>
              <h5>Kristina Dam Oak Table  With White Marble</h5>
              <p>Awesome</p>
            </div>
          </NavLink>
          </div>
          <div key={2}>
          <NavLink to="/category-services/product-details">
            <div className={styles.slide}>
              <img src={slide2} alt="" className={styles.slideImg}/>
              <h5>Kristina Dam Oak Table  With White Marble</h5>
              <p>Marketing</p>
            </div>
            </NavLink>
          </div>
          <div key={3}>
          <NavLink to="/category-services/product-details">
            <div className={styles.slide}>
              <img src={slide3} alt="" className={styles.slideImg}/>
              <h5>Kristina Dam Oak Table  With White Marble</h5>
              <p>Awesome</p>
            </div>
            </NavLink>
          </div>
          <div key={4}>
          <NavLink to="/category-services/product-details">
            <div className={styles.slide}>
              <img src={slide4} alt="" className={styles.slideImg}/>
              <h5>Hezy Theme</h5>
              <p>Marketing</p>
            </div>
            </NavLink>
          </div>
          <div key={5}>
          <NavLink to="/category-services/product-details">
            <div className={styles.slide}>
              <img src={slide5} alt="" className={styles.slideImg}/>
              <h5>Hay - About A Lounge  Chair AAL 93</h5>
              <p>Awesome</p>
            </div>
            </NavLink>
          </div>
          <div key={6}>
          <NavLink to="/category-services/product-details">
            <div className={styles.slide}>
              <img src={slide6} alt="" className={styles.slideImg}/>
              <h5>Cocktail Table Walnut  | YES</h5>
              <p>Marketing</p>
            </div>
            </NavLink>
          </div>
          <div key={7}>
          <NavLink to="/category-services/product-details">
            <div className={styles.slide}>
              <img src={slide7} alt="" className={styles.slideImg}/>
              <h5>TORY DESK CALENDAR</h5>
              <p>Awesome</p>
            </div>
            </NavLink>
          </div>
          <div key={8}>
          <NavLink to="/category-services/product-details">
            <div className={styles.slide}>
              <img src={slide8} alt="" className={styles.slideImg}/>
              <h5>Kristina Dam Oak Table  With White Marble Top</h5>
              <p>Marketing</p>
            </div>
            </NavLink>
          </div>
        </Slider>
      </div>
    );
  }
}