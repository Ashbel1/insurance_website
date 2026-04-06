import React from 'react'
import { Link } from 'react-router-dom'


const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="content-area clearfix">
                <div className="contact-info">
                    <ul>
                        <li>Are you redy to change the game? <Link to="/contact">Contact us</Link></li>
                        <li>Ph:  02154647231</li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                        <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                        <li><Link to="/"><i className="ti-linkedin"></i></Link></li>
                        <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                        <li><Link to="/"><i className="ti-vimeo-alt"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;