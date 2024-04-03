import Footer from "../Components/Footer"
import Header from "../Components/Header"
import PropTypes from 'prop-types';
import TopButton from "../Components/TopButton";

function Layout({ children }) {
  return (
    <div className="montaga-regular">
        <Header />
        {children}
        <Footer />
        <TopButton />
    </div>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Layout