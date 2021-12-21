import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import RetrievingInfo from "./RetrievingInfo";

const InformationPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api?address=${params.wallet}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingScreen />;
  return <RetrievingInfo info={data} address={params.wallet} />;
};

export default InformationPage;
