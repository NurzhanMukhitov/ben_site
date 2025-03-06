// Engineering Categories Data
// Импортируем данные из scripts/category-data.js

// Используем массив categories из category-data.js

function createSlug(title) {
    // Специальные случаи для точного соответствия именам файлов
    const specialCases = {
        'Energy & Power Generation': 'energy_power_generation',
        'Aquatics & Pools': 'aquatics_pools',
        'Buildings & Facilities': 'buildings_facilities',
        'Food & Beverage': 'food_beverage',
        'Metals & Mining': 'metals_mining',
        'Oil and Gas': 'oil_and_gas',
        'Refining & Chemicals': 'refining_chemicals',
        'Municipal Drinking Water': 'municipal_drinking_water',
        'Municipal Wastewater Treatment': 'municipal_wastewater_treatment',
        'Utility Infrastructure': 'utility_infrastructure',
        'General Industry': 'general_industry'
    };

    // Проверяем специальные случаи
    if (specialCases[title]) {
        return specialCases[title];
    }

    // Общий случай для остальных названий
    return title.toLowerCase()
               .replace(/[^a-z0-9]+/g, '_')
               .replace(/^_+|_+$/g, '');
}

// Функция для создания карточки категории
function createCard(category) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', category.id);

    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    
    const img = document.createElement('img');
    // Пробуем загрузить WebP версию, если путь содержит .webp
    if (category.image.endsWith('.webp')) {
        const jpgPath = category.image.replace('.webp', '.jpg');
        img.onerror = function() {
            this.onerror = null; // Предотвращаем бесконечный цикл
            this.src = jpgPath;
        };
        img.src = category.image;
    } else {
        img.src = category.image;
    }
    img.alt = category.title;
    img.loading = 'lazy';
    
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = category.title;
    
    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = category.description;
    
    cardImage.appendChild(img);
    cardContent.appendChild(title);
    cardContent.appendChild(description);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    
    // Добавляем обработчик клика для перехода на страницу категории
    card.addEventListener('click', () => {
        const slug = createSlug(category.title);
        window.location.href = `engineering/${slug}.html`;
    });
    
    return card;
}

// Функция для загрузки изображений
function loadImages(category) {
    const images = [
        { path: category.image, type: 'thumbnail' },
        { path: category.imageLarge, type: 'large' },
        { path: category.imageHero, type: 'hero' }
    ];
    
    images.forEach(({path, type}) => {
        if (path) {
            const img = new Image();
            if (path.endsWith('.webp')) {
                const jpgPath = path.replace('.webp', '.jpg');
                img.onerror = function() {
                    this.onerror = null;
                    const fallbackImg = new Image();
                    fallbackImg.src = jpgPath;
                };
            }
            img.src = path;
        }
    });
}

// Функция для проверки поддержки WebP
function supportsWebP() {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = function() {
            resolve(true);
        };
        img.onerror = function() {
            resolve(false);
        };
        img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    });
}

// Функция для проверки, находится ли элемент в видимой области
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для анимации карточек при прокрутке
function handleScrollAnimation() {
    const cards = document.querySelectorAll('.card:not(.visible)');
    cards.forEach(card => {
        if (isInViewport(card)) {
                card.classList.add('visible');
        }
    });
}

// Функция для предварительной загрузки изображений
function preloadImages() {
    if (typeof categories !== 'undefined') {
        categories.forEach(category => {
        const img = new Image();
        img.src = category.image;
    });
    }
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.querySelector('.card-grid');
    
    // Проверяем наличие данных категорий
    if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    // Создаем и добавляем карточки на страницу
        categories.forEach(category => {
        const card = createCard(category);
        cardGrid.appendChild(card);
            loadImages(category); // Предзагружаем изображения
        });
    } else {
        console.error('Categories data not found or invalid');
        cardGrid.innerHTML = '<p class="error-message">Unable to load categories. Please try again later.</p>';
    }

    // Обновляем Related Solutions если мы на странице категории
    if (window.location.pathname.includes('/engineering/')) {
        updateRelatedSolutions();
    }
});

function loadCategory(category) {
    const heroImage = document.querySelector('.hero-image');
    heroImage.style.backgroundImage = `url('${category.imageHero}')`;
    
    document.querySelector('.category-title').textContent = category.title;
    document.querySelector('.category-subtitle').textContent = category.subtitle;
    
    // Update content sections
    document.querySelector('.overview-text').textContent = category.content.overview;
    
    // Update lists
    updateList('.approach-list', category.content.approach);
    updateList('.technologies-list', category.content.technologies);
    updateList('.benefits-list', category.content.benefits);
}

// Функция для получения случайных категорий
function getRandomCategories(currentCategoryId, count = 5) {
    // Фильтруем текущую категорию
    const availableCategories = categories.filter(cat => cat.id !== currentCategoryId);
    
    // Перемешиваем массив
    const shuffled = availableCategories.sort(() => 0.5 - Math.random());
    
    // Возвращаем первые count элементов
    return shuffled.slice(0, count);
}

// Функция для обновления секции Related Solutions
function updateRelatedSolutions() {
    const relatedSection = document.querySelector('.other-categories, .related-solutions');
    if (!relatedSection) return;

    // Получаем текущий ID категории из URL
    const currentPath = window.location.pathname;
    const currentCategory = categories.find(cat => currentPath.includes(createSlug(cat.title)));
    if (!currentCategory) return;

    // Получаем случайные категории
    const relatedCategories = getRandomCategories(currentCategory.id);

    // Обновляем заголовок
    const heading = relatedSection.querySelector('h3');
    if (heading) {
        heading.textContent = 'Related Solutions';
    }

    // Обновляем список категорий
    const list = relatedSection.querySelector('ul');
    if (list) {
        list.innerHTML = relatedCategories.map(cat => `
            <li>
                <a href="../engineering/${createSlug(cat.title)}.html">
                    <div class="related-item">
                        <img src="../${cat.image}" alt="${cat.title}" loading="lazy" onerror="this.src='../assets/images/placeholder.jpg'">
                        <span>${cat.title}</span>
                    </div>
                </a>
            </li>
        `).join('') + `
        <li class="view-all">
            <a href="../engineering.html">
                <span>View All Categories</span>
                <i class="fas fa-arrow-right"></i>
            </a>
        </li>`;
    }
} 