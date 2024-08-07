import './footer.css'
import {FaFacebook, FaXTwitter, FaInstagram} from 'react-icons/fa6'
import {TbBrandPicsart} from 'react-icons/tb'

const Footer = () => (
  <footer className="footer-bg fixed-bottom">
    <h1 className="help">
      For any query, contact +91 9876543210 or mail us help@nxtmart.co.in
    </h1>
    <ul className="footer-ul">
      <li className="li-footer">
        <FaFacebook color="white" size={20} />
      </li>
      <li className="li-footer">
        <FaXTwitter color="white" size={20} />
      </li>
      <li className="li-footer">
        <TbBrandPicsart color="white" size={20} />
      </li>
      <li className="li-footer">
        <FaInstagram color="white" size={20} />
      </li>
    </ul>
    <p className="copy-right">
      Copy right &copy 2023 NxtMart Grocery Supplies Pvt Ltd
    </p>
  </footer>
)

export default Footer
