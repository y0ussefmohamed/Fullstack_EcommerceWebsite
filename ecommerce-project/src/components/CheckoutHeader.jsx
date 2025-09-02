import {Link} from 'react-router';
import './header.css'

export function CheckoutHeader({cart}) {
    let totalQuantity = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity;
    })
    return (
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src="../public/images/logo.png"/>
                            <img className="mobile-logo" src="../public/images/mobile-logo.png"/>
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link to="/" className="return-to-home-link">{totalQuantity} Items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="../public/images/icons/checkout-lock-icon.png"/>
                    </div>
                </div>
            </div>
        </>
    );
}

