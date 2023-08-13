import React from "react";
 import  { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/sell-zone.png";
import {IoMdSearch } from "react-icons/io"
import{ IoMdCart} from "react-icons/io"
import {IoMdPerson} from "react-icons/io"


const Header = () => {
   return (<ReactNavbar
    burgerColor="rgb(39,55,77)"
    burgerColorHover="rgb(165, 201, 202)"
    
    logo={logo}
    logoWidth="20vmax"
    navColor1="#DDE6ED"
    logoHoverSize= "10px"
    logoHoverColor= "#525FE1"
    link1Text= "Home"
    link2Text ="Products"
    link3Text="Contact"
    link4Text= "About"
    searchIcon={true}
    SearchIconElement={IoMdSearch}
    
    cartIcon={true}
    CartIconElement={IoMdCart}
    

    profileIcon={true}
    ProfileIconElement={IoMdPerson}
    

    link1Url="/"
    link2Url= "/products"
    link3Url= "/contact"
    link4Url= "/about"
    link1Size= "1.3vmax"
    link1Padding="10px"
    
    link1Color= "rgb(39,55,77,0.8)"
    nav1justifyContent= "flex-end"
    nav2justifyContent= "flex-end"
    nav3justifyContent= "flex-start"
    // nav4justifyContent="flex-start"
    link1ColorHover= "rgb(165, 201, 202)"
    link1Margin= "1vmax"
    profileIconUrl= "/login"
    cartIconMargin= "1vmax"
    searchIconUrl	="/search"
    cartIconUrl=	"/cart"

    profileIconColor= "rgba(39, 55, 77,0.8)"
  searchIconColor="rgba(39, 55, 77,0.8)"
  cartIconColor= "rgba(39, 55, 77,0.8)"
  profileIconColorHover= "rgb(165, 201, 202)"
  searchIconColorHover= "rgb(165, 201, 202)"
  cartIconColorHover= "rgb(165, 201, 202)"
  
  
    />

  );

};
 
 export default Header;