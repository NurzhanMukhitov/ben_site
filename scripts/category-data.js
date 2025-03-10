const categories = [
    {
        id: 1,
        title: 'Agriculture',
        subtitle: 'Enhancing Agricultural Water Use for Healthier Soil, Crops, and Livestock',
        image: 'assets/images/engineering/thumbnails/agriculture.jpg',
        imageLarge: 'assets/images/engineering/large/agriculture.jpg',
        imageHero: 'assets/images/engineering/hero/agriculture.jpg',
        description: 'Innovative solutions for sustainable agricultural development',
        link: 'engineering/agriculture.html'
    },
    {
        id: 2,
        title: 'Aquaculture',
        subtitle: 'Comprehensive Water Management to Improve Yields and Reduce Disease Risks',
        image: 'assets/images/engineering/thumbnails/aquaculture.jpg',
        imageLarge: 'assets/images/engineering/large/aquaculture.jpg',
        imageHero: 'assets/images/engineering/hero/aquaculture.jpg',
        description: 'Advanced systems for aquaculture and fish farming',
        link: 'engineering/aquaculture.html'
    },
    {
        id: 3,
        title: 'Aquatics & Pools',
        subtitle: 'Maintaining Superior Water Quality for Recreational Facilities',
        image: 'assets/images/engineering/thumbnails/aquatics_pools.jpg',
        imageLarge: 'assets/images/engineering/large/aquatics_pools.jpg',
        imageHero: 'assets/images/engineering/hero/aquatics_pools.jpg',
        description: 'Professional solutions for aquatic facilities and pools',
        link: 'engineering/aquatics_pools.html'
    },
    {
        id: 4,
        title: 'Buildings & Facilities',
        subtitle: 'Customized Water Treatment for Safe and Efficient Facility Management',
        image: 'assets/images/engineering/thumbnails/buildings_facilities.jpg',
        imageLarge: 'assets/images/engineering/large/buildings_facilities.jpg',
        imageHero: 'assets/images/engineering/hero/buildings_facilities.jpg',
        description: 'Comprehensive building and facility management solutions',
        link: 'engineering/buildings_facilities.html'
    },
    {
        id: 5,
        title: 'Construction',
        subtitle: 'Reliable Water Solutions to Tackle Construction Site Challenges',
        image: 'assets/images/engineering/thumbnails/construction.jpg',
        imageLarge: 'assets/images/engineering/large/construction.jpg',
        imageHero: 'assets/images/engineering/hero/construction.jpg',
        description: 'Advanced water management solutions for construction projects',
        link: 'engineering/construction.html'
    },
    {
        id: 6,
        title: 'Energy & Power Generation',
        subtitle: 'Innovative Water Solutions for Power and Energy Sectors',
        image: 'assets/images/engineering/thumbnails/energy_power_generation.jpg',
        imageLarge: 'assets/images/engineering/large/energy_power_generation.jpg',
        imageHero: 'assets/images/engineering/hero/energy_power_generation.jpg',
        description: 'Comprehensive water solutions for energy production',
        link: 'engineering/energy_power_generation.html'
    },
    {
        id: 7,
        title: 'Environment',
        subtitle: 'Protecting Natural Resources with Advanced Water Solutions',
        image: 'assets/images/engineering/thumbnails/environment.jpg',
        imageLarge: 'assets/images/engineering/large/environment.jpg',
        imageHero: 'assets/images/engineering/hero/environment.jpg',
        description: 'Environmental protection and resource management solutions',
        link: 'engineering/environment.html'
    },
    {
        id: 8,
        title: 'Food & Beverage',
        subtitle: 'Efficient Water and Wastewater Management for Food Production',
        image: 'assets/images/engineering/thumbnails/food_beverage.jpg',
        imageLarge: 'assets/images/engineering/large/food_beverage.jpg',
        imageHero: 'assets/images/engineering/hero/food_beverage.jpg',
        description: 'Specialized solutions for food and beverage production',
        link: 'engineering/food_beverage.html'
    },
    {
        id: 9,
        title: 'General Industry',
        subtitle: 'Reliable Water and Wastewater Solutions for Industrial Applications',
        image: 'assets/images/engineering/thumbnails/general_industry.jpg',
        imageLarge: 'assets/images/engineering/large/general_industry.jpg',
        imageHero: 'assets/images/engineering/hero/general_industry.jpg',
        description: 'Comprehensive industrial water management solutions',
        link: 'engineering/general_industry.html'
    },
    {
        id: 10,
        title: 'Healthcare',
        subtitle: 'Advanced Water Purification for Critical Medical Operations',
        image: 'assets/images/engineering/thumbnails/healthcare.jpg',
        imageLarge: 'assets/images/engineering/large/healthcare.jpg',
        imageHero: 'assets/images/engineering/hero/healthcare.jpg',
        description: 'Specialized water solutions for healthcare facilities',
        link: 'engineering/healthcare.html'
    },
    {
        id: 11,
        title: 'Metals & Mining',
        subtitle: 'Cost-Effective Water Management for Sustainable Mining Operations',
        image: 'assets/images/engineering/thumbnails/metals_mining.jpg',
        imageLarge: 'assets/images/engineering/large/metals_mining.jpg',
        imageHero: 'assets/images/engineering/hero/metals_mining.jpg',
        description: 'Advanced solutions for mining and metal processing',
        link: 'engineering/metals_mining.html'
    },
    {
        id: 12,
        title: 'Microelectronics',
        subtitle: 'High-Purity Water Solutions for the Semiconductor Industry',
        image: 'assets/images/engineering/thumbnails/microelectronics.jpg',
        imageLarge: 'assets/images/engineering/large/microelectronics.jpg',
        imageHero: 'assets/images/engineering/hero/microelectronics.jpg',
        description: 'Ultra-pure water solutions for semiconductor manufacturing',
        link: 'engineering/microelectronics.html'
    },
    {
        id: 13,
        title: 'Municipal Drinking Water',
        subtitle: 'Delivering Safe and Reliable Drinking Water for Communities',
        image: 'assets/images/engineering/thumbnails/municipal_drinking_water.jpg',
        imageLarge: 'assets/images/engineering/large/municipal_drinking_water.jpg',
        imageHero: 'assets/images/engineering/hero/municipal_drinking_water.jpg',
        description: 'Advanced solutions for municipal water treatment',
        link: 'engineering/municipal_drinking_water.html'
    },
    {
        id: 14,
        title: 'Municipal Wastewater Treatment',
        subtitle: 'Advanced Solutions for Sustainable Wastewater Management',
        image: 'assets/images/engineering/thumbnails/municipal_wastewater_treatment.jpg',
        imageLarge: 'assets/images/engineering/large/municipal_wastewater_treatment.jpg',
        imageHero: 'assets/images/engineering/hero/municipal_wastewater_treatment.jpg',
        description: 'Comprehensive municipal wastewater treatment solutions',
        link: 'engineering/municipal_wastewater_treatment.html'
    },
    {
        id: 15,
        title: 'Oil and Gas',
        subtitle: 'Innovative Water Management for the Energy Sector',
        image: 'assets/images/engineering/thumbnails/oil_and_gas.jpg',
        imageLarge: 'assets/images/engineering/large/oil_and_gas.jpg',
        imageHero: 'assets/images/engineering/hero/oil_and_gas.jpg',
        description: 'Specialized solutions for oil and gas operations',
        link: 'engineering/oil_and_gas.html'
    },
    {
        id: 16,
        title: 'Pharmaceutical',
        subtitle: 'Precision Water Solutions for Critical Pharmaceutical Processes',
        image: 'assets/images/engineering/thumbnails/pharmaceutical.jpg',
        imageLarge: 'assets/images/engineering/large/pharmaceutical.jpg',
        imageHero: 'assets/images/engineering/hero/pharmaceutical.jpg',
        description: 'High-purity water solutions for pharmaceutical manufacturing',
        link: 'engineering/pharmaceutical.html'
    },
    {
        id: 17,
        title: 'Refining & Chemicals',
        subtitle: 'Ensuring Quality and Compliance in Chemical and Hydrocarbon Processing',
        image: 'assets/images/engineering/thumbnails/refining_chemicals.jpg',
        imageLarge: 'assets/images/engineering/large/refining_chemicals.jpg',
        imageHero: 'assets/images/engineering/hero/refining_chemicals.jpg',
        description: 'Advanced solutions for chemical and refining processes',
        link: 'engineering/refining_chemicals.html'
    },
    {
        id: 18,
        title: 'Transportation',
        subtitle: 'Smart Water Solutions for the Transportation Industry',
        image: 'assets/images/engineering/thumbnails/transportation.jpg',
        imageLarge: 'assets/images/engineering/large/transportation.jpg',
        imageHero: 'assets/images/engineering/hero/transportation.jpg',
        description: 'Specialized solutions for transportation applications',
        link: 'engineering/transportation.html'
    },
    {
        id: 19,
        title: 'Utility Infrastructure',
        subtitle: 'Revolutionizing Smart Water and Energy Management',
        image: 'assets/images/engineering/thumbnails/utility_infrastructure.jpg',
        imageLarge: 'assets/images/engineering/large/utility_infrastructure.jpg',
        imageHero: 'assets/images/engineering/hero/utility_infrastructure.jpg',
        description: 'Innovative solutions for utility infrastructure',
        link: 'engineering/utility_infrastructure.html'
    }
];

// Экспорт для браузера
if (typeof window !== 'undefined') {
    window.categories = categories;
}

// Экспорт для Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = categories;
} 