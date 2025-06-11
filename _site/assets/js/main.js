// Tema Científico - JavaScript Principal

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar funcionalidades
    initMobileMenu();
    initScrollEffects();
    initParticleEffects();
    initSmoothScrolling();
});

// Menu Mobile
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Animar as barras do hamburger
            const spans = mobileToggle.querySelectorAll('span');
            if (mobileToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// Efeitos de Scroll
function initScrollEffects() {
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header transparente no topo
        if (scrollTop > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        // Parallax sutil no fundo
        const bgElement = document.querySelector('.scientific-theme::before');
        if (bgElement) {
            const parallaxSpeed = scrollTop * 0.5;
            document.documentElement.style.setProperty('--parallax-offset', `${parallaxSpeed}px`);
        }
        
        lastScrollTop = scrollTop;
    });
}

// Efeitos de Partículas Dinâmicas
function initParticleEffects() {
    const particlesContainer = document.querySelector('.bg-particles');
    
    if (particlesContainer && window.innerWidth > 768) {
        // Criar partículas adicionais dinamicamente
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? '#06b6d4' : '#10b981'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.6 + 0.2};
                animation: float ${Math.random() * 4 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
            `;
            particlesContainer.appendChild(particle);
        }
        
        // Efeito de mouse hover nas partículas
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            particles.forEach(particle => {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;
                
                const distance = Math.sqrt(
                    Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
                );
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const angle = Math.atan2(particleY - mouseY, particleX - mouseX);
                    const moveX = Math.cos(angle) * force * 20;
                    const moveY = Math.sin(angle) * force * 20;
                    
                    particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
                    particle.style.opacity = Math.min(1, parseFloat(particle.style.opacity) + force * 0.5);
                } else {
                    particle.style.transform = 'translate(0, 0)';
                }
            });
        });
    }
}

// Scroll Suave
function initSmoothScrolling() {
    // Scroll suave para links âncora
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utilitários
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Otimizar performance dos eventos de scroll
const optimizedScrollHandler = throttle(function() {
    // Código de scroll otimizado aqui
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Lazy loading para imagens (se necessário)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading se suportado
if ('IntersectionObserver' in window) {
    initLazyLoading();
}

// Adicionar classe para indicar que JS está carregado
document.documentElement.classList.add('js-loaded');

