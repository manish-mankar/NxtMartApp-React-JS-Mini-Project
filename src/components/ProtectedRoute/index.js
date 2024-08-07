import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRouter = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRouter
