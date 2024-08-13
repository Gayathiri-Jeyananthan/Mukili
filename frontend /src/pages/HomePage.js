import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/read");
      setProductList(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <h2>My HomePage</h2>
      <h2>{productList[0].title}</h2>
      <h2>{productList[1].title}</h2>
    </React.Fragment>
  );
};

export default HomePage;