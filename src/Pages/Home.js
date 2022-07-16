import React, { useState, useEffect, useRef } from 'react'
import Title from '../Component/Document Title/Title'
import { useDispatch } from 'react-redux'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
// import heroImage from '../assets/images/heroImage.jpg'
import { Link } from 'react-router-dom'
import Category from '../Component/Category/Category'
import Feature from '../Component/Feature/Feature'
import { products } from '../assets/fake-data/product'
import PopularFoods from '../Component/Popular Foods/PopularFoods'
import { add_to_cart } from '../Redux/FoodActions'

import HomeGif from '../assets/images/Home.gif'
import foodCategoryImage01 from '../assets/images/hamburger.png'
import foodCategoryImage02 from '../assets/images/pizza.png'
import foodCategoryImage03 from '../assets/images/bread.png'
import foodCategoryImage04 from '../assets/images/fried-potatoes.png'
import ItemNotFound from '../assets/images/NoItemFound.webp'
import location from '../assets/images/location.png'
import network from '../assets/images/network.png'
import Testimonial from '../Component/Slider/Testimonial'
import './Pages.css'

const Home = () => {
  const [category, setCategory] = useState('all')
  const [allFoodItems, setAllFoodItems] = useState(products)
  const [itemFound, setItemFound] = useState(false)

  const dispatch = useDispatch()
  const myRef = useRef(null)

  const addProductToCart = (id) => {
    const filteredData = allFoodItems.filter((item) => {
      return item.id === id
    })
    const [cartData] = filteredData
    dispatch(add_to_cart(cartData))
  }
  const executeScroll = () => myRef.current.scrollIntoView()
  useEffect(() => {
    if (category === 'all') {
      setItemFound(true)
      setAllFoodItems(products)
    } else {
      const filteredItems = products.filter((item) => {
        return item.category.toLowerCase() === category
      })
      if (filteredItems.length > 0) {
        setItemFound(true)
        setAllFoodItems(filteredItems)
      } else {
        setItemFound(false)
      }
    }
  }, [category])
  return (
    <Title title="Home">
      <div className="container">
        <div className="row">
          {/* Hero Section */}
          <div className="contentLeft col-md-6">
            <div className="heroImage">
              <img src={HomeGif} alt="hero" />
            </div>
          </div>
          <div className="contentRight col-md-6">
            <div className="hero_content">
              <h5>Easy way to make an Order</h5>
              <h1>
                <span className="heroStyle">Hungry?</span> just wait food at
                your <span className="heroStyle">door step</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus.
              </p>
              <div className="hero_btn d-flex align-items-center gap-5">
                <button
                  onClick={executeScroll}
                  className="order_btn btn btn-primary"
                >
                  Order Now <ArrowCircleRightRoundedIcon />
                </button>

                <button className="allFoods btn">
                  <Link to="/foods">
                    See All Foods <ArrowForwardIosIcon />
                  </Link>
                </button>
              </div>
            </div>
            <div className="hero_service d-flex align-items-center gap-4 mt-4">
              <div className="service">
                <span className="quality">
                  <GppGoodRoundedIcon />
                </span>
                100% quality food
              </div>
            </div>
          </div>
          {/* category */}
          <section className="food_categories mt-5">
            <h2 className="text-center pt-5">What we serve</h2>
            <Category />
          </section>

          {/* Why */}
          <section className="whyGrabFood">
            <div className="whyLeft col-md-6">
              <img src={location} alt="whyGrabFood" />
            </div>
            <div className="whyRight col-md-6">
              <div className="whyContent">
                <h3 className="whyTitle">
                  Why <span>Grab Foods?</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                  consequat urna. Morbi a bibendum metus. Donec scelerisque
                  sollicitudin enim eu venenatis.
                </p>

                <div className="whyList">
                  <div className="whyList_title">
                    <span>
                      <CheckCircleIcon />
                    </span>
                    <b>Fresh and Testy Food</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque nisl eros.
                    </p>
                  </div>
                  <div className="whyList_title">
                    <span>
                      <CheckCircleIcon />
                    </span>
                    <b>Quality Support</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque nisl eros.
                    </p>
                  </div>
                  <div className="whyList_title">
                    <span>
                      <CheckCircleIcon />
                    </span>
                    <b>Order from any location</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque nisl eros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Foods */}
          <section className="popular_foods col-md-12" ref={myRef}>
            <h2 className="text-center mt-3 mb-5">
              Popular Foods in our Restaurants
            </h2>
            <div className="popular_foods_category gap-5">
              <button
                className={`popular_food_category_btn ${
                  category === 'all' ? 'activeCategory' : ''
                }`}
                onClick={() => setCategory('all')}
              >
                <img src={foodCategoryImage04} alt="allFood" />
                All
              </button>
              <button
                className={`popular_food_category_btn ${
                  category === 'burger' ? 'activeCategory' : ''
                }`}
                onClick={() => setCategory('burger')}
              >
                <img src={foodCategoryImage01} alt="burger" />
                Burger
              </button>
              <button
                className={`popular_food_category_btn ${
                  category === 'pizza' ? 'activeCategory' : ''
                }`}
                onClick={() => setCategory('pizza')}
              >
                <img src={foodCategoryImage02} alt="pizza" />
                Pizza
              </button>
              <button
                className={`popular_food_category_btn ${
                  category === 'bread' ? 'activeCategory' : ''
                }`}
                onClick={() => setCategory('bread')}
              >
                <img src={foodCategoryImage03} alt="bread" />
                Bread
              </button>
              <button
                className="popular_food_category_btn "
                onClick={() => setCategory('gujarati')}
              >
                <img src={foodCategoryImage03} alt="bread" />
                gujarati
              </button>
            </div>
            <div className="All_Foods">
              {allFoodItems && itemFound ? (
                allFoodItems.map((foodItem) => {
                  return (
                    <PopularFoods
                      key={foodItem.id}
                      foodItems={foodItem}
                      addProductToCart={addProductToCart}
                    />
                  )
                })
              ) : (
                <div className="NoDataFound">
                  <img src={ItemNotFound} alt="No Item Found" />
                </div>
              )}
            </div>
          </section>

          {/* Features */}
          <section className="col-lg-12 text-center mt-5">
            <h2>Just sit back at home</h2>
            <h3>
              We will <span className="text-primary">Take Care!</span>
            </h3>
            <div className="features mt-5">
              <Feature />
            </div>
          </section>

          {/* Testimonial */}
          <section className="testimonial">
            <div className="testimonialLeft col-md-6">
              <h2 className="testimonial_title text-center">Testimonial</h2>
              <h4 className="text-center">What our Customers are saying</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus.
              </p>
              <div className="carousel__container">
                <Testimonial />
              </div>
            </div>
            <div className="testimonialRight col-md-6">
              <div className="networkImage">
                <img src={network} alt="network" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Title>
  )
}

export default Home
