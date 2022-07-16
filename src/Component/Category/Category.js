import React from 'react'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import LunchDiningIcon from '@mui/icons-material/LunchDining'
import RamenDiningIcon from '@mui/icons-material/RamenDining'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import BrunchDiningIcon from '@mui/icons-material/BrunchDining'
import './Category.css'
const Category = () => {
  const categories = [
    { display: 'Punjabi', image: <BrunchDiningIcon fontSize="large" /> },
    { display: 'Chinese', image: <RamenDiningIcon fontSize="large" /> },
    { display: 'Pizza', image: <LocalPizzaIcon fontSize="large" /> },
    { display: 'South Indian', image: <RestaurantMenuIcon fontSize="large" /> },
    { display: 'Burger', image: <LunchDiningIcon fontSize="large" /> },
  ]
  return (
    <div className="category_container">
      <div className="category d-flex gap-5">
        {categories.map((foodCategory, index) => {
          return (
            <div key={index} className="category_items">
              <div className="foodImage">{foodCategory.image}</div>
              <div className="foodType">{foodCategory.display}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Category
