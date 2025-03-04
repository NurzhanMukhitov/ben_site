// Design & Engineering Cards Data
// Импортируем данные из scripts/category-data.js
const designCategories = [
    {
        id: 1,
        title: 'Agriculture',
        subtitle: 'Enhancing Agricultural Water Use for Healthier Soil, Crops, and Livestock',
        image: 'assets/images/engineering/thumbnails/agriculture.webp',
        imageLarge: 'assets/images/engineering/large/agriculture.webp',
        imageHero: 'assets/images/engineering/hero/agriculture.webp',
        description: 'Innovative solutions for sustainable agricultural development.'
    },
    {
        id: 2,
        title: 'Aquaculture',
        subtitle: 'Comprehensive Water Management to Improve Yields and Reduce Disease Risks',
        image: 'assets/images/engineering/thumbnails/aquaculture.webp',
        imageLarge: 'assets/images/engineering/large/aquaculture.webp',
        imageHero: 'assets/images/engineering/hero/aquaculture.webp',
        description: 'Advanced systems for aquaculture and fish farming.'
    },
    {
        id: 3,
        title: 'Aquatics & Pools',
        subtitle: 'Maintaining Superior Water Quality for Recreational Facilities',
        image: 'assets/images/engineering/thumbnails/aquatics_pools.webp',
        imageLarge: 'assets/images/engineering/large/aquatics_pools.webp',
        imageHero: 'assets/images/engineering/hero/aquatics_pools.webp',
        description: 'Professional solutions for aquatic facilities and pools.'
    },
    {
        id: 4,
        title: 'Buildings & Facilities',
        subtitle: 'Customized Water Treatment for Safe and Efficient Facility Management',
        image: 'assets/images/engineering/thumbnails/buildings_facilities.webp',
        imageLarge: 'assets/images/engineering/large/buildings_facilities.webp',
        imageHero: 'assets/images/engineering/hero/buildings_facilities.webp',
        description: 'Comprehensive building and facility management solutions.'
    },
    {
        id: 5,
        title: 'Construction',
        subtitle: 'Reliable Water Solutions to Tackle Construction Site Challenges',
        image: 'assets/images/engineering/thumbnails/construction.webp',
        imageLarge: 'assets/images/engineering/large/construction.webp',
        imageHero: 'assets/images/engineering/hero/construction.webp',
        description: 'Advanced water management solutions for construction projects.'
    },
    {
        id: 6,
        title: 'Energy & Power Generation',
        subtitle: 'Innovative Water Solutions for Power and Energy Sectors',
        image: 'assets/images/engineering/thumbnails/energy_power_generation.webp',
        imageLarge: 'assets/images/engineering/large/energy_power_generation.webp',
        imageHero: 'assets/images/engineering/hero/energy_power_generation.webp',
        description: 'Comprehensive water solutions for energy production.'
    },
    {
        id: 7,
        title: 'Environment',
        subtitle: 'Protecting Natural Resources with Advanced Water Solutions',
        image: 'assets/images/engineering/thumbnails/environment.webp',
        imageLarge: 'assets/images/engineering/large/environment.webp',
        imageHero: 'assets/images/engineering/hero/environment.webp',
        description: 'Environmental protection and resource management solutions.'
    },
    {
        id: 8,
        title: 'Food & Beverage',
        subtitle: 'Efficient Water and Wastewater Management for Food Production',
        image: 'assets/images/engineering/thumbnails/food_beverage.webp',
        imageLarge: 'assets/images/engineering/large/food_beverage.webp',
        imageHero: 'assets/images/engineering/hero/food_beverage.webp',
        description: 'Specialized solutions for food and beverage production.'
    },
    {
        id: 9,
        title: 'General Industry',
        subtitle: 'Reliable Water and Wastewater Solutions for Industrial Applications',
        image: 'assets/images/engineering/thumbnails/general_industry.webp',
        imageLarge: 'assets/images/engineering/large/general_industry.webp',
        imageHero: 'assets/images/engineering/hero/general_industry.webp',
        description: 'Comprehensive industrial water management solutions.'
    },
    {
        id: 10,
        title: 'Healthcare',
        subtitle: 'Advanced Water Purification for Critical Medical Operations',
        image: 'assets/images/engineering/thumbnails/healthcare.webp',
        imageLarge: 'assets/images/engineering/large/healthcare.webp',
        imageHero: 'assets/images/engineering/hero/healthcare.webp',
        description: 'Specialized water solutions for healthcare facilities.'
    },
    {
        id: 11,
        title: 'Metals & Mining',
        subtitle: 'Cost-Effective Water Management for Sustainable Mining Operations',
        image: 'assets/images/engineering/thumbnails/metals_mining.webp',
        imageLarge: 'assets/images/engineering/large/metals_mining.webp',
        imageHero: 'assets/images/engineering/hero/metals_mining.webp',
        description: 'Advanced solutions for mining and metal processing.'
    },
    {
        id: 12,
        title: 'Microelectronics',
        subtitle: 'High-Purity Water Solutions for the Semiconductor Industry',
        image: 'assets/images/engineering/thumbnails/microelectronics.webp',
        imageLarge: 'assets/images/engineering/large/microelectronics.webp',
        imageHero: 'assets/images/engineering/hero/microelectronics.webp',
        description: 'Ultra-pure water solutions for semiconductor manufacturing.'
    },
    {
        id: 13,
        title: 'Municipal Drinking Water',
        subtitle: 'Delivering Safe and Reliable Drinking Water for Communities',
        image: 'assets/images/engineering/thumbnails/municipal_drinking_water.webp',
        imageLarge: 'assets/images/engineering/large/municipal_drinking_water.webp',
        imageHero: 'assets/images/engineering/hero/municipal_drinking_water.webp',
        description: 'Advanced solutions for municipal water treatment.'
    },
    {
        id: 14,
        title: 'Municipal Wastewater Treatment',
        subtitle: 'Advanced Solutions for Sustainable Wastewater Management',
        image: 'assets/images/engineering/thumbnails/municipal_wastewater_treatment.webp',
        imageLarge: 'assets/images/engineering/large/municipal_wastewater_treatment.webp',
        imageHero: 'assets/images/engineering/hero/municipal_wastewater_treatment.webp',
        description: 'Comprehensive municipal wastewater treatment solutions.'
    },
    {
        id: 15,
        title: 'Oil and Gas',
        subtitle: 'Innovative Water Management for the Energy Sector',
        image: 'assets/images/engineering/thumbnails/oil_and_gas.webp',
        imageLarge: 'assets/images/engineering/large/oil_and_gas.webp',
        imageHero: 'assets/images/engineering/hero/oil_and_gas.webp',
        description: 'Specialized solutions for oil and gas operations.'
    },
    {
        id: 16,
        title: 'Pharmaceutical',
        subtitle: 'Precision Water Solutions for Critical Pharmaceutical Processes',
        image: 'assets/images/engineering/thumbnails/pharmaceutical.webp',
        imageLarge: 'assets/images/engineering/large/pharmaceutical.webp',
        imageHero: 'assets/images/engineering/hero/pharmaceutical.webp',
        description: 'High-purity water solutions for pharmaceutical manufacturing.'
    },
    {
        id: 17,
        title: 'Refining & Chemicals',
        subtitle: 'Ensuring Quality and Compliance in Chemical and Hydrocarbon Processing',
        image: 'assets/images/engineering/thumbnails/refining_chemicals.webp',
        imageLarge: 'assets/images/engineering/large/refining_chemicals.webp',
        imageHero: 'assets/images/engineering/hero/refining_chemicals.webp',
        description: 'Advanced solutions for chemical and refining processes.'
    },
    {
        id: 18,
        title: 'Transportation',
        subtitle: 'Smart Water Solutions for the Transportation Industry',
        image: 'assets/images/engineering/thumbnails/transportation.webp',
        imageLarge: 'assets/images/engineering/large/transportation.webp',
        imageHero: 'assets/images/engineering/hero/transportation.webp',
        description: 'Specialized solutions for transportation applications.'
    },
    {
        id: 19,
        title: 'Utility Infrastructure',
        subtitle: 'Revolutionizing Smart Water and Energy Management',
        image: 'assets/images/engineering/thumbnails/utility_infrastructure.webp',
        imageLarge: 'assets/images/engineering/large/utility_infrastructure.webp',
        imageHero: 'assets/images/engineering/hero/utility_infrastructure.webp',
        description: 'Innovative solutions for utility infrastructure.'
    }
];

