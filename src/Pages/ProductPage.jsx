// ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const ProductPage = ({ products }) => {
  const { productId } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(productId)); // Find the product

  if (!product) {
    return <div>Product not found</div>;
  }

  const createOrder = (product) => (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: product.price,
            currency_code: "AUD",
          },
          description: product.description,
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
    <PayPalScriptProvider options={{ "client-id": "ARONvZGigACXb-99ytAKPoF-UBvx6dFXzMSiO-QnSgkNFpObnSZham6aKo3UefFjb0t8mQZKxBWGZxgx", currency: "AUD" }}>
      <div style={styles.productPage}>
        <h1>{product.name}</h1>
        <div style={styles.imageContainer}>
          <img src={product.imageUrl} alt={product.name} style={styles.image} />
          <img src={product.imageUrl2} alt={product.name} style={styles.image} /> {/* Second image */}
        </div>
        <p>{product.description}</p>
        <p>Price: ${product.price} {product.currency}</p>
        <PayPalButtons
          createOrder={createOrder(product)}
          onApprove={onApprove}
        />
      </div>
    </PayPalScriptProvider>
  );
};

const styles = {
  productPage: {
    padding: '20px',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '16px',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default ProductPage;