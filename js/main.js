// Script principal
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu burger
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('show');
        });

        // Fermer le menu si on clique sur un lien
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('show');
            });
        });
    }

    // Gestion de l'audio (générique pour toutes les pages)
    const pageAudio = document.getElementById('pageAudio') || document.getElementById('homeAudio');
    const playButton = document.getElementById('playButton');

    if (pageAudio && playButton) {
        playButton.addEventListener('click', () => {
            if (pageAudio.paused) {
                pageAudio.play();
            }
        });

        pageAudio.addEventListener('ended', () => {
            playButton.style.opacity = '0.5';
            playButton.disabled = true;
        });
    }

    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-element');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    // Code à exécuter une fois le DOM chargé
    console.log('Site Vibration Résonance chargé');

    // Gestion du défilement fluide
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        } else if (e.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex--;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Diaporama
    const initSlideshow = () => {
        const slideshow = document.getElementById('residentsSlideshow');
        if (!slideshow) return;

        // Liste des photos disponibles (excluant celles manquantes)
        const photos = [
            '10011', '10012', '10013', '10014', '10015', '10016', '10017', '10018', 
            '10019', '10020', '10021', '10022', '10023', '10024', '10025', '10026', 
            '10027', '10028', '10029', '10030', '10031', '10032', '10033', '10034', 
            '10035', '10036', '10037', '10038', '10039', '10040', '10041', '10042', 
            '10043', '10044', '10045', '10046', '10047', '10048', '10049', '10050',
            '10051', '10052', '10053'
        ].map(id => `images/residents/${id}.jpg`);

        // Créer et précharger les images
        photos.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Image ${index + 1}`;
            img.className = index === 0 ? 'active' : '';
            slideshow.appendChild(img);
        });

        if (photos.length > 1) {
            let currentSlide = 0;
            setInterval(() => {
                const slides = slideshow.getElementsByTagName('img');
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 4000);
        }
    };
    
    initSlideshow();
});
