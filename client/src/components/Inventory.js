import "./Inventory.css";
const Inventory = (props) => {
  console.log(props)
  return (
    <div className="nft">
      <img className="imageNft" src={props.inventoryData.image} alt={"react"} />
      <div className="nftData">
        <a className="name"  href={`https://opensea.io/collection/${props.inventoryData.slug}`}>Name: {props.inventoryData.name}</a>
        <p className="amount">Amount: {props.inventoryData.amount}</p>
        <p className="floor">Floor: {props.inventoryData.floor}</p>
      </div>
    </div>
  );
};

export default Inventory;
