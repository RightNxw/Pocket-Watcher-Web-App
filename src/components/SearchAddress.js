import { useState } from "react";

const SearchAddress = () => {
  const [address, setAddress] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (address !== null) {
      window.location.replace(`/info/${address}`);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        id="previewText"
        className="inputSearch"
        placeholder="Ethereum Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        autocomplete="off"
      />
      <button id="btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchAddress;
