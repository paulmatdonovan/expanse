import './App.css';
import {React, useState} from 'react';
import Card from './Card/Card';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import jeans from '../src/Assets/Cadini (5).jpg'
import shirt from '../src/Assets/Cadini (5).jpg'
import suit1 from '../src/Assets/Cadini (5).jpg'
import shirt1 from '../src/Assets/Cadini (5).jpg'
import shirt2 from '../src/Assets/Cadini (5).jpg'
import suit4 from '../src/Assets/Cadini (5).jpg'

function App() {

  const [products] = useState([
      {
        id: 1,
        name: "Premium Men's Shirt",
        description: "High-quality linen shirt for a sleek and modern look.",
        price: 179.99,
        currency: "AUD",
        sizes: ["56","48"] ,
        imageUrl: shirt,
      },
      {
        id: 2,
        name: "CAMICISSIMA Dark Blue Men's Regular Fit Jeans",
        description: "Dark wash regular fit jeans in a classic 5 pocket style. The stretch denim will ensure both comfort and style as you go about your day to day tasks. Made in Italy.",
        price: 160.00,
        old_price: 170.00,
        sizes: ["56","48"] ,
        currency: "AUD",
        imageUrl: jeans,
        imageUrl2: jeans,
  
      },
      {
        id: 3,
        name: "Cadini Navy Blue Windowpane Suit",
        description: "Single breasted suit. Made in Italy. This suit is made from 100% Pure Wool so it will look great from day one and still hold its shape for years.",
        price: 650.00,
        currency: "AUD",
        sizes: ["50","48"] ,
        imageUrl: suit1,
        imageUrl2: suit1,
  
      },
      {
        id: 3,
        name: "GIANMARCO VENTURI Polo Shirt Navy Blue",
        description: "Upgrade your wardrobe with this GIANMARCO VENTURI Navy Blue Polo Shirt - the perfect blend of style and comfort! Made from premium piqué cotton for breathability and durability.",
        price: 130.00,
        currency: "AUD",
        sizes: ["M","L"] ,
        imageUrl: shirt1,
      },
      {
        id: 4,
        name: "GIANMARCO VENTURI Polo Shirt Beige",
        description: "Upgrade your wardrobe with this GIANMARCO VENTURI Beige Polo Shirt - the perfect blend of style and comfort! Made from premium piqué cotton for breathability and durability.",
        price: 130.00,
        currency: "AUD",
        sizes: ["M","L"] ,
        imageUrl2: shirt2,
        imageUrl: shirt2,
      },
      {
        id: 5,
        name: "MANUEL RITZ Navy Blue Pure Wool Suit",
        description: "Single breasted navy blue wool suit. Window pane pattern fabric. Summer weight. Working button cuffs. Notched lapel. Regular fit. 100% wool. Made in Italy.",
  
        price: 850.00,
        sizes: ["48","50","52"] ,
  
        currency: "AUD",
        imageUrl: suit4,
        imageUrl2: suit4,
  
      },
      
  
    ]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card products={products}/>}/>
         
      </Routes>
    </Router>

  );
}

export default App;
