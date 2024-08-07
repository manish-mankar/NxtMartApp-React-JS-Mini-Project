import './product.css'
import {useState, useContext} from 'react'
import ReactContext from '../../context/ReactContext'

const Product = props => {
  const [quantity, setQuantity] = useState(0)
  const {decremantCartItem, incrementCartItem} = useContext(ReactContext)
  const {details} = props
  const {name, price, weight, image} = details
  const onDecrement = () => {
    setQuantity(prevqun => prevqun - 1)
    decremantCartItem(details, quantity - 1)
  }
  const onInrement = () => {
    setQuantity(prevqun => prevqun + 1)
    incrementCartItem(details, quantity + 1)
  }

  return (
    <li className="li-items" data-testid="product">
      <img src={image} alt={name} className="img-size" />
      <div className="overflow-name">
        <p className="product-name">{name}</p>
      </div>
      <div className="product-details">
        <div className="details">
          <p className="weight">{weight}</p>
          <p className="price">{price}</p>
        </div>
        {quantity === 0 && (
          <button
            type="button"
            data-testid="add-button"
            onClick={onInrement}
            className="add-btn"
          >
            Add
          </button>
        )}
        {quantity !== 0 && (
          <div className="quantity-container1">
            <button
              type="button"
              data-testid="decrement-count"
              onClick={onDecrement}
              className="btm"
            >
              -
            </button>
            <button
              type="button"
              className="count1 btm"
              data-testid="active-count"
            >
              {quantity}
            </button>
            <button
              type="button"
              data-testid="increment-count"
              className="btm"
              onClick={onInrement}
            >
              +
            </button>
          </div>
        )}
      </div>
    </li>
  )
}

export default Product
