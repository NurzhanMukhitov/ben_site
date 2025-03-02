// Design & Engineering Cards Data
// Импортируем данные из scripts/category-data.js
const designCategories = [
    {
        id: 1,
        title: 'Agriculture',
        subtitle: 'Enhancing Agricultural Water Use for Healthier Soil, Crops, and Livestock',
        image: 'assets/images/design/thumbnails/agriculture.jpg',
        imageLarge: 'assets/images/design/large/agriculture.jpg',
        imageHero: 'assets/images/design/hero/agriculture.jpg',
        description: 'Innovative solutions for sustainable agricultural development.'
    },
    {
        id: 2,
        title: 'Aquaculture',
        subtitle: 'Comprehensive Water Management to Improve Yields and Reduce Disease Risks',
        image: 'assets/images/design/thumbnails/aquaculture.jpg',
        imageLarge: 'assets/images/design/large/aquaculture.jpg',
        imageHero: 'assets/images/design/hero/aquaculture.jpg',
        description: 'Advanced systems for aquaculture and fish farming.'
    },
    {
        id: 3,
        title: 'Aquatics & Pools',
        subtitle: 'Maintaining Superior Water Quality for Recreational Facilities',
        image: 'assets/images/design/thumbnails/aquatics_pools.jpg',
        imageLarge: 'assets/images/design/large/aquatics_pools.jpg',
        imageHero: 'assets/images/design/hero/aquatics_pools.jpg',
        description: 'Professional solutions for aquatic facilities and pools.'
    },
    {
        id: 4,
        title: 'Buildings & Facilities',
        subtitle: 'Customized Water Treatment for Safe and Efficient Facility Management',
        image: 'assets/images/design/thumbnails/buildings_facilities.jpg',
        imageLarge: 'assets/images/design/large/buildings_facilities.jpg',
        imageHero: 'assets/images/design/hero/buildings_facilities.jpg',
        description: 'Comprehensive building and facility management solutions.'
    },
    {
        id: 5,
        title: 'Construction',
        subtitle: 'Reliable Water Solutions to Tackle Construction Site Challenges',
        image: 'assets/images/design/thumbnails/construction.jpg',
        imageLarge: 'assets/images/design/large/construction.jpg',
        imageHero: 'assets/images/design/hero/construction.jpg',
        description: 'Advanced water management solutions for construction projects.'
    },
    {
        id: 6,
        title: 'Energy & Power Generation',
        subtitle: 'Innovative Water Solutions for Power and Energy Sectors',
        image: 'assets/images/design/thumbnails/energy_power_generation.jpg',
        imageLarge: 'assets/images/design/large/energy_power_generation.jpg',
        imageHero: 'assets/images/design/hero/energy_power_generation.jpg',
        description: 'Comprehensive water solutions for energy production.'
    },
    {
        id: 7,
        title: 'Environment',
        subtitle: 'Protecting Natural Resources with Advanced Water Solutions',
        image: 'assets/images/design/thumbnails/environment.jpg',
        imageLarge: 'assets/images/design/large/environment.jpg',
        imageHero: 'assets/images/design/hero/environment.jpg',
        description: 'Environmental protection and resource management solutions.'
    },
    {
        id: 8,
        title: 'Food & Beverage',
        subtitle: 'Efficient Water and Wastewater Management for Food Production',
        image: 'assets/images/design/thumbnails/food_beverage.jpg',
        imageLarge: 'assets/images/design/large/food_beverage.jpg',
        imageHero: 'assets/images/design/hero/food_beverage.jpg',
        description: 'Specialized solutions for food and beverage production.'
    },
    {
        id: 9,
        title: 'General Industry',
        subtitle: 'Reliable Water and Wastewater Solutions for Industrial Applications',
        image: 'assets/images/design/thumbnails/general_industry.jpg',
        imageLarge: 'assets/images/design/large/general_industry.jpg',
        imageHero: 'assets/images/design/hero/general_industry.jpg',
        description: 'Comprehensive industrial water management solutions.'
    },
    {
        id: 10,
        title: 'Healthcare',
        subtitle: 'Advanced Water Purification for Critical Medical Operations',
        image: 'assets/images/design/thumbnails/healthcare.jpg',
        imageLarge: 'assets/images/design/large/healthcare.jpg',
        imageHero: 'assets/images/design/hero/healthcare.jpg',
        description: 'Specialized water solutions for healthcare facilities.'
    },
    {
        id: 11,
        title: 'Metals & Mining',
        subtitle: 'Cost-Effective Water Management for Sustainable Mining Operations',
        image: 'assets/images/design/thumbnails/metals_mining.jpg',
        imageLarge: 'assets/images/design/large/metals_mining.jpg',
        imageHero: 'assets/images/design/hero/metals_mining.jpg',
        description: 'Advanced solutions for mining and metal processing.'
    },
    {
        id: 12,
        title: 'Microelectronics',
        subtitle: 'High-Purity Water Solutions for the Semiconductor Industry',
        image: 'assets/images/design/thumbnails/microelectronics.jpg',
        imageLarge: 'assets/images/design/large/microelectronics.jpg',
        imageHero: 'assets/images/design/hero/microelectronics.jpg',
        description: 'Ultra-pure water solutions for semiconductor manufacturing.'
    },
    {
        id: 13,
        title: 'Municipal Drinking Water',
        subtitle: 'Delivering Safe and Reliable Drinking Water for Communities',
        image: 'assets/images/design/thumbnails/municipal_drinking_water.jpg',
        imageLarge: 'assets/images/design/large/municipal_drinking_water.jpg',
        imageHero: 'assets/images/design/hero/municipal_drinking_water.jpg',
        description: 'Advanced solutions for municipal water treatment.'
    },
    {
        id: 14,
        title: 'Municipal Wastewater Treatment',
        subtitle: 'Advanced Solutions for Sustainable Wastewater Management',
        image: 'assets/images/design/thumbnails/municipal_wastewater_treatment.jpg',
        imageLarge: 'assets/images/design/large/municipal_wastewater_treatment.jpg',
        imageHero: 'assets/images/design/hero/municipal_wastewater_treatment.jpg',
        description: 'Comprehensive municipal wastewater treatment solutions.'
    },
    {
        id: 15,
        title: 'Oil and Gas',
        subtitle: 'Innovative Water Management for the Energy Sector',
        image: 'assets/images/design/thumbnails/oil_and_gas.jpg',
        imageLarge: 'assets/images/design/large/oil_and_gas.jpg',
        imageHero: 'assets/images/design/hero/oil_and_gas.jpg',
        description: 'Specialized solutions for oil and gas operations.'
    },
    {
        id: 16,
        title: 'Pharmaceutical',
        subtitle: 'Precision Water Solutions for Critical Pharmaceutical Processes',
        image: 'assets/images/design/thumbnails/pharmaceutical.jpg',
        imageLarge: 'assets/images/design/large/pharmaceutical.jpg',
        imageHero: 'assets/images/design/hero/pharmaceutical.jpg',
        description: 'High-purity water solutions for pharmaceutical manufacturing.'
    },
    {
        id: 17,
        title: 'Refining & Chemicals',
        subtitle: 'Ensuring Quality and Compliance in Chemical and Hydrocarbon Processing',
        image: 'assets/images/design/thumbnails/refining_chemicals.jpg',
        imageLarge: 'assets/images/design/large/refining_chemicals.jpg',
        imageHero: 'assets/images/design/hero/refining_chemicals.jpg',
        description: 'Advanced solutions for chemical and refining processes.'
    },
    {
        id: 18,
        title: 'Transportation',
        subtitle: 'Smart Water Solutions for the Transportation Industry',
        image: 'assets/images/design/thumbnails/transportation.jpg',
        imageLarge: 'assets/images/design/large/transportation.jpg',
        imageHero: 'assets/images/design/hero/transportation.jpg',
        description: 'Specialized solutions for transportation applications.'
    },
    {
        id: 19,
        title: 'Utility Infrastructure',
        subtitle: 'Revolutionizing Smart Water and Energy Management',
        image: 'assets/images/design/thumbnails/utility_infrastructure.jpg',
        imageLarge: 'assets/images/design/large/utility_infrastructure.jpg',
        imageHero: 'assets/images/design/hero/utility_infrastructure.jpg',
        description: 'Innovative solutions for utility infrastructure.'
    }
];

// Function to create a card element
function createCard(category) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-category-id', category.id);
    card.setAttribute('data-id', category.id);
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${category.image}" alt="${category.title}" loading="lazy">
        </div>
        <div class="card-content">
            <h3 class="card-title">${category.title}</h3>
        </div>
    `;
    
    // Добавляем обработчик загрузки изображения
    const img = card.querySelector('img');
    img.onload = function() {
        this.classList.add('loaded');
    };
    
    card.addEventListener('click', () => {
        window.location.href = `design/${category.id}.html`;
    });
    
    return card;
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
    // Предзагружаем фоновое изображение
    const bgImage = new Image();
    bgImage.src = 'assets/images/design/hero-bg.jpg';
    
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
            }, 25 * index); // Уменьшаем задержку для более быстрого эффекта появления
        });
    }, 50); // Уменьшаем начальную задержку
    
    // Добавляем обработчик прокрутки для анимации
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Устанавливаем текущий год в футере
    document.getElementById('current-year').textContent = new Date().getFullYear();
}); 