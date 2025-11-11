import React from "react";
import "../App.css";
import sakariasImg from "../assets/sakaria-chair.png";
import baltsarImg from "../assets/baltstar-chair.png";
import anjayImg from "../assets/anjay-chair.png";
import nyantuyImg from "../assets/nyantuy-chair.png";

const BestSelling = () => {
  const products = [
    {
      id: 1,
      title: "Sakarias Armchair",
      category: "Chair",
      price: "$392",
      img: sakariasImg,
      rating: 5,
    },
    {
      id: 2,
      title: "Baltsar Chair",
      category: "Chair",
      price: "$299",
      img: baltsarImg,
      rating: 5,
    },
    {
      id: 3,
      title: "Anjay Chair",
      category: "Chair",
      price: "$519",
      img: anjayImg,
      rating: 5,
    },
    {
      id: 4,
      title: "Nyantuy Chair",
      category: "Chair",
      price: "$921",
      img: nyantuyImg,
      rating: 5,
    },
  ];

  return (
    <section className="best-selling">
      <div className="container">
        <h2 className="section-title">Best Selling Product</h2>

        <div className="category-tabs">
          <button className="active">Chair</button>
          <button>Beds</button>
          <button>Sofa</button>
          <button>Lamp</button>
        </div>

        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.img} alt={p.title} />
              <div className="product-info">
                <p className="category">{p.category}</p>
                <h3>{p.title}</h3>
                <div className="stars">
                  {"★".repeat(p.rating)}
                </div>
                <div className="price-add">
                  <p className="price">{p.price}</p>
                  <button className="add-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button href="#" className="view-all">View All →</button>
      </div>
    </section>
  );
};

export default BestSelling;
