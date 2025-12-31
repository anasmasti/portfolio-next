import "../styles/globals.scss";
import Copyright from "../components/shared/Copyright";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Copyright />
    </>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
