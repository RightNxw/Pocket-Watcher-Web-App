import "./Inventory.css";
const Inventory = (props) => {
  return (
    <div className="nft">
      <img className="imageNft" src={props.inventoryData.image} alt={"react"} />
      <div className="nftData">
        <p className="name">Name: {props.inventoryData.name}</p>
        <p className="amount">Amount: {props.inventoryData.amount}</p>
        <p className="floor">Floor: {props.inventoryData.floor}</p>
      </div>
    </div>
  );
};

export default Inventory;
