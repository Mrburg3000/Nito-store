import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="icon">
          <img
            src="./death.png"
            style={{ width: "32px", cursor: "pointer" }}
          />
          <span>NITO STORE</span>
        </div>

        <div className="header-first">
          <button className="fbutton">Accessibility</button>
          <button className="fbutton">Product Guide</button>
          <button className="fbutton">Track your order</button>
          <button className="fbutton">help</button>
          <button className="fbutton">Join us</button>
          <button className="fbutton">login</button>
        </div>
      </div>

      <div className="header-second">
        <div className="dropdown">
          <button className="dropbtn">
            Sales
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Our Products</a>
            <a href="#">Accessories</a>
            <a href="#">Other Stuff</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            News
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">This Week</a>
            <a href="#">This Month</a>
            <a href="#">This Year</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            For Men
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Shirts</a>
            <a href="#">Pants</a>
            <a href="#">Shoes</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            For Women
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Dresses</a>
            <a href="#">Tops</a>
            <a href="#">Purses</a>
          </div>
        </div>
        
        <div className="search-container">
          <form>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="search-input"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
