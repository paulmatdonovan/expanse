import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import "./Card.css"; // Import the CSS file for styling

const Card = ({ products }) => {
    const [selectedSizes, setSelectedSizes] = useState({}); // Track selected sizes

    const handleSizeChange = (productId, size) => {
        setSelectedSizes((prev) => ({
            ...prev,
            [productId]: size,
        }));
    };

    const createOrder = (product) => (data, actions) => {
        const selectedSize = selectedSizes[product.id];
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: product.price,
                        currency_code: "AUD",
                    },
                    description: `${product.name} (Size: ${selectedSize})`,
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
            console.log("Payment details:", details);
        });
    };

    return (
        <PayPalScriptProvider
            options={{
                "client-id":
                    "ARONvZGigACXb-99ytAKPoF-UBvx6dFXzMSiO-QnSgkNFpObnSZham6aKo3UefFjb0t8mQZKxBWGZxgx",
                currency: "AUD",
            }}
        >
            <div className="store-page">
                <div className="header">
                    <h1>Expanse Menswear</h1>
                </div>
                <div className="store">
                    {products.map((product) => (
                        <div key={product.id} className="card">
                            <Link to={`product/${product.id}`} className="link">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="image"
                                />
                                <h2>{product.name}</h2>
                                <p>
                                    Price: ${product.price} {product.currency}
                                </p>
                            </Link>
                            <div className="sizeSelection">
                                <label>Select Size:</label>
                                <select
                                    value={selectedSizes[product.id] || ""}
                                    onChange={(e) =>
                                        handleSizeChange(
                                            product.id,
                                            e.target.value
                                        )
                                    }
                                    className="sizeDropdown"
                                >
                                    <option value="" disabled>
                                        Choose a size
                                    </option>
                                    {product.sizes.map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="paypalButton">
                                <PayPalButtons
                                    createOrder={createOrder(product)}
                                    onApprove={onApprove}
                                    disabled={!selectedSizes[product.id]} // Disable if no size is selected
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="about-us">
                    <h1>About us</h1>
                    <p>
                        We are a small store in Nhill Victoria. Our aim is to
                        bring the finest Italian menswear to the Wimmera region
                        and the people in Nhill.
                    </p>
                    <p>
                        As we are new, we only have limited stock at this stage.
                    </p>
                    <p>
                        Feel free to reach out and contact me if you have any
                        questions or would like to order anything in your size.
                    </p>
                </div>
            </div>
        </PayPalScriptProvider>
    );
};

export default Card;