function createCard(category) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', category.id);

    // Проверяем наличие изображения
    const thumbnailPath = category.image;
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${thumbnailPath}" alt="${category.title}" loading="lazy">
        </div>
        <div class="card-content">
            <h3 class="card-title">${category.title}</h3>
        </div>
    `;

    const img = card.querySelector('img');
    img.onload = function() {
        this.classList.add('loaded');
    };
    
    img.onerror = function() {
        console.error(`Ошибка загрузки изображения: ${thumbnailPath}`);
        // Пробуем загрузить запасное изображение
        this.src = 'assets/images/placeholder.jpg';
    };
    
    card.addEventListener('click', () => {
        window.location.href = `design/${category.id}.html`;
    });
    
    return card;
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
            setTimeout(() => {
                card.classList.add('visible');
            }, 100 * parseInt(card.getAttribute('data-id')));
        }
    });
}

// Функция для предварительной загрузки изображений
function preloadImages() {
    // Предзагружаем все изображения для быстрого отображения
    designCategories.forEach(category => {
        const img = new Image();
        img.src = category.image;
    });
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.querySelector('.card-grid');
    
    // Предзагружаем изображения сразу
    preloadImages();
    
    // Создаем и добавляем карточки на страницу
    designCategories.forEach(category => {
        const card = createCard(category);
        cardGrid.appendChild(card);
    });
    
    // Делаем карточки видимыми сразу при загрузке страницы
    setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, 25 * index);
        });
    }, 50);
    
    // Добавляем обработчик прокрутки для анимации
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Устанавливаем текущий год в футере
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

function loadCategory(category) {
    const heroImage = document.querySelector('.hero-image');
    heroImage.style.backgroundImage = `url('${category.imageHero.replace('design', 'engineering')}')`;
    
    document.querySelector('.category-title').textContent = category.title;
    document.querySelector('.category-subtitle').textContent = category.subtitle;
    
    // Update content sections
    document.querySelector('.overview-text').textContent = category.content.overview;
    
    // Update lists
    updateList('.approach-list', category.content.approach);
    updateList('.technologies-list', category.content.technologies);
    updateList('.benefits-list', category.content.benefits);
} 