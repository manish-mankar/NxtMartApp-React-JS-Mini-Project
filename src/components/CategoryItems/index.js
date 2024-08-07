import './categoryitems.css'

const CategoryItems = props => {
  const {productitems, onChangeCategoryId, categoryId} = props

  const values = categoryId === 'all' ? 'clicked' : null

  return (
    <div className="category">
      <h1 className="cat-head">Categories</h1>
      <ul className="cat-ul">
        <li
          key="all"
          onClick={() => onChangeCategoryId('all')}
          className="cat-li"
        >
          <button type="button" className={`cat-btn ${values}`}>
            <a href="#Fruits & Vegetables" className={` ${values}`}>
              All
            </a>
          </button>
        </li>
        {productitems.map(item => {
          const colorValue = item.name === categoryId ? 'clicked' : null
          return (
            <li key={item.name} className="cat-li">
              <button
                type="button"
                className={`cat-btn ${colorValue}`}
                onClick={() => onChangeCategoryId(item.name)}
              >
                <a href={`#${item.name}`} className={` ${colorValue}`}>
                  {item.name}
                </a>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryItems
