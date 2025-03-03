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
});