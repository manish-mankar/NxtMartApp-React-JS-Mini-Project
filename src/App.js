import './App.css'
import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ReactContext from './context/ReactContext'

const App = () => {
  const [cartList, setCartList] = useState([])
  const [activeTab, setNewTab] = useState('Home')
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartData')) || []
    if (storedCartItems === undefined) {
      setCartList([])
    } else {
      setCartList(storedCartItems)
    }
    const returnACtiveId = JSON.parse(localStorage.getItem('activeId')) || ''
    setNewTab(returnACtiveId)
  }, [])

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartList))
    localStorage.setItem('activeId', JSON.stringify(activeTab))
  }, [cartList, activeTab])

  const incrementCartItem = (product, quantity) => {
    const isAlreadyExists = cartList.find(item => item.id === product.id)

    if (!isAlreadyExists) {
      const newProduct = {...product, count: quantity}
      setCartList(prev => [...prev, newProduct])
    } else {
      setCartList(prev =>
        prev.map(item =>
          item.id === product.id ? {...item, count: quantity} : item,
        ),
      )
    }
  }

  const decremantCartItem = (product, quantity) => {
    setCartList(prevState =>
      prevState
        .map(item =>
          item.id === product.id ? {...item, count: quantity} : item,
        )
        .filter(item => item.count > 0),
    )
  }

  return (
    <ReactContext.Provider
      value={{
        cartList,
        incrementCartItem,
        decremantCartItem,
        setCartList,
        activeTab,
        setNewTab,
      }}
    >
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </ReactContext.Provider>
  )
}

export default App
