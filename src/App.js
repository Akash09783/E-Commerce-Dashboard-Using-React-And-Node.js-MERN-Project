
import './App.css';
import Nav from './Nav';
import {HashRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
  <>

  <div className="App">
  <HashRouter>

  <Nav/>
  <Routes>
<Route path='/' element={<h1>Product Listing Component</h1>} />
<Route path='/add' element={<h1>Add Product Component</h1>} />
<Route path='/update' element={<h1>Update Product Component</h1>} />
<Route path='/logout' element={<h1>LogOut Component</h1>} />
<Route path='/profile' element={<h1>Profile Component</h1>} />
  </Routes>
 
  </HashRouter>


  </div>

  </>
  );
}

export default App;
