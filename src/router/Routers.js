import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import AllFoods from '../Pages/AllFoods'
import FoodDetails from '../Pages/FoodDetails'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Contact from '../Pages/Contact'
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
