import "./HomePage.css";
import image from "../assets/search.png";
import SearchAddress from "./SearchAddress";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <div id="title">
        <div className="image">
          <img className="image" src={image} alt="react"></img>
        </div>
        <div class="titleText">
          <h1>Pocket Watcher</h1>
        </div>
      </div>
      <div className="block">
        <div className="bodyText">
          <h3>
            Pocket Watcher is a tool that can track total net worth based on how
            much ethereum you have and your nft worth. Checks your nft worth
            based on the floor and not by traits. By the use of Coin Market,
            Etherscan, and Opensea API.
          </h3>
        </div>
      </div>
      <div className="searchBox">
        <SearchAddress />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
