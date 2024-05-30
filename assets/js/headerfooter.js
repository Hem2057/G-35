class specialHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = 
     <header class="header" id="header">
        <nav class="nav container">
            <a href="index.html" class="nav__logo">
                <img src="assets/img/logo-1.png" alt="">
            </a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item"><a href="index.html" class="nav__link active-link">Home</a></li>
                    <li class="nav__item"><a href="shop.html" class="nav__link">Shop</a></li>
                    <li class="nav__item"><a href="about.html" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="blog.html" class="nav__link">Blog</a></li>
                    <li class="nav__item"><a href="faq.html" class="nav__link">Faq's</a></li>
                    <li class="nav__item"><a href="contact.html" class="nav__link">Contact</a></li>
                </ul>
                <div class="nav__close" id="nav-close"><i class="bx bx-x"></i></div>
            </div>
            <div class="nav__btns">
                <div class="login__toggle" id="login-button"><i class="bx bx-user"></i></div>
                <div class="nav__shop" id="cart-button"><i class="bx bx-shopping-bag"></i><span id="product-count">0</span></div>
                <div class="nav__toggle" id="nav-toggle"><i class="bx bx-grid-alt"></i></div>
            </div>
        </nav>
    </header>

    <div class="cart-tab" id="cartShop">
        <h1>Cart</h1>
        <div class="empty-cart-message" id="empty-cart-message" style="display: none;">
            <img src="assets/img/cover-cart.png" alt="Empty Cart" />
            <p>Your cart is empty</p>
            <button class="addcart" id="shop-now-button">Shop Now</button>
        </div>
        <div class="listcart"></div>
        <div class="total-price" id="total-price"><span>$l0.00</span></div>
        <div class="btn">
            <button class="exit" id="cart-close">CLOSE</button>
            <button class="checkout">CHECKOUT</button>
        </div>
    </div>

    <div class="login" id="login">
        <i class="bx bx-x login__close" id="login-close"></i>
        <h2 class="login__title-center">Login</h2>
        <form action="" class="login__form grid">
            <div class="login__content">
                <label for="" class="login__label">Email</label>
                <input type="email" class="login__input">
            </div>
            <div class="login__content">
                <label for="" class="login__label">Password</label>
                <input type="password" class="login__input">
            </div>
            <div><a href="#" class="button">Sign in</a></div>
            <div><p class="signup">Not a member? <a href="registration.html">Sign up now</a></p></div>
        </form>
    </div>

    }
}

customElements.define('special-header', specialHeader ')