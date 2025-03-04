const categories = [
    {
        id: 1,
        title: 'Agriculture',
        subtitle: 'Enhancing Agricultural Water Use for Healthier Soil, Crops, and Livestock',
        image: 'assets/images/engineering/thumbnails/agriculture.webp',
        imageLarge: 'assets/images/engineering/large/agriculture.webp',
        imageHero: 'assets/images/engineering/hero/agriculture.webp',
        description: 'Innovative solutions for sustainable agricultural development.',
        content: {
            overview: 'The agricultural sector faces the challenge of optimizing water use while maintaining sustainability to meet growing global demands. Since farming consumes 70% of the world\'s freshwater supply, integrating cutting-edge technologies and best practices is essential for long-term success. At Alsuro, we are dedicated to delivering solutions that help farmers maintain high standards of water quality, distribution, and management—even in the most demanding conditions.',
            approach: [
                'Smart irrigation systems',
                'Water quality management',
                'Resource optimization',
                'Sustainable farming practices',
                'Environmental monitoring'
            ],
            technologies: [
                'Advanced irrigation control',
                'Water treatment systems',
                'Monitoring and analytics',
                'Distribution automation',
                'Resource management tools'
            ],
            benefits: [
                'Improved water efficiency',
                'Enhanced crop health',
                'Sustainable practices',
                'Cost reduction',
                'Environmental protection'
            ]
        }
    },
    {
        id: 2,
        title: 'Aquaculture',
        subtitle: 'Comprehensive Water Management to Improve Yields and Reduce Disease Risks',
        image: 'assets/images/engineering/thumbnails/aquaculture.webp',
        imageLarge: 'assets/images/engineering/large/aquaculture.webp',
        imageHero: 'assets/images/engineering/hero/aquaculture.webp',
        description: 'Advanced systems for aquaculture and fish farming.',
        content: {
            overview: 'Aquaculture is one of the fastest-growing food industries, now supplying 50% of the world\'s fish consumption. As demand for farmed seafood continues to rise at a pace exceeding that of other meat industries, producers face both significant opportunities and mounting risks. For decades, Alsuro has collaborated with fish farmers, equipment manufacturers, system integrators, well boat builders, and seafood processors. With over 40 years of expertise in land-based recirculating aquaculture systems (RAS), flow-through setups, and open-water cage farming, our Aquaculture Center of Excellence is at the forefront of innovation.',
            approach: [
                'Recirculating aquaculture systems (RAS)',
                'Water quality management',
                'Disease prevention',
                'Production optimization',
                'Sustainable practices'
            ],
            technologies: [
                'Advanced filtration systems',
                'Pathogen control solutions',
                'Sea lice treatment systems',
                'Water quality monitoring',
                'Environmental control systems'
            ],
            benefits: [
                'Increased production efficiency',
                'Improved fish health',
                'Reduced disease risks',
                'Sustainable operations',
                'Cost-effective solutions'
            ]
        }
    },
    {
        id: 3,
        title: 'Aquatics & Pools',
        subtitle: 'Maintaining Superior Water Quality for Recreational Facilities',
        image: 'assets/images/engineering/thumbnails/aquatics_pools.webp',
        imageLarge: 'assets/images/engineering/large/aquatics_pools.webp',
        imageHero: 'assets/images/engineering/hero/aquatics_pools.webp',
        description: 'Professional solutions for aquatic facilities and pools.',
        content: {
            overview: 'Ensuring clean and safe water is essential for aquatic facilities of all types. Whether you manage a competitive swimming pool, water park, swim school, fitness center, zoo, or aquarium, Alsuro provides a full suite of solutions designed to meet your facility\'s unique needs. Effective filtration, disinfection, and water recirculation are crucial for maintaining both water and air quality in recreational settings.',
            approach: [
                'Water quality optimization',
                'Filtration system design',
                'Chemical balance management',
                'Energy efficiency solutions',
                'Safety compliance'
            ],
            technologies: [
                'Advanced filtration systems',
                'Chloramine reduction systems',
                'UV disinfection',
                'Energy-efficient pumps',
                'Water quality monitoring'
            ],
            benefits: [
                'Superior water quality',
                'Enhanced user safety',
                'Reduced operating costs',
                'Energy efficiency',
                'Improved visitor experience'
            ]
        }
    },
    {
        id: 4,
        title: 'Buildings & Facilities',
        subtitle: 'Customized Water Treatment for Safe and Efficient Facility Management',
        image: 'assets/images/engineering/thumbnails/buildings_facilities.webp',
        imageLarge: 'assets/images/engineering/large/buildings_facilities.webp',
        imageHero: 'assets/images/engineering/hero/buildings_facilities.webp',
        description: 'Comprehensive building and facility management solutions.',
        content: {
            overview: 'Water management plays a critical role in maintaining health, safety, and operational efficiency in both residential and commercial buildings. Large facilities, in particular, require reliable and energy-efficient solutions to meet the growing demands of their occupants. At Alsuro, we provide tailored heating, cooling, and water treatment technologies to support the smooth operation of various building types.',
            approach: [
                'System optimization',
                'Energy efficiency',
                'Water quality management',
                'Preventive maintenance',
                'Sustainability integration'
            ],
            technologies: [
                'Smart building systems',
                'Water treatment solutions',
                'HVAC optimization',
                'Monitoring systems',
                'Energy management tools'
            ],
            benefits: [
                'Improved efficiency',
                'Cost reduction',
                'Enhanced safety',
                'Regulatory compliance',
                'Sustainable operations'
            ]
        }
    },
    {
        id: 5,
        title: 'Construction',
        subtitle: 'Reliable Water Solutions to Tackle Construction Site Challenges',
        image: 'assets/images/engineering/thumbnails/construction.webp',
        imageLarge: 'assets/images/engineering/large/construction.webp',
        imageHero: 'assets/images/engineering/hero/construction.webp',
        description: 'Advanced water management solutions for construction projects.',
        content: {
            overview: 'Construction projects often face issues related to excess stormwater, sediment-laden runoff, and potentially contaminated groundwater. If not properly managed, these challenges can lead to safety risks, project delays, material damage, and regulatory violations. No matter the type of construction—whether commercial, residential, industrial, infrastructure, or utility projects—Alsuro delivers tailored solutions to mitigate these risks effectively.',
            approach: [
                'Site water management',
                'Dewatering solutions',
                'Stormwater control',
                'Sediment management',
                'Environmental compliance'
            ],
            technologies: [
                'Mobile treatment systems',
                'Dewatering pumps',
                'Sediment control',
                'Water recycling systems',
                'Monitoring equipment'
            ],
            benefits: [
                'Project efficiency',
                'Regulatory compliance',
                'Risk mitigation',
                'Cost reduction',
                'Environmental protection'
            ]
        }
    },
    {
        id: 6,
        title: 'Energy & Power Generation',
        subtitle: 'Innovative Water Solutions for Power and Energy Sectors',
        image: 'assets/images/engineering/thumbnails/energy_power.webp',
        imageLarge: 'assets/images/engineering/large/energy_power.webp',
        imageHero: 'assets/images/engineering/hero/energy_power.webp',
        description: 'Comprehensive water solutions for energy production.',
        content: {
            overview: 'Across all energy industries—whether traditional or renewable—water management remains a crucial operational component. From hydroelectric power plants and geothermal reservoirs to green hydrogen production, each sector faces unique water treatment challenges. At Alsuro, we offer a comprehensive portfolio of solutions designed to help energy producers optimize water usage, lower operating costs, meet sustainability targets, and comply with wastewater discharge regulations.',
            approach: [
                'Process optimization',
                'Water conservation',
                'Efficiency improvement',
                'Environmental compliance',
                'Sustainable operations'
            ],
            technologies: [
                'Treatment systems',
                'Cooling solutions',
                'Wastewater management',
                'Monitoring systems',
                'Resource recovery'
            ],
            benefits: [
                'Operational efficiency',
                'Cost reduction',
                'Environmental compliance',
                'Resource optimization',
                'Sustainable practices'
            ]
        }
    },
    {
        id: 7,
        title: 'Environment',
        subtitle: 'Protecting Natural Resources with Advanced Water Solutions',
        image: 'assets/images/engineering/thumbnails/environment.webp',
        imageLarge: 'assets/images/engineering/large/environment.webp',
        imageHero: 'assets/images/engineering/hero/environment.webp',
        description: 'Environmental protection and resource management solutions.',
        content: {
            overview: 'Environmental sustainability is at the core of modern water management. From stricter governmental regulations to real-time monitoring of pollution incidents, organizations must proactively safeguard water resources. After storms or floods, ensuring the safety of freshwater sources becomes even more critical. At Alsuro, we work alongside environmental scientists, engineers, industries, and government agencies to monitor, maintain, and improve water quality.',
            approach: [
                'Resource protection',
                'Pollution prevention',
                'Ecosystem monitoring',
                'Remediation planning',
                'Compliance management'
            ],
            technologies: [
                'Monitoring systems',
                'Treatment solutions',
                'Data analytics',
                'Remediation tools',
                'Protection systems'
            ],
            benefits: [
                'Environmental protection',
                'Regulatory compliance',
                'Resource conservation',
                'Risk mitigation',
                'Sustainable practices'
            ]
        }
    },
    {
        id: 8,
        title: 'Food & Beverage',
        subtitle: 'Efficient Water and Wastewater Management for Food Production',
        image: 'assets/images/engineering/thumbnails/food_beverage.webp',
        imageLarge: 'assets/images/engineering/large/food_beverage.webp',
        imageHero: 'assets/images/engineering/hero/food_beverage.webp',
        description: 'Specialized solutions for food and beverage production.',
        content: {
            overview: 'The food and beverage industry relies on significant amounts of water for both ingredient processing and plant sanitation. Managing this resource efficiently while addressing consumer expectations for sustainability, rising utility costs, and evolving regulations is a key challenge for manufacturers. Alsuro offers comprehensive water and wastewater solutions that cover every stage of the production cycle.',
            approach: [
                'Process optimization',
                'Quality control',
                'Resource efficiency',
                'Sanitation management',
                'Sustainability integration'
            ],
            technologies: [
                'Treatment systems',
                'Process automation',
                'Quality monitoring',
                'Resource recovery',
                'Sanitation solutions'
            ],
            benefits: [
                'Production efficiency',
                'Quality assurance',
                'Cost reduction',
                'Regulatory compliance',
                'Sustainable operations'
            ]
        }
    },
    {
        id: 9,
        title: 'General Industry',
        subtitle: 'Reliable Water and Wastewater Solutions for Industrial Applications',
        image: 'assets/images/engineering/thumbnails/general_industry.jpg',
        imageLarge: 'assets/images/engineering/large/general_industry.jpg',
        imageHero: 'assets/images/engineering/hero/general_industry.jpg',
        description: 'Comprehensive industrial water management solutions.',
        content: {
            overview: 'Managing water and wastewater efficiently across various industries requires expertise and innovative solutions. Companies face unique challenges in water treatment, ranging from resource conservation to compliance with environmental regulations. At Alsuro, we provide a full spectrum of water, wastewater, and remediation solutions tailored to industrial operations.',
            approach: [
                'Process optimization',
                'Resource management',
                'Compliance assurance',
                'Efficiency improvement',
                'Sustainable practices'
            ],
            technologies: [
                'Treatment systems',
                'Process automation',
                'Monitoring solutions',
                'Resource recovery',
                'Waste management'
            ],
            benefits: [
                'Operational efficiency',
                'Cost reduction',
                'Regulatory compliance',
                'Resource optimization',
                'Environmental protection'
            ]
        }
    },
    {
        id: 10,
        title: 'Healthcare',
        subtitle: 'Advanced Water Purification for Critical Medical Operations',
        image: 'assets/images/engineering/thumbnails/healthcare.jpg',
        imageLarge: 'assets/images/engineering/large/healthcare.jpg',
        imageHero: 'assets/images/engineering/hero/healthcare.jpg',
        description: 'Specialized water solutions for healthcare facilities.',
        content: {
            overview: 'Water quality is essential for medical treatments, diagnostics, research, and the daily operations of healthcare facilities. Strict standards, such as those set by AAMI and CLSI, require reliable water treatment solutions to ensure patient safety and operational efficiency. At Alsuro, we offer high-purity water systems, round-the-clock service, and a comprehensive support network to meet the evolving needs of healthcare providers.',
            approach: [
                'Quality assurance',
                'System reliability',
                'Compliance management',
                'Safety protocols',
                'Support services'
            ],
            technologies: [
                'Purification systems',
                'Dialysis water treatment',
                'Sterilization solutions',
                'Monitoring systems',
                'Quality control'
            ],
            benefits: [
                'Patient safety',
                'Operational reliability',
                'Regulatory compliance',
                'Cost efficiency',
                'Quality assurance'
            ]
        }
    },
    {
        id: 11,
        title: 'Metals & Mining',
        subtitle: 'Cost-Effective Water Management for Sustainable Mining Operations',
        image: 'assets/images/engineering/thumbnails/metals_mining.jpg',
        imageLarge: 'assets/images/engineering/large/metals_mining.jpg',
        imageHero: 'assets/images/engineering/hero/metals_mining.jpg',
        description: 'Advanced solutions for mining and metal processing.',
        content: {
            overview: 'Modern mining requires intensive water use, making efficient management crucial for both profitability and environmental responsibility. Companies must ensure continuous access to high-quality water while meeting strict regulatory requirements for wastewater treatment. At Alsuro, we provide comprehensive water and wastewater solutions that help mining operations recover and recycle the maximum amount of water.',
            approach: [
                'Resource optimization',
                'Process efficiency',
                'Environmental protection',
                'Waste management',
                'Compliance assurance'
            ],
            technologies: [
                'Water treatment',
                'Recovery systems',
                'Process automation',
                'Monitoring solutions',
                'Waste handling'
            ],
            benefits: [
                'Operational efficiency',
                'Cost reduction',
                'Environmental compliance',
                'Resource conservation',
                'Sustainable practices'
            ]
        }
    },
    {
        id: 12,
        title: 'Microelectronics',
        subtitle: 'High-Purity Water Solutions for the Semiconductor Industry',
        image: 'assets/images/engineering/thumbnails/microelectronics.jpg',
        imageLarge: 'assets/images/engineering/large/microelectronics.jpg',
        imageHero: 'assets/images/engineering/hero/microelectronics.jpg',
        description: 'Ultra-pure water solutions for semiconductor manufacturing.',
        content: {
            overview: 'The microelectronics sector relies on ultra-pure water for critical processes such as wafer cleaning, etching, and rinsing, where even microscopic contaminants can affect product quality and production yields. Managing this essential resource is vital for maintaining efficiency in an industry that is rapidly evolving. At Alsuro, we provide specialized water treatment solutions designed to support high-volume production.',
            approach: [
                'Quality control',
                'Process optimization',
                'Contamination prevention',
                'Efficiency improvement',
                'Resource management'
            ],
            technologies: [
                'Ultra-pure systems',
                'Process automation',
                'Monitoring solutions',
                'Quality control',
                'Resource recovery'
            ],
            benefits: [
                'Product quality',
                'Process efficiency',
                'Cost reduction',
                'Resource optimization',
                'Yield improvement'
            ]
        }
    },
    {
        id: 13,
        title: 'Municipal Drinking Water',
        subtitle: 'Safe and Reliable Drinking Water Solutions for Communities',
        image: 'assets/images/engineering/thumbnails/municipal_drinking_water.webp',
        imageLarge: 'assets/images/engineering/large/municipal_drinking_water.webp',
        imageHero: 'assets/images/engineering/hero/municipal_drinking_water.webp',
        description: 'Advanced municipal water treatment and distribution systems.',
        content: {
            overview: 'Municipal water systems face increasing challenges in delivering safe, reliable drinking water to growing populations. From source water protection to distribution system management, utilities must balance water quality, operational efficiency, and infrastructure maintenance. Alsuro provides comprehensive solutions to help utilities meet these challenges while ensuring regulatory compliance and customer satisfaction.',
            approach: [
                'System optimization',
                'Quality management',
                'Infrastructure maintenance',
                'Resource efficiency',
                'Regulatory compliance'
            ],
            technologies: [
                'Treatment systems',
                'Distribution management',
                'Quality monitoring',
                'Infrastructure solutions',
                'Smart water systems'
            ],
            benefits: [
                'Water safety',
                'Operational efficiency',
                'Cost reduction',
                'Regulatory compliance',
                'Customer satisfaction'
            ]
        }
    },
    {
        id: 14,
        title: 'Municipal Wastewater Treatment',
        subtitle: 'Advanced Solutions for Sustainable Wastewater Management',
        image: 'assets/images/engineering/thumbnails/municipal_wastewater.jpg',
        imageLarge: 'assets/images/engineering/large/municipal_wastewater.jpg',
        imageHero: 'assets/images/engineering/hero/municipal_wastewater.jpg',
        description: 'Comprehensive municipal wastewater treatment solutions.',
        content: {
            overview: 'As regulations on effluent quality tighten and utilities face increasing demands to do more with fewer resources, municipalities require efficient wastewater treatment systems that optimize performance and reduce costs. For over a century, Alsuro has been a trusted partner for municipal wastewater treatment, providing innovative technologies to meet evolving environmental and operational needs.',
            approach: [
                'Process optimization',
                'Resource recovery',
                'Energy efficiency',
                'Environmental protection',
                'Compliance management'
            ],
            technologies: [
                'Treatment systems',
                'Biological processes',
                'Filtration solutions',
                'Odor control',
                'Monitoring systems'
            ],
            benefits: [
                'Treatment efficiency',
                'Cost reduction',
                'Environmental compliance',
                'Resource recovery',
                'Sustainable operations'
            ]
        }
    },
    {
        id: 15,
        title: 'Oil and Gas',
        subtitle: 'Innovative Water Management for the Energy Sector',
        image: 'assets/images/engineering/thumbnails/oil_gas.jpg',
        imageLarge: 'assets/images/engineering/large/oil_gas.jpg',
        imageHero: 'assets/images/engineering/hero/oil_gas.jpg',
        description: 'Specialized solutions for oil and gas operations.',
        content: {
            overview: 'The oil and gas industry faces ongoing challenges, including fluctuating prices, rising operational costs, and the need to maintain efficiency while meeting stringent environmental regulations. Effective water treatment is a crucial component in optimizing production processes and ensuring safety. At Alsuro, we provide advanced, integrated solutions to help oil and gas companies control costs, improve efficiency, and enhance performance.',
            approach: [
                'Process optimization',
                'Environmental protection',
                'Safety management',
                'Resource efficiency',
                'Compliance assurance'
            ],
            technologies: [
                'Treatment systems',
                'Process automation',
                'Safety solutions',
                'Monitoring systems',
                'Resource recovery'
            ],
            benefits: [
                'Operational efficiency',
                'Cost reduction',
                'Environmental compliance',
                'Safety improvement',
                'Resource optimization'
            ]
        }
    },
    {
        id: 16,
        title: 'Pharmaceutical',
        subtitle: 'Precision Water Solutions for Critical Pharmaceutical Processes',
        image: 'assets/images/engineering/thumbnails/pharmaceutical.jpg',
        imageLarge: 'assets/images/engineering/large/pharmaceutical.jpg',
        imageHero: 'assets/images/engineering/hero/pharmaceutical.jpg',
        description: 'High-purity water solutions for pharmaceutical manufacturing.',
        content: {
            overview: 'Water is a fundamental component in pharmaceutical manufacturing, used in everything from drug production and laboratory applications to equipment sterilization. Maintaining the highest standards of purity and compliance is essential to ensure product safety and effectiveness. Alsuro offers a full range of water treatment solutions tailored to the pharmaceutical industry's strict requirements.',
            approach: [
                'Quality assurance',
                'Process validation',
                'Compliance management',
                'System reliability',
                'Safety protocols'
            ],
            technologies: [
                'Purification systems',
                'Sterilization solutions',
                'Monitoring systems',
                'Quality control',
                'Validation tools'
            ],
            benefits: [
                'Product quality',
                'Process reliability',
                'Regulatory compliance',
                'Cost efficiency',
                'Safety assurance'
            ]
        }
    },
    {
        id: 17,
        title: 'Refining & Chemicals',
        subtitle: 'Ensuring Quality and Compliance in Chemical and Hydrocarbon Processing',
        image: 'assets/images/engineering/thumbnails/refining_chemicals.jpg',
        imageLarge: 'assets/images/engineering/large/refining_chemicals.jpg',
        imageHero: 'assets/images/engineering/hero/refining_chemicals.jpg',
        description: 'Advanced solutions for chemical and refining processes.',
        content: {
            overview: 'The refining and chemical industries rely on vast amounts of water—over 22 billion gallons daily—for essential processes like cooling, chemical reactions, and material purification. However, water impurities can lead to equipment failures, reduced efficiency, and environmental risks. At Alsuro, we provide advanced water and wastewater treatment solutions to help chemical and hydrocarbon processing plants maintain optimal performance.',
            approach: [
                'Process optimization',
                'Quality control',
                'Safety management',
                'Resource efficiency',
                'Environmental protection'
            ],
            technologies: [
                'Treatment systems',
                'Process automation',
                'Safety solutions',
                'Monitoring systems',
                'Resource recovery'
            ],
            benefits: [
                'Operational efficiency',
                'Product quality',
                'Environmental compliance',
                'Safety assurance',
                'Cost reduction'
            ]
        }
    },
    {
        id: 18,
        title: 'Transportation',
        subtitle: 'Smart Water Solutions for the Transportation Industry',
        image: 'assets/images/engineering/thumbnails/transportation.jpg',
        imageLarge: 'assets/images/engineering/large/transportation.jpg',
        imageHero: 'assets/images/engineering/hero/transportation.jpg',
        description: 'Specialized solutions for transportation applications.',
        content: {
            overview: 'Water-related challenges impact various transportation sectors, from commercial shipbuilding—where ballast water management and biofouling control are critical—to recreational boats and vehicles, where durability and safety are top priorities. As a trusted leader in water management, Alsuro delivers high-performance solutions that support efficiency, sustainability, and resilience across transportation networks.',
            approach: [
                'System optimization',
                'Safety management',
                'Efficiency improvement',
                'Environmental protection',
                'Compliance assurance'
            ],
            technologies: [
                'Treatment systems',
                'Ballast solutions',
                'Anti-fouling systems',
                'Monitoring equipment',
                'Safety controls'
            ],
            benefits: [
                'Operational efficiency',
                'Safety improvement',
                'Environmental compliance',
                'Cost reduction',
                'System reliability'
            ]
        }
    },
    {
        id: 19,
        title: 'Utility Infrastructure',
        subtitle: 'Revolutionizing Smart Water and Energy Management',
        image: 'assets/images/engineering/thumbnails/utility_infrastructure.jpg',
        imageLarge: 'assets/images/engineering/large/utility_infrastructure.jpg',
        imageHero: 'assets/images/engineering/hero/utility_infrastructure.jpg',
        description: 'Innovative solutions for utility infrastructure.',
        content: {
            overview: 'Water and energy infrastructure are the backbone of modern cities, and smarter resource management is essential for sustainability and operational efficiency. Municipalities and utilities require advanced technologies to optimize asset performance, improve data collection, and enhance service reliability. At Alsuro, we provide intelligent infrastructure solutions that empower gas, electric, and water utilities to manage resources more effectively.',
            approach: [
                'Smart management',
                'System optimization',
                'Resource efficiency',
                'Data analytics',
                'Sustainability integration'
            ],
            technologies: [
                'Smart systems',
                'Analytics platforms',
                'Monitoring solutions',
                'Automation tools',
                'Resource management'
            ],
            benefits: [
                'Operational efficiency',
                'Resource optimization',
                'Service reliability',
                'Cost reduction',
                'Environmental sustainability'
            ]
        }
    }
];

module.exports = categories; 