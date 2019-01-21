import Meta from '../components/Meta'
import Footer from '../components/Footer'

export default ({ children }) => (
  <div>
    <Meta />
    {children}
    <Footer />
  </div>
)