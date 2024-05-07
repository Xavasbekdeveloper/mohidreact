import React from 'react'
import './Products.scss'
import { PRODUCTS_DATA } from '../../static/products'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoStar, IoStarOutline } from "react-icons/io5";


const Products = () => {

    const card = PRODUCTS_DATA?.map((item) => {
        
        let res = []

        for (let i = 0; i < item.rating; i++) {
            res.push(<IoStar className='products__card__star' key={item.id}/>)
        }
        for (let i = item.rating; i < 5; i++) {
            res.push( <IoStarOutline className='products__card__star-outline' key={item.id} />)
        }

       return ( 
        <div key={item.id} className="products__card">
            <div className="products__card__img">
                <img src={item.img} alt="img" />
            </div>
            <div className='products__card__info'>
                <div className="products__card__btns">
                    <button className='products__card__btn'>
                        <PiShoppingCartSimpleFill />
                    </button>
                    <button className='products__card__btn'>
                        <FaHeart />
                    </button>
                </div>
                <h3 className='products__card__title'>{item.title}</h3>
                <div>{res}</div>
                <div>
                    {
                        item.aksiya ? <span className='products__card__old-price'>$300.00</span> : <></>
                    }
                    <span className='products__card__price'>${item.price}.00</span>
                </div>
            </div>
        </div> 
        )
    })

  return (
    <section className="products">
        <div className="container products__container">
            <p className='products__text'>Find your favourite smart watch.</p>
            <h2 className="products__title">Our Latest Products</h2>

            <div className="products__cards">
                {card}
            </div>

            <div className='products__btns'>
                <button className='products__btn'>View More</button>
            </div>
        </div>
    </section>
  )
}

export default Products