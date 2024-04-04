import React from 'react'

export default function Header() {
  return (
    <header>
        <div class="announcement-bar text-center bg-img uppercase">
            <div class="container">
                <p>FREE EXPRESS SHIPPING on ORDERS OVER $150</p>
            </div>
        </div>  
        <div class="header-style-one">
            <div class="container">
                <div class="header-wrp flex align-center justify-between">
                    <div class="mob_toggle mobile-only">
                        <div class="toggle_btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="header-left flex align-center">
                        <div class="header-Logo flex">
                            <a href="index.html">
                                <img src="img/BA_Logo.svg" alt=""/>
                            </a>
                        </div>
                        <div class="menu-wrp desk-only">
                            <ul class="flex capitalize">
                                <li>
                                    <a href="shop-landing.html">shop</a>
                                </li>
                                <li>
                                    <a href="#">Ceremonial</a>
                                </li>
                                <li>
                                    <a href="bespoke.html">Bespoke</a>
                                </li>
                                <li>
                                    <a href="collection.html">Collections</a>
                                </li>
                                <li>
                                    <a href="journal-landing.html">Journal</a>
                                </li>
                                <li>
                                    <a href="sustainability.html">Sustainability</a>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="header-right">
                        <ul class="social-media flex align-center">
                            <li class="whishlist-wrp desk-only">
                                <a href="#">
                                    <img src="img/wishlist.svg" alt="wishlist" />
                                </a>
                            </li>
                            <li class="search-wrp">
                                <a href="#">
                                    <img src="img/Search.svg" alt="Search" />
                                </a>
                            </li>
                            <li class="user-wrp desk-only">
                                <a href="#">
                                    <img src="img/User.svg" alt="user-icon" />
                                </a>
                            </li>
                            <li class="cart-wrp">
                                <a href="#">
                                    <img src="img/shopping-bag.svg" alt=""/>
                                    <p>(<span class="count">0</span>)</p>
                                </a>
                            </li>
                            <li class="aud-dropdown flex align-center desk-only">
                                <span>$AUD</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <section class="search-bar">
            <div class="overlay"></div>
            <div class="search-bar-inner flex align-center">
                <div class="container">
                    <div class="search-bar-wrp">
                        <form action="post" class="search-form flex align-center justify-between">
                            <input type="search" name="" id="search-bar" placeholder="Type to search"/>
                            <span class="close-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22"
                                    fill="none">
                                    <path d="M2 2L19.6777 19.6777" stroke="black" stroke-width="2.3"
                                        stroke-linecap="round">
                                    </path>
                                    <path d="M2 20L19.6777 2.32233" stroke="black" stroke-width="2.3"
                                        stroke-linecap="round">
                                    </path>
                                </svg>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </header>
  )
}
