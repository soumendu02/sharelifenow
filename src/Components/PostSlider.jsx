import React, { Component } from "react";
import "./Styling.css";
export class PostSlider extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://pluspng.com/img-png/blood-donation-png-hd-enfield-backs-blood-donation-campaign-3600.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://organdonor.in/wp-content/uploads/2017/08/slide5.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://organdonor.in/wp-content/uploads/2017/08/slide5.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
        </div> 
        
      </div>
    );
  }
}

export default PostSlider;
