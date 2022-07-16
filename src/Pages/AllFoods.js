import React, { useState } from 'react'
import { Common } from '../Component/All_Food_Common_Section/Common'
import Title from '../Component/Document Title/Title'
import PopularFoods from '../Component/Popular Foods/PopularFoods'
import { products } from '../assets/fake-data/product'
import './pages_style/AllFoods.css'

const AllFoods = () => {
  const [searchFood, setSearchFood] = useState('')
  const [foodItems] = useState(products)
  let result = []
  if (searchFood === '') {
    result = foodItems
  } else {
    result = products.filter((item) => {
      if (item.title.toLowerCase().includes(searchFood.toLocaleLowerCase())) {
        return item
      }
    })
  }

  return (
    <>
      <Title title=" All Foods" />

      <Common title="All Foods" />
      <div className="container">
        <div className="all_food_filter_and_search">
          <div className="all_food_search">
            <input
              type="text"
              placeholder="I am Looking for...."
              className="searchFoodInput"
              value={searchFood}
              onChange={(e) => setSearchFood(e.target.value)}
            />
          </div>
          <div className="all_food_filter">
            <label className="filter_label">Category Filters : </label>
            <select className="dropdown">
              <option
                className="dropdown-item"
                selected
                defaultValue={'select category'}
                disabled
              >
                select category
              </option>
              <option className="dropdown-item">All</option>
              <option className="dropdown-item">Gujarati</option>
              <option className="dropdown-item">Punjabi</option>
              <option className="dropdown-item">Chinese</option>
              <option className="dropdown-item">South Indian</option>
              <option className="dropdown-item">Italian</option>
              <option className="dropdown-item">Burger</option>
            </select>
          </div>
        </div>
        <div className="all_foods">
          {result && result.length > 0 ? (
            result.map((item) => {
              return <PopularFoods foodItems={item} />
            })
          ) : (
            <p className="no_result">Sorry!! No Item found</p>
          )}
        </div>
      </div>
    </>
  )
}

export default AllFoods
