import React from "react";
import "../App.css";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Bunga Uplin",
      review:
        "“Materials are luxurious, the service is excellent. Truly makes my home stand out.”",
      img: user1,
    },
    {
      id: 2,
      name: "Rosk Sujatm",
      review:
        "“Panto's furniture designs bring balance and elegance. I love every piece!”",
      img: user2,
    },
    {
      id: 3,
      name: "Myok Inyo",
      review:
        "“I’m so happy with the premium quality and minimalist look. Highly recommend!”",
      img: user3,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <p className="tag">TESTIMONIALS</p>
        <h2 className="section-title">Our Client Reviews</h2>

        <div className="testimonial-grid">
          {reviews.map((r) => (
            <div className="testimonial-card" key={r.id}>
              <img src={r.img} alt={r.name} />
              <p className="review">{r.review}</p>
              <h4>{r.name}</h4>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
