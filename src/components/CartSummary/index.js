import './cartsummary.css'
import {useContext} from 'react'
import ReactContext from '../../context/ReactContext'

const CartSummary = props => {
  const {toggleCheckout} = props
  const {cartList} = useContext(ReactContext)

  const renderPrice = () => {
    const totalAmount = cartList.reduce(
      (acc, item) => acc + item.price.slice(1) * item.count,
      0,
    )
    return totalAmount
  }

  const onCheckOut = () => {
    toggleCheckout()
  }

  return (
    <div className="summary-div">
      <h1 className="summaary-p">Total ({cartList.length} items) : </h1>
      <p className="price-total" data-testid="total-price">
        {`total order cost ₹ ${renderPrice()}`}
      </p>

      <button type="button" onClick={onCheckOut} className="checkout">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
