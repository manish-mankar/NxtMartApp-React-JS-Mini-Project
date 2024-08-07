import './categorySmItem.css'
import {CiShoppingCart} from 'react-icons/ci'

const CategorySmItem = props => {
  const {productitems, onChangeCategoryId, categoryId} = props

  const bgColor3 = categoryId === 'all' ? 'btn-color' : null
  const iconColor2 = categoryId === 'all' ? 'icon-color' : null
  const pColor2 = categoryId === 'all' ? 'category-p-color' : null

  return (
    <nav className="bg-categ-sm ">
      <ul className="ul-cat-sm">
        <li
          key="all"
          onClick={() => onChangeCategoryId('all')}
          className="cat-sm-li"
        >
          <a href="#Vegetables" className="anchor-element">
            <button
              aria-label="All Categories"
              type="button"
              className={`btn-icon ${bgColor3} `}
            >
              <CiShoppingCart size={20} className={iconColor2} />
            </button>
            <p className={`category-p-sm ${pColor2}`}>ALL</p>
          </a>
        </li>
        {productitems.map(item => {
          const bgColor2 = categoryId === item.name ? 'btn-color' : null
          const iconColor = categoryId === item.name ? 'icon-color' : null
          const pColor = categoryId === item.name ? 'category-p-color' : null
          return (
            <li
              key={item.name}
              className="cat-sm-li"
              onClick={() => onChangeCategoryId(item.name)}
            >
              <a href={`#${item.name}`} className="anchor-element">
                <button
                  aria-label={`Category ${item.name}`}
                  type="button"
                  className={`btn-icon ${bgColor2}`}
                >
                  <CiShoppingCart size={20} className={iconColor} />
                </button>
                <p className={`category-p-sm ${pColor}`}>{item.name}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default CategorySmItem
