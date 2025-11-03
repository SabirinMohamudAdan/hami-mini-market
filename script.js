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
            },
              {
                id: 14,
                name: "Garlic",
                price: 1,
                category: "vegetables",
                image: "https://media.gettyimages.com/id/1426800146/photo/garlic-cloves-and-bulb-flying-on-a-white-background.jpg?s=612x612&w=0&k=20&c=gz04almGMoBdvzRA1L2PoaqEb1fKU3qMwcd7xTNzl5M="
            },
             {
                id: 15,
                name: "Mango",
                price: 2.2,
                category: "fruits",
                image: "https://media.gettyimages.com/id/2211144904/photo/summer-fruits-isolated-on-clear-background.jpg?s=612x612&w=0&k=20&c=eGBlb33wuwdQbl3begQtyR8RJHMrwlR6Fs6wHTFniE8="
            },
            {
                id: 16,
                name: "Avocado",
                price: 1.6,
                category: "fruits",
                image: "https://media.gettyimages.com/id/1222302648/photo/sliced-avocado-on-white-background.jpg?s=612x612&w=0&k=20&c=OzpHqML-HnOv0_FiPPndJohYk1eUIaNYVrS2YzMVlFI="
            }
        ];

        // Cart functionality
        let cart = [];
        const cartCount = document.getElementById('cartCount');
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const cartItems = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        
        // Order modal elements
        const orderModal = document.getElementById('orderModal');
        const orderSubtotal = document.getElementById('orderSubtotal');
        const orderTax = document.getElementById('orderTax');
        const orderTotal = document.getElementById('orderTotal');
        const continueShopping = document.getElementById('continueShopping');
        const viewOrder = document.getElementById('viewOrder');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Save products to localStorage for use across modules
            localStorage.setItem('products', JSON.stringify(products));
            
            // Load cart from localStorage
            loadCart();
            
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
            
            checkoutBtn.addEventListener('click', function() {
                if (cart.length === 0) {
                    showToast('Your cart is empty!');
                    return;
                }
                
                // Calculate totals
                const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                const tax = subtotal * 0.05; // 5% tax
                const total = subtotal + tax;
                
                // Show order confirmation modal
                showOrderConfirmation(subtotal, tax, total);
            });

            // Order modal buttons
            continueShopping.addEventListener('click', function() {
                closeOrderModal();
                closeCartModal();
            });

            viewOrder.addEventListener('click', function() {
                closeOrderModal();
                
                showToast('Order details would be shown here in a real application');
            });

            // Close cart when clicking outside
            cartModal.addEventListener('click', function(e) {
                if (e.target === cartModal) {
                    closeCartModal();
                }
            });

            // Close order modal when clicking outside
            orderModal.addEventListener('click', function(e) {
                if (e.target === orderModal) {
                    closeOrderModal();
                }
            });

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

            saveCart();
            updateCartCount();
            showToast(`${product.name} added to cart!`);
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            updateCartCount();
            updateCartDisplay();
        }

        // Update item quantity in cart
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    saveCart();
                    updateCartCount();
                    updateCartDisplay();
                }
            }
        }

        // Update cart count in the header
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Show toast notification
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
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

        // Show order confirmation modal
        function showOrderConfirmation(subtotal, tax, total) {
            // Update order details
            orderSubtotal.textContent = `$${subtotal.toFixed(2)}`;
            orderTax.textContent = `$${tax.toFixed(2)}`;
            orderTotal.textContent = `$${total.toFixed(2)}`;
            
            // Show modal
            orderModal.style.display = 'flex';
            
            // Clear cart
            cart = [];
            saveCart();
            updateCartCount();
            updateCartDisplay();
            closeCartModal();
        }

        // Close order modal
        function closeOrderModal() {
            orderModal.style.display = 'none';
        }

        // Update cart display in the modal
        function updateCartDisplay() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p>Your cart is empty.</p>';
                cartSummary.innerHTML = '';
                cartTotal.textContent = 'Total: $0.00';
                return;
            }

            let subtotal = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
                `;
                cartItems.appendChild(cartItem);
            });

            // Calculate totals
            const tax = subtotal * 0.05; // 5% tax
            const total = subtotal + tax;

            // Update summary
            cartSummary.innerHTML = `
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Tax (5%):</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
            `;

            cartTotal.textContent = `Total: $${total.toFixed(2)}`;

            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });

            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn.minus').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    updateQuantity(productId, -1);
                });
            });

            document.querySelectorAll('.quantity-btn.plus').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    updateQuantity(productId, 1);
                });
            });
        }

        // Save cart to localStorage
        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Load cart from localStorage
        function loadCart() {
            const cartData = localStorage.getItem('cart');
            cart = cartData ? JSON.parse(cartData) : [];
        }