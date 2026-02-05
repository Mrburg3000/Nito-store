import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="columns"> 
          <div className="column">
            <h3>Find a Nito Store</h3>
            <ul>
              <li><a href="#">Register to receive news</a></li>
              <li><a href="#">Black friday nito</a></li>
              <li><a href="#">Gift card</a></li>
              <li><a href="#">Site map</a></li>
              <li><a href="#">Products guide</a></li>
              <li><a href="#">Piromancy</a></li>
              <li><a href="#">Track your order</a></li>
              <li><a href="#">Corporate sales</a></li>
            </ul>
          </div>

          <div className="column">
            <h3>Help</h3>
            <ul>
              <li><a href="#">General questions</a></li>
              <li><a href="#">Find your size</a></li>
              <li><a href="#">Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payments</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Report a problem</a></li>
            </ul>
          </div>

          <div className="column">
            <h3>About Nito</h3>
            <ul>
              <li><a href="#">Purpose</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">About Nito, Inc.</a></li>
              <li><a href="#">About the group GLS</a></li>
            </ul>
          </div>
        </div>

        <hr className="divider" />

        <div className="bottom">
          <p>
            Lordran |{' '}
            <a href="#">Privacy Policy</a> |{' '}
            <a href="#">Cookies Policy</a> |{' '}
            <a href="#">Terms of Use</a>
          </p>
          <p className="copyright">
            © 2026 Nito. All rights reserved. <br />
            Gwyn Sporting Goods Trade Ltda <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;