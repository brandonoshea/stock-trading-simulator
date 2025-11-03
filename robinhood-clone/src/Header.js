import React from 'react'
import Logo from './robinhood.svg'
import './Header.css'
function Header() {
  return (
    <div className = "headerwrapper">
        {/* logo */}
        <div className = "header_logo">
            <img src = {Logo} width = {25} />
        </div>
        {/* Search */}
        <div className = "header__search">
            <div className = "header__searchContainer">
                <input placeholder = "Search" type = "text" />

                
            </div>

        </div>
        {/* Menu Items */}
        <div className = "menu__items">
            <a href='#'>Free Stocks</a>
            <a href='#'>Portfolio</a>
            <a href='#'>Cash</a>
            <a href='#'>Messages</a>
            <a href='#'>Account</a>
        </div>
    </div>
  )
}

export default Header
