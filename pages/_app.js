import "../styles/globals.scss";
import Copyright from "../components/shared/Copyright";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Copyright />
    </>
  );
}

export default MyApp;
