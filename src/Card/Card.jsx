import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import jeans from '../Assets/Jeans (1).jpg'
import shirt from '../Assets/CAMICISSIMA_White_Linen_Shirt_Collar_Final__32771.jpg'
import suit1 from '../Assets/suit1.jpg'
import shirt1 from '../Assets/Polo3.jpg'

const Card = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Premium Men's Shirt",
      description: "High-quality linen shirt for a sleek and modern look.",
      price: 179.99,
      currency: "AUD",
      imageUrl: shirt,
    },
    {
      id: 2,
      name: "Classic Men's Jeans",
      description: "Durable and stylish jeans for everyday wear.",
      price: 159.99,
      currency: "AUD",
      imageUrl: jeans,
    },
    {
      id: 3,
      name: "BUGATTI Grey / Brown Suit",
      description: "Single breasted suit. Made in Italy. This suit is made from 100% Pure Wool so it will look great from day one and still hold its shape for years.",
      price: 650.00,
      currency: "AUD",
      imageUrl: suit1,
    },
    {
      id: 3,
      name: "GIANMARCO VENTURI Polo Shirt Navy Blue",
      description: "Upgrade your wardrobe with this GIANMARCO VENTURI Navy Blue Polo Shirt - the perfect blend of style and comfort! Made from premium piqué cotton for breathability and durability.",

      price: 130.00,
      currency: "AUD",
      imageUrl: shirt1,
    },
  ]);

  const createOrder = (product) => (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: product.price,
            currency_code: "AUD",          },
          description: product.description, // Optional: Add product description
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
    <PayPalScriptProvider options={{ "client-id": "ARONvZGigACXb-99ytAKPoF-UBvx6dFXzMSiO-QnSgkNFpObnSZham6aKo3UefFjb0t8mQZKxBWGZxgx",  currency: "AUD" }}>
    
      
      <div className="store-page">
        <div className="header"> <h1>Expanse Menswear</h1></div>
      <div style={styles.store}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.imageUrl} alt={product.name} style={styles.image} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price} {product.currency}</p>
            <PayPalButtons
              createOrder={createOrder(product)}
              onApprove={onApprove}
            />
          </div>
        ))}
      </div>
      <div className="about-us">
        <h1>About us</h1>
        <p>We are a small store in Nhill Victoria. Our aim is to bring the finest Italian menswear to the Wimmera region and the people in Nhill. </p><p>As we are new, we only have limited stock at this stage.</p> <p>Feel free to reach out and contact me if you have any questions or would like to order anything in your size.</p>
      </div>

      </div>
     
    </PayPalScriptProvider>
  );
};

const styles = {
  store: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '16px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
  },
  image: {
    width: "80%",
    maxHeight: '50%',
    borderRadius: '8px',
    marginBottom: '16px',
  },
};

export default Card;