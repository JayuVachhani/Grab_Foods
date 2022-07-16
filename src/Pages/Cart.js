import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  adjust_food_quantity,
  remove_food_from_cart,
} from '../Redux/FoodActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import EmptyBasket from '../assets/images/EmptyBasket.gif'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { Link } from 'react-router-dom'
import './Pages.css'
import Title from '../Component/Document Title/Title'

const Cart = () => {
  const [itemsTotalPrice, setItemsTotalPrice] = useState(0)

  const storeData = useSelector((state) => state.CartReducer.cart)

  useEffect(() => {
    let total = storeData.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0,
    )
    setItemsTotalPrice(total)
  }, [storeData])

  const dispatch = useDispatch()
  return (
    <>
      <Title title=" Cart" />
      <div className="cartTable mb-5">
        <h2 className="text-center mb-5">Your Food in Basket</h2>
        {storeData.length > 0 ? (
          <div className="cartSection">
            <div className="cartLeft col-md-7 mt-4">
              <TableContainer component={Paper}>
                <Table
                  id="#supsystic-table-1"
                  size="small"
                  aria-label=" table"
                  options={{
                    rowStyle: {
                      fontSize: 50,
                    },
                  }}
                >
                  <TableHead className="tableHead">
                    <TableRow>
                      <TableCell align="right">
                        <span className="tableHeading text-white">
                          Product Image
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeading text-white">
                          Product Title
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeading text-white">
                          Product Price
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeading text-white">
                          Product Quantity
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeading text-white">
                          Product Total
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {storeData.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          border: 0,
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          <div className="removeItem">
                            <span
                              className="removeItem_btn"
                              onClick={() =>
                                dispatch(remove_food_from_cart(item.id))
                              }
                            >
                              <HighlightOffIcon />
                            </span>

                            <img
                              className="cartItemImage"
                              src={item.image01}
                              alt="ItemImage"
                            />
                          </div>
                        </TableCell>
                        <TableCell align="center" className="cartItemsTitle">
                          {item.title}
                        </TableCell>
                        <TableCell align="center">{item.price}</TableCell>
                        <TableCell align="center">
                          <input
                            type={'number'}
                            min="1"
                            value={item.quantity}
                            className="qty"
                            onChange={(e) =>
                              dispatch(
                                adjust_food_quantity(item.id, e.target.value),
                              )
                            }
                          />
                          {/* <span onClick={decreseQuantity}>
                          <IndeterminateCheckBoxIcon />
                        </span>
                        {item.quantity}
                        <span onClick={() => increaseQuantity(item)}>
                          <AddBoxIcon />
                        </span> */}
                        </TableCell>
                        <TableCell align="center">
                          {item.price * item.quantity}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="cartRight col-md-3 m-auto mt-0">
              <h3 className="text-center">Order Summary</h3>
              <div className="OverviewCartItems">
                <div className="overview">
                  <h6>
                    Basket Subtotal (
                    {storeData.length > 1
                      ? `${storeData.length} itmes`
                      : `1 item`}
                    )
                  </h6>

                  <h5>
                    <CurrencyRupeeIcon />
                    {itemsTotalPrice}
                  </h5>
                </div>
                <div className="overview">
                  <h6 className="text-danger">Shipping charge</h6>
                  <h5 className="text-danger">
                    <CurrencyRupeeIcon />0
                  </h5>
                </div>
                <div className="overview">
                  <h6>GST</h6>
                  <h5>
                    <span className="gst">(18%)</span>
                    <CurrencyRupeeIcon />
                    {(itemsTotalPrice * 0.18).toFixed(2)}
                  </h5>
                </div>
                <hr></hr>
                <div className="overview text-success">
                  <h4>Grand Total</h4>
                  <h4>
                    <CurrencyRupeeIcon />
                    {itemsTotalPrice +
                      Number((itemsTotalPrice * 0.18).toFixed(2))}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <img src={EmptyBasket} alt="Empty Basket" />
            <h4>
              <span className="text-danger">No Items in your Basket.</span>
              <div className="goback">
                <Link className="btn btn-primary mt-4" to={'/'}>
                  Order Food
                </Link>
              </div>
            </h4>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
