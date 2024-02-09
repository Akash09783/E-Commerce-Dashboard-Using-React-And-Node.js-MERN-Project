import React from "react";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");

  const addProduct = async () => {
    console.warn(name, price, category, company);
    const userId = JSON.stringify(localStorage.getItem("user"));
    console.warn(userId);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <div
      className="addProduct"
      style={{ alignItems: "center", marginLeft: "38%" }}
    >
      <h1
        style={{
          textAlign: "center",
          marginRight: "61%",
          fontFamily: "sans-serif",
          fontStyle: "italic",
        }}
      >
        Add Product
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
      <button onClick={addProduct} type="button" className="appButton">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;