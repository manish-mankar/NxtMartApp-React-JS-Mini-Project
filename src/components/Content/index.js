import './content.css'
import Product from '../Product'

const Content = props => {
  const {productDetails} = props
  return (
    <>
      <ul className="ul-content">
        {productDetails.map(item => (
          <li key={item.name} id={item.name} className="li-content">
            <p className="name1">{item.name} &gt;</p>
            <ul className="ul-items">
              {item.products.map(items => (
                <Product key={items.id} details={items} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Content
