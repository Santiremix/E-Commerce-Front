import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Access/Login/Login";
import Profile from './components/Profile/Profile'
import { UserProvider } from "./context/UserContext/UserState";
import Register from "./components/Access/Register/Register";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { OrdersProvider } from "./context/OrdersContext/OrderState";
import Access from "./components/Access/Access";
import MyOrders from "./components/Profile/MyOrders/MyOrders";
import MyProfile from "./components/Profile/MyAccount/MyAccount";
import ProductsForMen from "./components/Products/men/men";


function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <OrdersProvider>
            <BrowserRouter>
              <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/products" element={<Products/>} />
                  <Route path="/products/t-shirts" element={<Products filtroprop="1"/>} />
                  <Route path="/products/trousers" element={<Products filtroprop="2"/>} />
                  <Route path="/products/hoodies" element={<Products filtroprop="3"/>} />
                  <Route path="/products/accesories" element={<Products filtroprop="4"/>} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/access" element={<Access />} />
                  <Route path="/myorders" element={<MyOrders />} />
                  <Route path="/myprofile" element={<MyProfile />} />
                  <Route path="/men" element={<ProductsForMen />} />
                </Routes>
              <Footer />
            </BrowserRouter>
          </OrdersProvider>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
