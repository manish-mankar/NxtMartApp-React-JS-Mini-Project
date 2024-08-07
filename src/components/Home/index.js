import './home.css'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import CategoryItems from '../CategoryItems'
import Content from '../Content'
import Footer from '../Footer'
import CategorySmItem from '../CategorySmItem'

const constApiStatus = {
  INITIAL: 'INITIAL',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const Home = () => {
  const [productsData, setProductData] = useState([])
  const [apiStatus, setApiStatus] = useState(constApiStatus.INITIAL)
  const [categoryId, setCategoryId] = useState('all')

  const onChangeCategoryId = id => {
    setCategoryId(id)
  }

  const nxtMartAPIURL = async () => {
    setApiStatus(constApiStatus.IN_PROGRESS)
    const apiUrl = 'https://apis2.ccbp.in/nxt-mart/category-list-details'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      setProductData(data.categories)
      setApiStatus(constApiStatus.SUCCESS)
    } else {
      setApiStatus(constApiStatus.FAILURE)
    }
  }

  useEffect(() => {
    nxtMartAPIURL()
  }, [])

  const renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#263868" height={100} width={100} />
    </div>
  )
  const onRetryBtn = () => {
    nxtMartAPIURL()
  }

  const renderFailure = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dtc3rf1du/image/upload/v1718269991/nxtMart/eutnohgrrguctkbjqecr.png"
        alt="failure view"
        className="failure-img"
      />
      <h2 className="failure-head">Oops! Something Went Wrong</h2>
      <p className="failure-para">We are having some trouble</p>
      <button type="button" onClick={onRetryBtn} className="failure-btn">
        Retry
      </button>
    </div>
  )

  const renderSuccess = () => (
    <>
      <CategorySmItem
        onChangeCategoryId={onChangeCategoryId}
        categoryId={categoryId}
        productitems={productsData}
        className="fixed-top"
      />
      <div className="items">
        <CategoryItems
          onChangeCategoryId={onChangeCategoryId}
          categoryId={categoryId}
          productitems={productsData}
        />
        <Content productDetails={productsData} />
      </div>
      <Footer />
    </>
  )

  const renderSwitchOperation = () => {
    switch (apiStatus) {
      case constApiStatus.IN_PROGRESS:
        return renderLoading()
      case constApiStatus.SUCCESS:
        return renderSuccess()
      case constApiStatus.FAILURE:
        return renderFailure()
      default:
        return null
    }
  }

  return (
    <div className="home-container1">
      <Header />
      {renderSwitchOperation()}
    </div>
  )
}

export default Home
