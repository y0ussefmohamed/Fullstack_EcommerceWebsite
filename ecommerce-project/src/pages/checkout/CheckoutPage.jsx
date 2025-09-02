import './CheckoutPage.css'
import './checkout-header.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {CheckoutHeader} from "../../components/CheckoutHeader.jsx";
import {OrderSummary} from "./OrderSummary.jsx";
import {PaymentSummary} from "./PaymentSummary.jsx";

export function CheckoutPage({cart, loadCart}) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState([]);

    useEffect(() => {
        const getDeliveryOptions = async () => {
            const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
            setDeliveryOptions(response.data);
        }

        const getPaymentSummary = async () => {
            const response = await axios.get("/api/payment-summary");
            setPaymentSummary(response.data);
        }

        getDeliveryOptions();
        getPaymentSummary();
    }, [cart])

    return (
        <>
            <CheckoutHeader cart={cart}/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart}/>

                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
                </div>
            </div>
        </>
    );
}