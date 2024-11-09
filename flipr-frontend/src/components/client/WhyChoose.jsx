import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaBrush } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";

const WhyChoose = () => {
  return (
    <>
     <div className="why-choose-us-section">
        <h2 className="heading-choose">Why Choose Us?</h2>
        <div className="icons-container">
          <div className="icon-card">
            <div className="icon-choose blue-background">
              <CiHome />
            </div>
            <h3>Potential ROI</h3>
            <p>
              Whether you're looking to buy a home or renovate your current home
              for sale, we will help you increase value.
            </p>
          </div>

          <div className="icon-card">
            <div className="icon-choose blue-background">
            <FaBrush />
            </div>
            <h3>Design</h3>
            <p>
              Our design services include guiding you through design options and
              assisting in creating your vision.
            </p>
          </div>

          <div className="icon-card">
            <div className="icon-choose blue-background">
            <CiDollar />
            </div>
            <h3>Marketing</h3>
            <p>
              We provide marketing strategies and plans to help you reach
              today's buyers effectively and efficiently.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose