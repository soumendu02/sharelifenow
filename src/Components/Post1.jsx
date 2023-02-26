import React, { Component } from 'react'

export class Post1 extends Component {
  render() {
    return (
      <div>
        <header>
        <div className="logo">
            <h1 className="logo_text"><span className="begin">ShareLIFE</span><span className="later">now</span></h1>
        </div>
        <i className="fa fa-bars menu_toggle"></i>
        <ul className="nav">
            <li><a href="blog_website.html">Home</a>
            </li>
            <li><a href="#">About</a></li>
            <li>
                <a href="#">
                    <i className="fa fa-user"></i>User
                    <i className="fa fa-chevron-down"></i>
                </a>
                <ul>
                    <li><a href="#" className="dashboard">Dashboard</a></li>
                    <li><a href="#" className="logout">Logout</a></li>
                </ul>
            </li>
        </ul>
    </header>
    <div className="content clearfix">

        <div className="main_content single">
            <h1 className="post_title">FDA's tobacco unit pledges reset</h1>
            <div className="post single">
                <img src="https://etimg.etb2bimg.com/photo/98235462.cms" alt=""/>
                <p>Smoking leads to disease and disability and harms nearly every organ of the body.
                    More than 16 million Americans are living with a disease caused by smoking. For every person who dies because of smoking, at least 30 people live with a serious smoking-related illness. Smoking causes cancer, heart disease, stroke, lung diseases, diabetes, and chronic obstructive pulmonary disease (COPD), which includes emphysema and chronic bronchitis. Smoking also increases risk for tuberculosis, certain eye diseases, and problems of the immune system, including rheumatoid arthritis.
                    Secondhand smoke exposure contributes to approximately 41,000 deaths among nonsmoking adults and 400 deaths in infants each year. Secondhand smoke causes stroke, lung cancer, and coronary heart disease in adults. Children who are exposed to secondhand smoke are at increased risk for sudden infant death syndrome, acute respiratory infections, middle ear disease, more severe asthma, respiratory symptoms, and slowed lung growth.</p>
            </div>
        </div>
        </div>
        </div>
    )
  }
}

export default Post1