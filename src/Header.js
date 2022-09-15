import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links on the right */}
      <div className="header__nav">

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Leaf,</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      {/* basket icon that tells you how much in your cart*/}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* shopping basket icon */}
          <ShoppingBasketIcon />
          {/* have the number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </Link>
      </div>
    </nav>
  );
}

export default Header;
