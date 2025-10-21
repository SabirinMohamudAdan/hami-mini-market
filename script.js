// Mobile Menu Toggle
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

        // // Form Validation
        // const contactForm = document.getElementById('contactForm');
        // const nameInput = document.getElementById('name');
        // const emailInput = document.getElementById('email');
        // const messageInput = document.getElementById('message');
        // const nameError = document.getElementById('nameError');
        // const emailError = document.getElementById('emailError');
        // const messageError = document.getElementById('messageError');

        // contactForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     let isValid = true;

        //     // Name validation
        //     if (nameInput.value.trim() === '') {
        //         nameError.style.display = 'block';
        //         isValid = false;
        //     } else {
        //         nameError.style.display = 'none';
        //     }

        //     // Email validation
        //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     if (!emailRegex.test(emailInput.value.trim())) {
        //         emailError.style.display = 'block';
        //         isValid = false;
        //     } else {
        //         emailError.style.display = 'none';
        //     }

        //     // Message validation
        //     if (messageInput.value.trim() === '') {
        //         messageError.style.display = 'block';
        //         isValid = false;
        //     } else {
        //         messageError.style.display = 'none';
        //     }

        //     if (isValid) {
        //         alert('Thank you for your message! We will get back to you soon.');
        //         contactForm.reset();
        //     }
        // });



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

    // ✅ Name validation — only letters (including Somali letters) and spaces
    const nameRegex = /^[A-Za-zÀ-ÿĀ-žƁ-ɏʼ’‘\s]+$/; 
    if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value.trim())) {
        nameError.style.display = 'block';
        nameError.textContent = 'Please enter a valid name (letters only).';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // ✅ Message validation
    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        messageError.textContent = 'Please enter your message.';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // ✅ Final check
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