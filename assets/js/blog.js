
        const postsPerPage = 3; // Show 1 post per page
        const blogContainer = document.getElementById('blogContainer');
        const pagination = document.getElementById('pagination');
        const blogPosts = blogContainer.getElementsByClassName('blog__post');
        const discountsSection = document.getElementById('discounts');
        const comingSoonBanner1 = document.getElementById('comingSoonBanner1');
        const comingSoonBanner2 = document.getElementById('comingSoonBanner2');
        let currentPage = 1;

        function displayPosts() {
            for (let i = 0; i < blogPosts.length; i++) {
                blogPosts[i].style.display = 'none';
            }
            for (let i = (currentPage - 1) * postsPerPage; i < currentPage * postsPerPage && i < blogPosts.length; i++) {
                blogPosts[i].style.display = 'grid';
            }
            updatePagination();
            updateSections();
        }

        function updatePagination() {
            const totalPages = Math.ceil(blogPosts.length / postsPerPage);
            pagination.innerHTML = '';

            const leftArrow = document.createElement('a');
            leftArrow.href = '#';
            leftArrow.className = 'pagination__icon';
            if (currentPage === 1) {
                leftArrow.classList.add('pagination__icon--disabled');
                leftArrow.setAttribute('aria-disabled', 'true');
            }
            leftArrow.innerHTML = '<i class="bx bx-chevron-left"></i>';
            leftArrow.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage > 1) {
                    currentPage--;
                    displayPosts();
                }
            });
            pagination.appendChild(leftArrow);

            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement('a');
                pageLink.href = '#';
                pageLink.innerText = i;
                if (i === currentPage) {
                    pageLink.classList.add('current');
                }
                pageLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage = i;
                    displayPosts();
                });
                pagination.appendChild(pageLink);
            }

            const rightArrow = document.createElement('a');
            rightArrow.href = '#';
            rightArrow.className = 'pagination__icon';
            if (currentPage === totalPages) {
                rightArrow.classList.add('pagination__icon--disabled');
                rightArrow.setAttribute('aria-disabled', 'true');
            }
            rightArrow.innerHTML = '<i class="bx bx-chevron-right"></i>';
            rightArrow.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                    currentPage++;
                    displayPosts();
                }
            });
            pagination.appendChild(rightArrow);
        }

        function updateSections() {
            if (currentPage === 1) {
                discountsSection.style.display = 'block';
            } else {
                discountsSection.style.display = 'none';
            }

            if (currentPage === 2) {
                comingSoonBanner1.style.display = 'block';
            } else {
                comingSoonBanner1.style.display = 'none';
            }

            if (currentPage === 3) {
                comingSoonBanner2.style.display = 'block';
            } else {
                comingSoonBanner2.style.display = 'none';
            }
        }

        document.addEventListener('DOMContentLoaded', displayPosts);
    