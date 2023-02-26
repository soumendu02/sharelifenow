import React, { Component } from 'react'
import './Styling.css'
export class Header extends Component {
  render() {
    return (
    <div>
        <header>
        <div className="logo">
            <h1 className="logo_text"><span className="begin">ShareLIFE</span><span className="later">now</span></h1>
            
        </div>
        
        <i className="fa fa-bars menu_toggle"></i>
        <ul className="nav">
            <li><a href="#">Home</a>
            </li>
            <li><a href="#">About</a></li>

            <li>
                
                <ul>
                    <li><a href="#" className="dashboard">Dashboard</a></li>
                    <li><a href="#" className="logout">Logout</a></li>
                </ul>
            </li>
        </ul>
    </header>
  </div>
    )
  }
}

export default Header