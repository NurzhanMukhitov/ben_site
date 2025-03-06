// Автоматическая подстановка текущего года
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Управление мобильным меню
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;
    
    // Функция для закрытия меню
    function closeMenu() {
        if (mainMenu && mainMenu.classList.contains('active')) {
            mainMenu.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
            body.classList.remove('menu-open');
        }
    }
    
    // Переключение мобильного меню
    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            mainMenu.classList.toggle('active');
            if (menuOverlay) menuOverlay.classList.toggle('active');
            this.classList.toggle('active');
            
            const isExpanded = mainMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            body.classList.toggle('menu-open', isExpanded);
        });
        
        // Закрываем меню при изменении размера окна
        window.addEventListener('resize', closeMenu);
        
        // Закрываем меню по нажатию на оверлей
        if (menuOverlay) {
            menuOverlay.addEventListener('click', closeMenu);
        }
        
        // Закрываем меню при клике на пункт меню
        if (mainMenu) {
            mainMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMenu);
            });
        }
        
        // Закрываем меню при клике вне меню
        document.addEventListener('click', function(e) {
            if (mainMenu.classList.contains('active')) {
                if (!mainMenu.contains(e.target) && 
                    !mobileMenuToggle.contains(e.target)) {
                    closeMenu();
                }
            }
        });
    }
    
    // Функция для проверки переполнения меню
    function checkMenuOverflow() {
        // На мобильных и планшетах всегда показываем бургер-меню
        if (window.innerWidth < 992) {
            const header = document.querySelector('.header');
            if (header) header.classList.add('menu-overflow');
            return;
        }
        
        const container = document.querySelector('.header .container');
        const logo = document.querySelector('.logo');
        const menu = document.querySelector('.main-menu');
        const menuItems = document.querySelectorAll('.main-menu li');
        const header = document.querySelector('.header');
        
        if (!container || !menu || !menuItems.length || !logo || !header) return;
        
        // Получаем доступную ширину для меню
        const availableWidth = container.offsetWidth - logo.offsetWidth - 70; // Увеличиваем запас
        
        // Считаем общую ширину всех пунктов меню
        let totalMenuWidth = 0;
        menuItems.forEach(item => {
            totalMenuWidth += item.offsetWidth;
        });
        
        // Если меню не помещается, показываем бургер
        if (totalMenuWidth > availableWidth) {
            header.classList.add('menu-overflow');
        } else {
            header.classList.remove('menu-overflow');
        }
    }
    
    // Проверяем при загрузке
    checkMenuOverflow();
    
    // Проверяем после полной загрузки страницы
    window.addEventListener('load', checkMenuOverflow);

    // Анимация карточек при прокрутке
    const cards = document.querySelectorAll('.card');
    const cardImages = document.querySelectorAll('.card-image img');

    // Функция для проверки, находится ли элемент в области видимости
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top <= windowHeight &&
            rect.bottom >= 0
        );
    }

    // Функция для анимации карточек
    function animateCards() {
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Инициализация карточек
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Запускаем анимации при загрузке и прокрутке
    window.addEventListener('load', () => {
        setTimeout(animateCards, 100);
    });

    window.addEventListener('scroll', () => {
        requestAnimationFrame(animateCards);
    });

    // Функция для оптимизации видео
    function setupVideo() {
        const heroVideo = document.querySelector('.hero-video');
        if (!heroVideo) return;

        // Определяем, мобильное ли устройство
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        
        // Функция для загрузки подходящего источника видео
        function loadAppropriateSource() {
            const sources = heroVideo.getElementsByTagName('source');
            for (let source of sources) {
                if (isMobile && source.media === '(max-width: 768px)' || 
                    !isMobile && !source.media) {
                    // Устанавливаем приоритет для текущего источника
                    source.setAttribute('fetchpriority', 'high');
                } else {
                    // Для неиспользуемых источников убираем приоритет
                    source.removeAttribute('fetchpriority');
                }
            }
            heroVideo.load();
        }

        // Загружаем подходящий источник при старте
        loadAppropriateSource();

        // Обработчик ошибок
        heroVideo.addEventListener('error', function(e) {
            console.error('Video error:', e);
            heroVideo.style.display = 'none';
            heroVideo.closest('.hero').style.backgroundImage = 'url(assets/images/resize/mobile.webp)';
        });

        // Оптимизация воспроизведения
        let videoVisible = true;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting && videoVisible) {
                    heroVideo.pause();
                    videoVisible = false;
                } else if (entry.isIntersecting && !videoVisible) {
                    // Пробуем воспроизвести видео
                    const playPromise = heroVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // Если автовоспроизведение заблокировано
                            heroVideo.style.display = 'none';
                            heroVideo.closest('.hero').style.backgroundImage = 'url(assets/images/resize/mobile.webp)';
                        });
                    }
                    videoVisible = true;
                }
            });
        }, { threshold: 0.1 });

        observer.observe(heroVideo);

        // Отслеживаем изменение размера экрана
        window.matchMedia('(max-width: 768px)').addListener(() => {
            loadAppropriateSource();
        });
    }

    // Запускаем после загрузки DOM
    document.addEventListener('DOMContentLoaded', setupVideo);
});