//Shop..........................Shop....................

document.addEventListener('DOMContentLoaded', function() {
    const page1 = document.querySelector('.product_page-1');
    const page2 = document.querySelector('.product_page-2');
    const page1Link = document.getElementById('page-1-link');
    const page2Link = document.getElementById('page-2-link');
    const prevPage = document.getElementById('prev-page');
    const nextPage = document.getElementById('next-page');

    // Initially show page 1 and hide page 2
    page1.classList.remove('hidden');
    page2.classList.add('hidden');
    prevPage.classList.add('pagination__icon--disabled');
    page1Link.classList.add('current');

    function showPage1() {
        page1.classList.remove('hidden');
        page2.classList.add('hidden');
        page1Link.classList.add('current');
        page2Link.classList.remove('current');
        prevPage.classList.add('pagination__icon--disabled');
        nextPage.classList.remove('pagination__icon--disabled');
    }

    function showPage2() {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
        page1Link.classList.remove('current');
        page2Link.classList.add('current');
        prevPage.classList.remove('pagination__icon--disabled');
        nextPage.classList.add('pagination__icon--disabled');
    }

    page1Link.addEventListener('click', function(event) {
        event.preventDefault();
        showPage1();
    });

    page2Link.addEventListener('click', function(event) {
        event.preventDefault();
        showPage2();
    });

    prevPage.addEventListener('click', function(event) {
        event.preventDefault();
        if (!prevPage.classList.contains('pagination__icon--disabled')) {
            showPage1();
        }
    });

    nextPage.addEventListener('click', function(event) {
        event.preventDefault();
        if (!nextPage.classList.contains('pagination__icon--disabled')) {
            showPage2();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
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

    // Initially call the function to set the background color
    changeNavBarBackgroundColor();

    // Add an event listener to call the function on scroll
    window.addEventListener('scroll', changeNavBarBackgroundColor);
});
