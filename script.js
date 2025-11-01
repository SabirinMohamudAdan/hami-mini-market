 // Product Data
        const products = [
            {
                id: 1,
                name: "Fresh Apples",
                price: 2.99,
                category: "fruits",
                image: "https://media.gettyimages.com/id/871227828/photo/unrecognizable-woman-shops-for-produce-in-supermarket.jpg?s=612x612&w=0&k=20&c=MIvrDLHynihoCE5hOQSJbPDfXV2eMYxTPmbCe_hoaYE="
            },
            {
                id: 2,
                name: "Organic Carrots",
                price: 1.49,
                category: "vegetables",
                image: "https://media.gettyimages.com/id/1474339118/photo/carrots-for-sale-at-street-market-at-old-town-of-biel.jpg?s=612x612&w=0&k=20&c=a2VXh5kz7T3KR71v3QQ7a-iufJuPg-Oakt6SMU0DIQk="
            },
            {
                id: 3,
                name: "Ripe Tomatoes",
                price: 2.29,
                category: "vegetables",
                image: "https://media.gettyimages.com/id/1406728873/photo/ripe-red-cherry-tomatoes-at-a-retail-market-or-hypermarket-vegetarian-vegan-and-raw-food-and.jpg?s=612x612&w=0&k=20&c=clZtz2-4wNPbczK2r4lSpPFhoeksEhNIL19AHapOUX0="
            },
            {
                id: 4,
                name: "Fresh Spinach",
                price: 3.49,
                category: "fruits",
                image: "https://media.gettyimages.com/id/628102266/photo/fruit-board-1.jpg?s=612x612&w=0&k=20&c=LVVaErnfFcQY2jW-hWob-5DRBeEvUzK-PY3IZ7wgM7E="
            },
            {
                id: 5,
                name: "Sweet Strawberries",
                price: 4.99,
                category: "fruits",
                image: "https://media.gettyimages.com/id/1132335445/photo/strawberry-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Cn460vCremhFpEnx-hTZttBhaZZ_UDwDIzVzHCk-Jl0="
            },
            {
                id: 6,
                name: "Potatoes",
                price: 1.6,
                category: "vegetables",
                image: "https://media.gettyimages.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA="
            },
            {
                id: 7,
                name: "Banana",
                price: 1.99,
                category: "fruits",
                image: "https://media.gettyimages.com/id/182810893/photo/fruit-mix.jpg?s=612x612&w=0&k=20&c=v9jopDXbS5LCXY1d8uSwEldLJVVkOpYtYtyHD8azWDU="
            },
            {
                id: 8,
                name: "Fresh Lemons",
                price: 2.1,
                category: "fruits",
                image: "https://media.gettyimages.com/id/1371271948/photo/oranges-were-placed-on-the-wooden-bottom.jpg?s=612x612&w=0&k=20&c=3IF44rZ-XL50V0itA5sNQqS0wvqQ2vD8eEntwGD_qVg="
            },
            {
                id: 9,
                name: "Green Grapes",
                price: 1.5,
                category: "fruits",
                image: "https://media.gettyimages.com/id/183217648/photo/bunch-of-different-types-of-fresh-grapes.jpg?s=612x612&w=0&k=20&c=Uag1Gm9tL0HsGkdvE4L28qVkiANuoJZUCKzzOxautpc="
            },
            {
                id: 10,
                name: "lettuce",
                price: 1.5,
                category: "vegetables",
                image: "https://media.gettyimages.com/id/1144589453/photo/iceberg-lettuce.jpg?s=612x612&w=0&k=20&c=xMsmr7soXocw--2OFSQXOyNSBk9cBkaC_nFYT_XQKm4="
            },
            {
                id: 11,
                name: "green pepper",
                price: 2.5,
                category: "vegetables",
                image: "https://media.gettyimages.com/id/503382026/video/fresh-vegetable.jpg?s=640x640&k=20&c=Y3eJjKreik7UchRY_KYzL5E0T6nsQjOxIg5jqK3pa6U="
            },

             {
                id: 12,
                name: "watermelon",
                price: 2,
                category: "fruits",
                image: "https://media.gettyimages.com/id/1292640509/vector/melon-and-wedges.jpg?s=612x612&w=0&k=20&c=SL9JRVi8kOERlxMoAhyzGKeOxX9lYggmypx-Vpw_jrY="
            },
             {
                id: 13,
                name: "Onion",
                price: 1.2,
                category: "vegetables",
                image: "https://media.gettyimages.com/id/463175283/photo/food.jpg?s=612x612&w=0&k=20&c=2QK_eHu-buw_Dnfi2L7dT7AIYl6Eb7w98XvUpTJ5Qrs="
            }

        ];

        // Cart functionality
        let cart = [];
        const cartCount = document.getElementById('cartCount');
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            displayProducts(products);
            setupEventListeners();
            updateCartCount();
        });

        // Display products in the grid
        function displayProducts(productsToDisplay) {
            const productsGrid = document.getElementById('productsGrid');
            productsGrid.innerHTML = '';

            if (productsToDisplay.length === 0) {
                productsGrid.innerHTML = '<div class="no-products">No products match your search criteria.</div>';
                return;
            }

            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image" style="background-image: url('${product.image}')"></div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <p class="product-category">${product.category}</p>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });

            // Add event listeners to the "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Setup event listeners for search and filters
        function setupEventListeners() {
            // Search functionality
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', filterProducts);

            // Category filter
            const categoryFilter = document.getElementById('categoryFilter');
            categoryFilter.addEventListener('change', filterProducts);

            // Price filter
            const priceFilter = document.getElementById('priceFilter');
            priceFilter.addEventListener('input', filterProducts);

            // Apply filters button
            const applyFilters = document.getElementById('applyFilters');
            applyFilters.addEventListener('click', filterProducts);

            // Cart functionality
            cartIcon.addEventListener('click', openCart);
            closeCart.addEventListener('click', closeCartModal);

            // Close cart when clicking outside
            cartModal.addEventListener('click', function(e) {
                if (e.target === cartModal) {
                    closeCartModal();
                }
            });


            // ------------
            
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });

            // Form Validation
            const contactForm = document.getElementById('contactForm');
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;

                // Name validation
                const nameRegex = /^[A-Za-zÀ-ÿĀ-žƁ-ɏʼ'‘\s]+$/; 
                if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value.trim())) {
                    nameError.style.display = 'block';
                    nameError.textContent = 'Please enter a valid name (letters only).';
                    isValid = false;
                } else {
                    nameError.style.display = 'none';
                }

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    emailError.style.display = 'block';
                    emailError.textContent = 'Please enter a valid email address.';
                    isValid = false;
                } else {
                    emailError.style.display = 'none';
                }

                // Message validation
                if (messageInput.value.trim() === '') {
                    messageError.style.display = 'block';
                    messageError.textContent = 'Please enter your message.';
                    isValid = false;
                } else {
                    messageError.style.display = 'none';
                }

                // Final check
                if (isValid) {
                    alert('✅ Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                }
            });

            // Back to Top Button
            const backToTopButton = document.getElementById('backToTop');

            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });

            backToTopButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Animation on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            const elementsToAnimate = document.querySelectorAll('.section-title, .about-text, .about-image');
            elementsToAnimate.forEach(el => {
                observer.observe(el);
            });
        }

        // Filter products based on search and filter criteria
        function filterProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const category = document.getElementById('categoryFilter').value;
            const maxPrice = parseFloat(document.getElementById('priceFilter').value) || Infinity;

            const filteredProducts = products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(searchTerm);
                const matchesCategory = category === 'all' || product.category === category;
                const matchesPrice = product.price <= maxPrice;

                return matchesSearch && matchesCategory && matchesPrice;
            });

            displayProducts(filteredProducts);
        }

        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                });
            }

            updateCartCount();
            showCartNotification(`${product.name} added to cart!`);
        }

        // Update cart count in the header
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Show cart notification
        function showCartNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background-color: var(--primary-green);
                color: white;
                padding: 10px 20px;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow);
                z-index: 1001;
                transition: opacity 0.3s ease;
            `;

            document.body.appendChild(notification);

            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Open cart modal
        function openCart() {
            updateCartDisplay();
            cartModal.style.display = 'flex';
        }

        // Close cart modal
        function closeCartModal() {
            cartModal.style.display = 'none';
        }

        // Update cart display in the modal
        function updateCartDisplay() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p>Your cart is empty.</p>';
                cartTotal.textContent = 'Total: $0.00';
                return;
            }

            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
                `;
                cartItems.appendChild(cartItem);
            });

            cartTotal.textContent = `Total: $${total.toFixed(2)}`;

            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            updateCartDisplay();
        }

        // --------------------5
        // Animation on scroll
        // document.addEventListener('DOMContentLoaded', function() {
        //     const observerOptions = {
        //         threshold: 0.1,
        //         rootMargin: '0px 0px -50px 0px'
        //     };

        //     const observer = new IntersectionObserver(function(entries) {
        //         entries.forEach(entry => {
        //             if (entry.isIntersecting) {
        //                 if (entry.target.classList.contains('about-text')) {
        //                     entry.target.classList.add('animate');
                            
        //                     // Animate feature items
        //                     const featureItems = entry.target.querySelectorAll('.feature-item');
        //                     featureItems.forEach(item => {
        //                         item.classList.add('animate');
        //                     });
        //                 }
                        
        //                 if (entry.target.classList.contains('about-image')) {
        //                     entry.target.classList.add('animate');
        //                 }
                        
        //                 if (entry.target.classList.contains('contact-info')) {
        //                     entry.target.classList.add('animate');
                            
        //                     // Animate contact items
        //                     const contactItems = entry.target.querySelectorAll('.contact-item');
        //                     contactItems.forEach(item => {
        //                         item.classList.add('animate');
        //                     });
        //                 }
                        
        //                 if (entry.target.classList.contains('contact-form')) {
        //                     entry.target.classList.add('animate');
        //                 }
        //             }
        //         });
        //     }, observerOptions);

        //     // Observe elements
        //     const aboutText = document.querySelector('.about-text');
        //     const aboutImage = document.querySelector('.about-image');
        //     const contactInfo = document.querySelector('.contact-info');
        //     const contactForm = document.querySelector('.contact-form');

        //     if (aboutText) observer.observe(aboutText);
        //     if (aboutImage) observer.observe(aboutImage);
        //     if (contactInfo) observer.observe(contactInfo);
        //     if (contactForm) observer.observe(contactForm);

        //     // Form validation
        //     const contactFormElement = document.getElementById('contactForm');
        //     if (contactFormElement) {
        //         contactFormElement.addEventListener('submit', function(e) {
        //             e.preventDefault();
                    
        //             let isValid = true;
                    
        //             // Name validation
        //             const nameInput = document.getElementById('name');
        //             const nameError = document.getElementById('nameError');
        //             if (!nameInput.value.trim()) {
        //                 nameError.style.display = 'block';
        //                 isValid = false;
        //             } else {
        //                 nameError.style.display = 'none';
        //             }
                    
        //             // Email validation
        //             const emailInput = document.getElementById('email');
        //             const emailError = document.getElementById('emailError');
        //             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //             if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        //                 emailError.style.display = 'block';
        //                 isValid = false;
        //             } else {
        //                 emailError.style.display = 'none';
        //             }
                    
        //             // Message validation
        //             const messageInput = document.getElementById('message');
        //             const messageError = document.getElementById('messageError');
        //             if (!messageInput.value.trim()) {
        //                 messageError.style.display = 'block';
        //                 isValid = false;
        //             } else {
        //                 messageError.style.display = 'none';
        //             }
                    
        //             if (isValid) {
        //                 // In a real application, you would submit the form here
        //                 alert('Thank you for your message! We will get back to you soon.');
        //                 contactFormElement.reset();
        //             }
        //         });
        //     }
        // });