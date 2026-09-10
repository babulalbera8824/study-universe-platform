// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navAuthSection = document.querySelector('.nav-auth');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        navAuthSection?.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navAuthSection?.classList.remove('active');
            hamburger?.classList.remove('active');
        });
    });
}

// Smooth scroll helper
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === '/' && currentPage === '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

// Search functionality
const searchIcon = document.querySelector('.search-icon');
if (searchIcon) {
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        // Show search modal or redirect to search page
        console.log('Search clicked');
    });
}

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Prevent reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// User authentication state (to be connected to backend)
let currentUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

function updateAuthUI() {
    const authSection = document.querySelector('.nav-auth');
    if (currentUser) {
        authSection.innerHTML = `
            <div class="user-menu">
                <span class="user-name">${currentUser.name}</span>
                <button class="btn-logout" onclick="logout()">Logout</button>
            </div>
        `;
    }
}

function logout() {
    localStorage.removeItem('user');
    currentUser = null;
    window.location.href = '/';
}

updateAuthUI();

// Export functions for global use
window.scrollToSection = scrollToSection;
window.logout = logout;
