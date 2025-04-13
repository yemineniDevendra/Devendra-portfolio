// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6c5ce7"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6c5ce7",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Preloader Animation
    const loadingText = document.querySelectorAll('.loading-text-words');
    loadingText.forEach((word, index) => {
        gsap.to(word, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
        gsap.to('.preloader', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: function() {
                document.querySelector('.preloader').style.display = 'none';
            }
        });
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power2.out'
        });
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    // Cursor effects on hover
    const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .service-card, .nav-link, .filter-btn');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            gsap.to(cursor, {
                scale: 0.5,
                backgroundColor: 'transparent',
                borderColor: '#6c5ce7',
                duration: 0.3
            });
            
            gsap.to(cursorFollower, {
                scale: 3,
                backgroundColor: 'rgba(108, 92, 231, 0.3)',
                duration: 0.3
            });
        });
        
        element.addEventListener('mouseleave', function() {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: '#6c5ce7',
                borderColor: 'transparent',
                duration: 0.3
            });
            
            gsap.to(cursorFollower, {
                scale: 1,
                backgroundColor: 'transparent',
                duration: 0.3
            });
        });
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        
        // Save theme preference to localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Navigation
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-nav');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Testimonials Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        testimonialSlides[index].style.display = 'block';
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    // Initialize slider
    showSlide(currentSlide);
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate elements on scroll
    gsap.utils.toArray('[data-aos]').forEach(element => {
        const animation = element.getAttribute('data-aos');
        const delay = element.getAttribute('data-aos-delay') || 0;
        
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            ...getAnimationProperties(animation),
            delay: parseFloat(delay) * 0.1,
            duration: 1,
            ease: 'power2.out'
        });
    });
    
    function getAnimationProperties(animation) {
        switch (animation) {
            case 'fade-up':
                return { y: 50, opacity: 0 };
            case 'fade-down':
                return { y: -50, opacity: 0 };
            case 'fade-left':
                return { x: 50, opacity: 0 };
            case 'fade-right':
                return { x: -50, opacity: 0 };
            case 'zoom-in':
                return { scale: 0.8, opacity: 0 };
            case 'flip-up':
                return { rotationX: 90, opacity: 0, transformOrigin: '50% 50%' };
            default:
                return { opacity: 0 };
        }
    }
    
    // Hero Section Animation
    gsap.from('.hero-text .subtitle', {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5
    });
    
    gsap.from('.hero-text .title', {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.7
    });
    
    gsap.from('.hero-text .job-title', {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.9
    });
    
    gsap.from('.hero-text .description', {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 1.1
    });
    
    gsap.from('.cta-buttons', {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 1.3
    });
    
    gsap.from('.hero-image', {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 1.5
    });
    
    // Logo Animation
    gsap.to('.logo::before', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        width: '100%'
    });
});