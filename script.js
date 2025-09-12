function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        header.style.background = 'rgba(245, 241, 232, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(139, 69, 19, 0.1)';
    } else {
        header.style.background = 'rgba(245, 241, 232, 0.95)';
        header.style.boxShadow = 'none';
    }
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.detail-card, .benefit-card, .about-text, .contact-item'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});


function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}


const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links.mobile-open {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(245, 241, 232, 0.98);
            flex-direction: column;
            padding: var(--spacing-lg);
            box-shadow: var(--shadow-lg);
        }
        
        .nav-brand::after {
            content: '☰';
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: auto;
        }
    }
`;
document.head.appendChild(style);

function createFloatingText() {
    const quotes = [
        '"Words are sacred. They deserve respect."',
        '"Poetry is the music of the soul."',
        '"Stories connect hearts across time."',
        '"In writing, we find ourselves."',
        '"Literature is the memory of humanity."'
    ];
    
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    setInterval(() => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        const element = document.createElement('div');
        element.textContent = quote;
        element.style.cssText = `
            position: absolute;
            top: ${Math.random() * 60 + 20}%;
            left: ${Math.random() * 80 + 10}%;
            color: rgba(139, 69, 19, 0.1);
            font-style: italic;
            font-size: 0.9rem;
            pointer-events: none;
            opacity: 0;
            transition: all 2s ease;
            font-family: var(--font-body);
        `;
        
        hero.appendChild(element);
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(-20px)';
        }, 100);
        
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-40px)';
        }, 3000);
        
        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }, 5000);
    }, 8000);
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createFloatingText, 2000);
});


function typewriterEffect(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


document.addEventListener('DOMContentLoaded', () => {
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        const originalText = heroDescription.textContent;
        setTimeout(() => {
            typewriterEffect(heroDescription, originalText, 50);
        }, 1000);
    }
});


document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.detail-card, .benefit-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
    
    floatingElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
    });
});
