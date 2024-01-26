import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import phone_banner from './Components/Assets/banner_phone.jpg'
import agd_banner from './Components/Assets/banner_agd.jpg'
import computer_banner from './Components/Assets/banner_computer.png'
import Register from "./Pages/Register";
import Offices from "./Components/Offices/Offices";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import Admin from "./Components/Admin/Admin";
import {AuthProvider} from "./Components/AuthHandler/AuthHandler";
import AddProduct from "./Components/Admin/AddProduct";

function App() {
  return (
    <div>
      <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/telefony' element={<ShopCategory banner={phone_banner} category="telefony"/>}/>
        <Route path='/komputery' element={<ShopCategory banner={computer_banner} category="komputery"/>}/>
        <Route path='/agd' element={<ShopCategory banner={agd_banner} category="agd"/>}/>
        <Route path="product" element={<Product />}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<LoginSignup />}/>
        <Route path='/signup' element={<Register />}/>
        <Route path='/biura' element={<Offices />}/>
        <Route path='/o-nas' element={<AboutUs />}/>
        <Route path='/kontakt' element={<Contact />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/add' element={<AddProduct />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
