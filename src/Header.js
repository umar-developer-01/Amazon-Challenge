import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Header.css"


function Header() {
 const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
    <div className="header">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="" />
      <div className="header__search">
        <input className="header__searchInput" type="text"/>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
         <div className="header__option">
            <span className="header__optionLineOne">
               Hello Guest
            </span>
            <span className="header__optionLineTwo">
               Sign In
            </span>
         </div>

         <div className="header__option">
            <span className="header__optionLineOne">
               Return
            </span>
            <span className="header__optionLineTwo">
               Orders
            </span>
         </div>


         <div className="header__option">
            <span className="header__optionLineOne">
               Your 
            </span>
            <span className="header__optionLineTwo">
               Prime
            </span>
         </div>

         <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
         </div>
      </div>
   
    </div>
    </>
  )
}

export default Header