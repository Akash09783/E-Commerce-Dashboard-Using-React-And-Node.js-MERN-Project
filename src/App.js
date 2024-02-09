import "./App.css";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComp from "./components/PrivateComp";
import ProductList from "./components/ProductList";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<PrivateComp />}>
              <Route path="/" element={<ProductList/>} />
              <Route path="/add" element={<AddProduct/>} />
              
              <Route
                path="/update/:_id"
                element={<UpdateProduct/>}
              />
              <Route path="/logout" element={<h1>LogOut Component</h1>} />
              <Route path="/profile" element={<h1>Profile Component</h1>} />
              <Route />
            </Route>

           
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
