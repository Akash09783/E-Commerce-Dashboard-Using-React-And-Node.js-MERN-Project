import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getProductDetailss();
  }, []);

  const getProductDetailss = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/product/${params._id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const UpdateProduct = async () => {
    console.warn(name, price, category, company);
    let result = await fetch(`http://localhost:5000/productt/${params._id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    result = await result.json();
    console.warn(result); 
    navigate('/')
  };
  return (
    <div
      className="addProduct"
      style={{ alignItems: "center", marginLeft: "38%" }}
    >
      <h1
        style={{
          marginRight: "0",
          fontFamily: "sans-serif",
          fontStyle: "inherit",
          fontSize: "30px",
          marginLeft: "12%",
        }}
      >
        Update Product
      </h1>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        className="inputBox"
        placeholder="Enter Product Name"
      />
      <input
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="text"
        className="inputBox"
        placeholder="Enter Product Price"
      />
      <input
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        type="text"
        className="inputBox"
        placeholder="Enter Product Category"
      />
      <input
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        type="text"
        className="inputBox"
        placeholder="Enter Product Company"
      />
      <button onClick={UpdateProduct} type="button" className="appButton">
        UpdateProduct
      </button>
    </div>
  );
};

export default UpdateProduct;
