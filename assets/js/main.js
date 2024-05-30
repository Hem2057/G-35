document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartClose = document.getElementById('cart-close');
    
    const cartCloseBtn = document.querySelector('.cart-tab .btn .exit');
    const addCartButtons = document.querySelectorAll('.addcart');
    const cartContainer = document.querySelector('.listcart');
    const productCount = document.getElementById('product-count');
    const totalPriceElement = document.getElementById('total-price');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const shopNowButton = document.getElementById('shop-now-button');

    let cartItems = [];

    function updateCart() {
        cartContainer.innerHTML = '';
        let totalPrice = 0;
        let totalQuantity = 0;

        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                <div class="image">
                    <img src="${item.image}" alt="">
                </div>
                <div class="name">
                    ${item.name}
                </div>
                <div class="price">
                    $${item.price}
                </div>
                <div class="quantity">
                    <span class="minus" data-index="${index}">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus" data-index="${index}">+</span>
                </div>
            `;

            cartContainer.appendChild(cartItem);

            totalPrice += item.price * item.quantity;
            totalQuantity += item.quantity;
        });

        productCount.innerText = totalQuantity;
        totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;

        if (cartItems.length === 0) {
            emptyCartMessage.style.display = 'flex';
        } else {
            emptyCartMessage.style.display = 'none';
        }
    }

    function addToCart(name, price, image) {
        const existingItemIndex = cartItems.findIndex(item => item.name === name);

        if (existingItemIndex >= 0) {
            cartItems[existingItemIndex].quantity += 1;
        } else {
            cartItems.push({ name, price, image, quantity: 1 });
        }

        updateCart();
    }

    addCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.item');
            const name = product.querySelector('h2').innerText;
            const price = parseFloat(product.querySelector('.price').innerText.replace('$', ''));
            const image = product.querySelector('img').src;

            addToCart(name, price, image);
        });
    });

    cartButton.addEventListener('click', () => {
        document.body.classList.add('show-cart');
    });

    cartClose.addEventListener('click', () => {
        document.body.classList.remove('show-cart');
    });

    cartCloseBtn.addEventListener('click', () => {
        document.body.classList.remove('show-cart');
    });

    shopNowButton.addEventListener('click', () => {
        document.body.classList.remove('show-cart');
    });

    cartContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('minus')) {
            const index = target.dataset.index;
            if (cartItems[index].quantity > 1) {
                cartItems[index].quantity -= 1;
            } else {
                cartItems.splice(index, 1);
            }
            updateCart();
        }

        if (target.classList.contains('plus')) {
            const index = target.dataset.index;
            cartItems[index].quantity += 1;
            updateCart();
        }
    });

    updateCart();
});


/* Show Category */
function showCategory(category) {
    const categories = ['trending', 'new-arrivals', 'sales'];
    categories.forEach(cat => {
        const productSection = document.getElementById(`${cat}-products`);
        if (cat === category) {
            productSection.style.display = 'grid';
        } else {
            productSection.style.display = 'none';
        }
    });
}

/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
navToggle.addEventListener("click", () => {
  navMenu.classList.add('show-menu');
});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
navClose.addEventListener("click", () => {
  navMenu.classList.remove('show-menu');
});
}

/* Show Login */
const login = document.getElementById('login'),
  loginButton = document.getElementById('login-button'),
  loginClose = document.getElementById('login-close');

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton) {
loginButton.addEventListener("click", () => {
  login.classList.add('show-login');
});
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose) {
loginClose.addEventListener("click", () => {
  login.classList.remove('show-login');
});
}

/* Scroll Up */
function scrollUp() {
const scrollUp = document.getElementById('scroll-up');
if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* product classifier Button */
document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.products-class li');

  listItems.forEach(item => {
      item.addEventListener('click', function () {
          // Remove 'active' class from all items
          listItems.forEach(li => li.classList.remove('active'));
          // Add 'active' class to the clicked item
          this.classList.add('active');
      });
  });
});


//........................BANNER........................

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let banner = document.querySelector('.Banner-content');
let listHTML = document.querySelector('.Banner-content .list');
let seeMoreButtons = document.querySelectorAll('.view-more');

// Ensure the back button is hidden on page load
backButton.classList.add('hidden');

// Initially hide the prev button
prevButton.classList.add('hidden');

// Counter to track the number of times next is clicked
let clickCounter = 0;

let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        // Scrolling up
        nextButton.classList.remove('hidden');
    } else {
        // Scrolling down
        nextButton.classList.add('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

nextButton.onclick = function() {
    showSlider('next');
    clickCounter++;
    if (clickCounter > 0) {
        prevButton.classList.remove('hidden'); // Show the prev button when next is clicked
    }
}

prevButton.onclick = function() {
    showSlider('prev');
    clickCounter--;
    if (clickCounter <= 0) {
        prevButton.classList.add('hidden'); // Hide the prev button when counter is zero or less
        clickCounter = 0; // Ensure counter does not go negative
    }
}

let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    banner.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.Banner-content .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        banner.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        banner.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 1000);  // Reduce the timeout to 1000ms
}

seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        banner.classList.remove('next', 'prev');
        banner.classList.add('showDetail');
        backButton.classList.remove('hidden');
    }
});

backButton.onclick = function(){
    banner.classList.remove('showDetail');
    backButton.classList.add('hidden');
}

window.addEventListener('scroll', function() {
    changeNavBarBackgroundColor();
});

function changeNavBarBackgroundColor() {
    const articles = document.querySelectorAll('.article');
    const navBar = document.querySelector('.header');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition === 0) {
        navBar.style.backgroundColor = 'transparent';
        return;
    }

    articles.forEach(article => {
        const articleTop = article.getBoundingClientRect().top + window.scrollY - navBar.offsetHeight;
        const articleHeight = article.offsetHeight;
        const articleBgColor = article.getAttribute('data-bgcolor');

        if (scrollPosition >= articleTop && scrollPosition < articleTop + articleHeight) {
            navBar.style.backgroundColor = articleBgColor;
        }
    });
}

//..................blog...................blog.............




// Glowing Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', e.clientX - rect.left);
        card.style.setProperty('--mouse-y', e.clientY - rect.top);
    });

    card.addEventListener('mouseenter', () => {
        card.classList.add('glowing');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('glowing');
    });
});

// Product Classifier Button
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.products-class li');

    listItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            listItems.forEach(li => li.classList.remove('active'));
            // Add 'active' class to the clicked item
            this.classList.add('active');
        });
    });
});