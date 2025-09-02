import axios from "axios";
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/home/HomePage.jsx'
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx'
import {OrdersPage} from "./pages/orders/OrdersPage.jsx";
import {TrackingPage} from "./pages/tracking/TrackingPage.jsx"



function App() {
    const [cart, setCart] = useState([]);

    const loadCart = async () => {
        const response = await axios.get("/api/cart-items?expand=product");
        setCart(response.data);
    }

    useEffect(() => {
        loadCart();
    })
    return (
        <Routes>
              <Route index element={<HomePage cart={cart} loadCart={loadCart()}/>} />

              <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart()}/>} />

              <Route path= "orders" element={<OrdersPage cart={cart} />} />

              <Route path="tracking" element={<TrackingPage />} />
        </Routes>
  )
}

export default App