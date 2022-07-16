import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import './PopularFoods.css'

const PopularFoods = (props) => {
  const { id, title, price, image01 } = props.foodItems
  const addItemToCart = (id) => {
    props.addProductToCart(id)
  }

  return (
    <div className="popular_foods_items w-100">
      <div className="popular_foods_item_image">
        <img src={image01} alt="foodImage" />
      </div>
      <div className="popular_foods_item_content mt-3 text-center mb-3">
        <h5>
          <Link to={`/food/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className="cartAction d-flex align-items-center justify-content-between">
        <div className="popular_foods_item_price">
          <CurrencyRupeeIcon /> {price}
        </div>
        <button
          className="popular_foods_item_addToCart"
          onClick={() => addItemToCart(id)}
        >
          Add to Basket
        </button>
      </div>
    </div>
  )
}

export default PopularFoods
