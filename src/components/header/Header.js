import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import { totalPrice } from "../../utils";

const Header = (props) => {
    const [cartActive, setcartState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts = [] } = props;

    return (
        <header id="header" className={`site-header ${props.hclass}`}>
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="navbar-header">
                        <MobileMenu />
                        <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo} alt="Genfin Medical Aid Fund Logo" /></Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                        <button className="close-navbar"><i className="ti-close"></i></button>
                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                            <li>
                                <Link onClick={ClickHandler} to="/">Home</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/services">Services</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/plans_packages">Plans and Packages</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/about">About</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/terms">Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {props.hideCartIconOnly ? (
                      <div className="cart-search-contact">
                        <div className="mini-cart">
                          <button className="cart-toggle-btn" style={{pointerEvents:'none',background:'none',border:'none'}}>
                            <i className="fi flaticon-shopping-bag-3"></i>
                            <span className="cart-count">{carts.length}</span>
                          </button>
                        </div>
                      </div>
                    ) : !props.hideCart && (
                      <div className="cart-search-contact">
                        <div className="mini-cart">
                            <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                <i className="fi flaticon-shopping-bag-3"></i>
                                <span className="cart-count">{carts.length}</span>
                            </button>
                            <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                <div className="mini-cart-items">
                                    {carts &&
                                        carts.length > 0 &&
                                        carts.map((catItem, crt) => (
                                            <div className="mini-cart-item clearfix" key={crt}>
                                                <div className="mini-cart-item-image">
                                                    <span>
                                                        <img src={catItem.proImg} alt="icon" />
                                                    </span>
                                                </div>
                                                <div className="mini-cart-item-des">
                                                    <p>{catItem.title} </p>
                                                    <span className="mini-cart-item-price">
                                                        ${catItem.price} x {catItem.qty}
                                                    </span>
                                                    <span className="mini-cart-item-quantity">
                                                        <button
                                                            onClick={() =>
                                                                props.removeFromCart(catItem.id)
                                                            }
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            <i className="ti-close"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="mini-cart-action clearfix">
                                    <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                    <div className="mini-btn">
                                        <Link to="/cart" className="view-cart-btn">View Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    )}
                </div> {/* Close .container */}
            </nav>
        </header>
    );
}

export default Header;
