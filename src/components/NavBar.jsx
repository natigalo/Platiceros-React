import React from 'react';
import logoImage from '../assets/images/Logo - Platiceros/Platiceros  - Variaciones para redes.png';
import menuIcon from '../assets/icons/icon_menu.svg';
import shoppingCartIcon from '../assets/icons/icon_shopping_cart.svg';
import  '../assets/css/general.css';
import '../assets/css/home.css';

const Navbar = () => {
  return (
    <nav className=''>
      <img src={menuIcon} alt="menu" className="menu" />

      <div className="navbar-left">
        <a href="./home.html">
          <img src={logoImage} alt="logo" className="logo" />
        </a>
        <ul>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="catalogue.html"> Catalogue </a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">
            <div id="flag-container">
              <img id="flag-image" src="" alt="Country Flag" />
            </div>
          </li>
          <li className="navbar-shopping-cart">
            <a href="cart.html">
              <img src={shoppingCartIcon} alt="shopping cart" />
            </a>
            <div>0</div>
          </li>
        </ul>
      </div>

      <div className="mobile-menu inactive">
        <ul>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="catalogue.html"> Catalogue </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
