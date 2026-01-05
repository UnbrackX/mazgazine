import React from 'react'
import "./Hero.css"

// Import img
import hero_img from "./hero_img.png"

const Hero = () => {
  return (
    <section className="hero-section">
        <div className="container">
            <div className="hero__content">
                <div className="hero__list">
                <ul>
                    <li>Woman’s Fashion ></li>
                    <li>Men’s Fashion ></li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </div>

            <div className="hero__img">
                <img src={hero_img} alt="hero image" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
