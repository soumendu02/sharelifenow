import React, { Component } from 'react'
import './Styling.css'

export class SideBar extends Component {
  render() {
    return (
      <div>
            <div className="content clearfix">

            <div className="main_content">
                <h1 className="recent_post_title">Articles you may like to read </h1>
                {/* <!--POST--> */}
                <div className="post">
                    <img src='https://etimg.etb2bimg.com/photo/98235462.cms' alt="" className="post_image"/>
                    <div className="post_preview">
                            <h3><a href="">FDA's tobacco unit pledges reset</a></h3>
                            <p className="preview_text">Smoking leads to disease and disability and harms nearly every organ of the body.

                          More than 16 million Americans are living with a disease caused by smoking. For every person who dies because of smoking,.... 
                          </p>
                        <a href="/Post1"className="btn" >Read More</a>
                        </div>
                    </div>
                    {/* <!--POST 2--> */}
                    <div className="post">
                        <img src="https://media.istockphoto.com/id/1268120298/vector/asthma-disease-concept-human-lungs-and-inhaler-for-breathing-chronic-sickness-respiratory.jpg?s=612x612&w=0&k=20&c=YbfmuBQGQgTzjTg5iDTqIJr2_1ES8MJ_nv-puSwnMG4=" alt="" className="post_image"/>
                        <div className="post_preview">
                                <h3><a href="single1.html">Asthma: How air pollutants may increase attacks for children in urban areas</a></h3>
                                <p className="preview_text">Asthma attacks, which involve the worsening of the inflammation and narrowing of the lung airways, are commonly caused by viral respiratory infections but can also be caused by non-viral factors.
                                </p>
                                <a href="" className="btn">Read more</a>
                            </div>
                        </div>
                        {/* <!--POST 3--> */}
                        <div className="post">
                            <img src="https://images.indianexpress.com/2023/02/child-coughing.jpg" alt="" className="post_image"/>
                            <div className="post_preview">
                                    <h3><a href="single2.html">Adenovirus cases spike in West Bengal</a></h3>

                                    <p className="preview_text">As adenovirus cases spike in West Bengal, know more about the symptoms, treatment, and precautions.
                                    </p>
                                    <a href="single2.html" className="btn">Read more</a>
                            </div>
                        </div>
                        {/* <!--POST 4--> */}
                        <div className="post">
                            <img src="https://www.healthshots.com/wp-content/uploads/2020/05/sleeping-19th-may.jpg" alt="" className="post_image"/>
                            <div className="post_preview">
                                    <h3><a href="">Study Finds People With Insomnia Nearly 70% More at Risk for a Heart Attack</a></h3>
                                    
                                    <p className="preview_text">New research indicates that people who have insomnia were 69% more likely to have a heart attack compared to those who didn’t.
                                    </p>
                                    <a href="" className="btn">Read more</a>
                            </div>
                        </div>
            </div>
            </div>
      </div>
    )
  }
}

export default SideBar