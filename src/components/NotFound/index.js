/* eslint-disable react/no-unescaped-entities */
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-desc">
        we're sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
