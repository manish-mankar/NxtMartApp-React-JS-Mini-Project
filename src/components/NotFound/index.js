import './notfound.css'

const NotFound = () => (
  <div className="not-found-container">
    <div>
      <img
        src="https://res.cloudinary.com/dtc3rf1du/image/upload/v1718270328/nxtMart/vdnaolxxs8emofmeobwc.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-head">Page Not Found</h1>
      <p className="not-found-para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
