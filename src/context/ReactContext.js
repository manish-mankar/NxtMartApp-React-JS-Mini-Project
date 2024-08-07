import React from 'react'

const ReactContext = React.createContext({
  cartList: [],
  incrementCartItem: () => {},
  decrementCartItem: () => {},
})

export default ReactContext
