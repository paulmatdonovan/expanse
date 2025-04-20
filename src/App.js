import "./App.css";
import { React, useState } from "react";
import Card from "./Card/Card";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import jeans from "../src/Assets/Cadini (1).jpg";
import jeans2 from "../src/Assets/jeans7.jpg";

import shirt from "../src/Assets/Shirt (2).jpg";
import shirt2 from "../src/Assets/Shirt (1).jpg";

import suit1 from "../src/Assets/Cadini (3).jpg";
import suit2 from "../src/Assets/Suit.jpeg.jpg";

import tshirt from "../src/Assets/Cadini (6).jpg";
import tshirt2 from "../src/Assets/IMG_5889.jpg";

import suit4 from "../src/Assets/IMG_59251.jpg";
import suit3 from "../src/Assets/light blue (2).jpg";
import ProductPage from "./Pages/ProductPage";
import polo1 from "../src/Assets/Polo3.jpg";
import polo2 from "../src/Assets/Black polo.jpg";

import jumper1 from "../src/Assets/per (1).jpg";
import jumper2 from "../src/Assets/per (3).jpg";

// import suit3 from "../src/Assets/";

function App() {
    const [products] = useState([
        {
            id: 1,
            name: "Cadini Italian Crafted Dress Shirt",
            description: `Elevate your wardrobe with the timeless sophistication of the Cadini Dress Shirt, a masterpiece of Italian craftsmanship. Available in classic blue and crisp white, this shirt is designed to complement any occasion, from formal meetings to refined social gatherings.
Crafted in Italy by Cadini, this dress shirt is made from 100% premium cotton, ensuring unparalleled softness, breathability, and durability. 
The quality design makes this shirt a versatile staple for the modern gentleman. Whether paired with a tailored suit for a sharp professional look or dressed down with chinos for a smart-casual vibe, the Cadini Dress Shirt is the epitome of understated elegance.
Experience the perfect blend of comfort, quality, and Italian artistry. Choose your shade—blue for a touch of sophistication or white for timeless purity—and make a statement with every wear. Step into luxury. Step into Cadini.`,
            price: 179.99,
            currency: "AUD",
            sizes: ["40", "42"],
            imageUrl: shirt,
            imageUrl2: shirt2,
        },
        {
            id: 2,
            name: "Cadini Dark Blue Men's Regular Fit Jeans",
            description: `Discover the perfect blend of rugged durability and refined style with Cadini Dark Blue Denim Jeans. Crafted for the modern man who values both comfort and sophistication, these jeans are designed to effortlessly transition from casual outings to smart-casual ensembles.

Available in sizes 33, these jeans feature Cadini's iconic horse logo brand on the pockets, a signature detail that speaks to the brand's heritage of quality and craftsmanship. The dark blue denim offers a versatile, polished look that pairs seamlessly with a casual blazer for a refined vibe, a polo shirt for a laid-back yet put-together aesthetic, or a simple t-shirt for everyday ease.

Made from premium denim fabric, Cadini jeans are as comfortable as they are stylish. The soft yet durable material ensures all-day ease, while the tailored fit flatters your silhouette, making them a wardrobe essential for any occasion.


Comfortable and stylish premium denim fabric pairs effortlessly with casual blazers, polos, or t-shirts. Step up your denim game with Cadini Jeans.`,
            price: 160.0,
            old_price: 170.0,
            sizes: ["33"],
            currency: "AUD",
            imageUrl: jeans,
            imageUrl2: jeans2,
        },
        {
            id: 3,
            name: "Cadini Navy Blue Windowpane Suit",
            description: `Cadini Navy Blue Windowpane Suit
This elegant Cadini suit is crafted from 100% premium Italian wool, ensuring exceptional quality, durability, and a luxurious feel. The fabric is lightweight yet warm, making it perfect for both formal and semi-formal occasions.
The suit features a classic navy blue base with a subtle windowpane pattern, adding a touch of sophistication and visual interest. The windowpane design is understated yet distinctive, making it versatile for business meetings, weddings, or upscale events.
Tailored in size 48, this suit offers a modern, fitted silhouette that exudes confidence and style. As a product made in Italy, it reflects the finest craftsmanship and attention to detail, synonymous with Italian tailoring.
Ideal for the discerning gentleman, this Cadini suit combines timeless design with contemporary elegance, making it a standout addition to any wardrobe.
`,
            price: 850.0,
            currency: "AUD",
            sizes: ["48"],
            imageUrl: suit1,
            imageUrl2: suit2,
        },
        {
            id: 4,
            name: "Cadini T-shirt",
            description: `Effortless Italian Elegance: Cadini Cotton T-Shirt

Introducing the Cadini Cotton T-Shirt, a perfect fusion of comfort, style, and Italian craftsmanship. Available in soft, soothing shades of pale blue and delicate pink, this t-shirt is designed to elevate your casual wardrobe with understated sophistication.

Made in Italy by Cadini, this t-shirt is crafted from 100% premium cotton, ensuring a luxuriously soft feel against your skin and exceptional breathability for all-day comfort. The fabric's lightweight quality and impeccable finish make it ideal for layering or wearing on its own, offering versatility for any casual occasion.

Featuring the distinctive Cadini station insgina as a subtle yet signature detail, this t-shirt embodies the brand's commitment to quality and timeless style. Whether paired with Cadini jeans for a coordinated look, dressed down with shorts for a relaxed vibe, or layered under a blazer for a smart-casual ensemble, this t-shirt is a must-have staple.

Key Features:

Made in Italy by Cadini

100% premium cotton for unmatched softness and comfort

Available in soft pink

Features the iconic Cadini station insgina 

Versatile design perfect for casual or layered looks.

`,
            price: 99.0,
            currency: "AUD",
            sizes: ["M"],
            imageUrl: tshirt,
            imageUrl2: tshirt2,
        },
        {
            id: 5,
            name: "GIANMARCO VENTURI 100% Cotton Polo Shirt",
            description:
                "Upgrade your wardrobe with this GIANMARCO VENTURI Polo Shirt - the perfect blend of style and comfort! Made from premium piqué cotton for breathability and durability. Available in Blue or Black.",
            price: 130.0,
            currency: "AUD",
            sizes: ["M"],
            imageUrl: polo1,
            imageUrl2: polo2,
        },
        {
            id: 6,
            name: "Cadini Made in Italy Medium Blue Single-Breasted Suit",
            description: `Elevate your wardrobe with this impeccably tailored single-breasted suit, expertly crafted from 100% premium Italian wool. Designed for both sophistication and comfort, this lightweight suit features a refined medium blue with a subtle pinstripe, making it a versatile choice for business or formal occasions. Details: * Fabric: 100% Italian wool (lightweight) * Color: Medium blue with thin pinstripe * Fit: Classic single-breasted design * Size: 38R. Handmade with precision, this suit embodies timeless elegance and superior craftsmanship. Limited availability—contact us today to secure yours!
`,

            price: 875.0,
            sizes: ["38"],

            currency: "AUD",
            imageUrl: suit4,
            imageUrl2: suit3,
        },
        {
            id: 7,
            name: "Button-up jumper by EXIBIT - 100% Made in Italy ",
            description: `Crafted in Italy from 100% lightweight wool, this light brown EXIBIT jumper offers refined style and breathable comfort. Featuring a classic button-up design in a versatile light brown shade, it's perfect for layering or wearing on its own. Ideal for smart-casual looks all year round.`,
            price: 150.0,
            currency: "AUD",
            sizes: ["M"],
            imageUrl: jumper1,
            imageUrl2: jumper2,
        },
    ]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Card products={products} />} />
                <Route
                    path="/product/:productId"
                    element={<ProductPage products={products} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
