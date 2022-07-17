import React, { useState } from 'react'
import { Common } from '../Component/All_Food_Common_Section/Common'
import Title from '../Component/Document Title/Title'
import PopularFoods from '../Component/Popular Foods/PopularFoods'
import { products } from '../assets/fake-data/product'
import ReactPaginate from 'react-paginate'
import './pages_style/AllFoods.css'

const AllFoods = () => {
  const [category, setCategory] = useState('')
  const [searchFood, setSearchFood] = useState('')
  const [foodItems] = useState(products)
  const [pageNumber, setPageNumber] = useState(0)

  let displayItems = []

  if (searchFood === '' && category === '') {
    displayItems = foodItems
  } else if (searchFood !== '') {
    displayItems = products.filter((item) => {
      if (item.title.toLowerCase().includes(searchFood.toLocaleLowerCase())) {
        return item
      }
    })
  } else if (category === 'All') {
    displayItems = foodItems
  } else {
    displayItems = products.filter((item) => {
      return item.category === category
    })
  }

  const showItemsPerPage = 12
  const pageVisited = pageNumber * showItemsPerPage
  const itemsToDisplay = displayItems.slice(
    pageVisited,
    pageVisited + showItemsPerPage,
  )
  const pageCount = Math.ceil(displayItems.length / showItemsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
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
            <select
              className="dropdown"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="dropdown-item" value={''} selected>
                All
              </option>
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
          {itemsToDisplay && itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((item) => {
              return <PopularFoods foodItems={item} />
            })
          ) : (
            <p className="no_result">Sorry!! No Item found</p>
          )}
        </div>
        <ReactPaginate
          nextLabel={'Next'}
          previousLabel="Previous"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBtns"
          previousLinkClassName="previousBtn"
          nextLinkClassName="nextBtn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </div>
    </>
  )
}

export default AllFoods
