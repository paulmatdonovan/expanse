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
          <h1 style={styles.title}>{product.name}</h1>
          <div style={styles.content}>
            <div style={styles.imageContainer}>
              <img src={product.imageUrl} alt={product.name} style={styles.image} />
              <img src={product.imageUrl2} alt={product.name} style={styles.image} />
            </div>
            <div style={styles.details}>
              <p style={styles.description}>{product.description}</p>
              <p style={styles.price}>Price: ${product.price} {product.currency}</p>
              <div style={styles.paypalButton}>
                <PayPalButtons
                  createOrder={createOrder(product)}
                  onApprove={onApprove}
                />
              </div>
            </div>
          </div>
        </div>
      </PayPalScriptProvider>
    );
  };
  
  const styles = {
    productPage: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '2.5rem',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '20px',
      alignItems: 'center',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
      flex: 1,
    },
    image: {
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    details: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    description: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#555',
    },
    price: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333',
    },
    paypalButton: {
      marginTop: '20px',
    },
    // Responsive styles
    '@media (max-width: 768px)': {
      content: {
        flexDirection: 'column',
      },
      imageContainer: {
        flexDirection: 'column',
      },
      image: {
        maxWidth: '100%',
      },
    },
  };


export default ProductPage;