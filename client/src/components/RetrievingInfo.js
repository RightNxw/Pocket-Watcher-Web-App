import React from "react";
import "./RetrievingInfo.css";
import Footer from "./Footer";
import "./Inventory.css";
import Inventory from "./Inventory";
import { AiFillHome } from "react-icons/ai";

const RetrievingInfo = (props) => {
  if (props.info.message === "Something went wrong") {
    return (
      <div>
        <h1 className="error">
          Error retrieving data, please check you put the correct eth address!
        </h1>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }

  function Info() {
    return (
      <div>
        <h2>NFT Worth Ξ {props.info.nftWorth} </h2>
        <h2>Ethereum Worth Ξ {props.info.ethWorth} </h2>
        <h2>Total Net Worth Ξ {props.info.totalNet} </h2>
        <h2>Total Net Worth $ {props.info.usdNet}</h2>
        <h2>Ethereum price $ {props.info.ethPrice}</h2>
      </div>
    );
  }
  function goHomePage() {
    window.location.replace(`/`);
  }
  return (
    <div>
      <div className="body">
        <div className="top">
          <div className="home">
            <button id="homeButton">
              <AiFillHome size={40} onClick={goHomePage} />
            </button>
          </div>
          <h1 className="title">Info for {props.address}</h1>
          <div className="info">
            <Info />
          </div>
        </div>
        <div className="inventory">
          {props.info.inventoryList.map((data) => {
            return <Inventory inventoryData={data} />;
          })}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default RetrievingInfo;
