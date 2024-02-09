import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComp from "./components/PrivateComp";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<PrivateComp />}>
              <Route path="/" element={<h1>Product Listing Component</h1>} />
              <Route path="/add" element={<h1>Add Product Component</h1>} />
              <Route
                path="/update"
                element={<h1>Update Product Component</h1>}
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
