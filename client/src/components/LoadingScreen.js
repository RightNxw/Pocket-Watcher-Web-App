import ReactLoading from "react-loading";
import "./LoadingScreen.css";
import Footer from "./Footer";
const LoadingScreen = () => {
  return (
    <div className="loading">
      <div className="disclaimer">
        <h1>
          Please wait, depending how much the person has in their wallet the
          longer it takes. Dont refresh!
        </h1>
        <div />
        <div className="loader">
          <ReactLoading type="spin" color="" />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LoadingScreen;
