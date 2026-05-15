// ================= TYPES =================

export interface Section {
  image?: string;
  heading?: string;
  content?: string | string[];
  list?: string[];
}

export interface NavPost {
  id: string;
  title: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags?: string[];
  image?: string;
  sections: Section[];
  prev?: NavPost;
  next?: NavPost;
}

// ================= DATA =================

const blogPosts: BlogPost[] = [
{
  id: "ray-healthcare-ocular-manifestations-webinar",
  category: "Healthcare & Education",
  title: "R.A.Y. Healthcare Hosts Webinar on Ocular Manifestations of Systemic Diseases",
  author: "R.A.Y. Healthcare",
  date: "March 14, 2026",
  readTime: "7 min read",
  tags: [
    "Healthcare",
    "Ophthalmology",
    "Medical Education",
    "Systemic Diseases",
    "Webinar",
  ],
  sections: [
    {
      heading: "Introduction",
      content: [
        "On 14th March 2026, R.A.Y. Healthcare organized an insightful webinar on Ocular Manifestations of Systemic Diseases aimed at highlighting the important relationship between systemic health and ocular findings.",
        "The webinar brought together healthcare professionals, students, and participants interested in understanding how the eye can provide critical clues to systemic diseases.",
        "The session reinforced the importance of holistic patient care and interdisciplinary collaboration in modern healthcare practice.",
      ],
    },
    {
      heading: "Guest Speaker and Moderator",
      content: [
        "The webinar featured Dr. Geoffrey Wiafe – MD, MMed Oph, FCOphth (ECSA), Ophthalmologist at Watborg Eye Services and Part-time Lecturer at the Korle Bu Ophthalmic Nursing School – as the guest speaker.",
        "Miss Najah Chamoun served as the moderator for the session, facilitating discussions and audience interaction throughout the program.",
      ],
    },
    {
      heading: "Key Insights from the Session",
      content: [
        "Dr. Geoffrey Wiafe delivered a perspective-widening, thought-provoking, and highly engaging presentation on the ocular manifestations of systemic diseases.",
        "One of the key highlights of the session was his emphasis on vitamin deficiencies, a commonly overlooked yet significant factor in the development of ocular diseases.",
        "He also stressed the importance of interdisciplinary care in diagnosing and managing patients effectively.",
      ],
    },
    {
      heading: "Topics Covered",
      content: [
        "The session guided participants through clinical presentations, diagnostic approaches, imaging techniques, management strategies, and treatment options related to ocular manifestations of systemic diseases.",
        "Complex medical concepts were presented in a practical and accessible manner, making the webinar valuable for participants from diverse healthcare backgrounds.",
      ],
      list: [
        "Hypertension",
        "Diabetes Mellitus",
        "Carotid Cavernous Fistula",
        "Atrial Fibrillation",
        "Patent Foramen Ovale",
        "Anemia",
        "Leukemia",
        "Thyroid Eye Disease",
        "Rheumatoid Arthritis",
        "Systemic Lupus Erythematosus (SLE)",
        "HIV and Cytomegalovirus (CMV)",
        "Multiple Sclerosis (MS)",
        "Intracranial Tumors",
        "Drug Toxicity",
      ],
    },
    {
      heading: "Interactive Learning Experience",
      content: [
        "Participants remained actively engaged throughout the webinar through interactive discussions and question-and-answer sessions.",
        "The opportunities for interaction enriched participants’ understanding and encouraged collaborative learning among attendees.",
      ],
    },
    {
      heading: "Importance of Ocular Examination",
      content: [
        "The webinar served as a powerful reminder that careful ocular examination can reveal early and sometimes life-threatening systemic conditions.",
        "Dr. Geoffrey Wiafe demonstrated how the eye can provide critical diagnostic clues that support timely intervention and management of systemic diseases.",
      ],
    },
    {
      heading: "Key Takeaways",
      list: [
        "The eye can reveal important signs of systemic disease",
        "Early diagnosis can improve patient outcomes",
        "Vitamin deficiencies can significantly affect ocular health",
        "Interdisciplinary care is essential in modern medicine",
        "Comprehensive ocular examinations support holistic patient care",
      ],
    },
    {
      heading: "Impact of the Webinar",
      content: [
        "Overall, the session was highly informative, practical, and clinically relevant.",
        "Participants gained valuable knowledge that extends beyond ophthalmology into broader patient-centered healthcare.",
        "The webinar successfully promoted awareness of the connection between ocular findings and systemic diseases while strengthening professional learning and collaboration.",
      ],
    },
    {
      heading: "Appreciation",
      content: [
        "R.A.Y. Healthcare extends heartfelt appreciation to Dr. Geoffrey Wiafe for his enlightening presentation and to all participants who contributed to the success of the webinar.",
        "The organization remains committed to promoting healthcare education, awareness, and professional development through impactful programs and initiatives.",
      ],
    },
    {
      heading: "Conclusion",
      content: [
        "The Ocular Manifestations of Systemic Diseases webinar organized by R.A.Y. Healthcare highlighted the critical role of ocular examinations in detecting and managing systemic illnesses.",
        "By combining expert insights, practical clinical knowledge, and interactive learning, the session equipped participants with a deeper understanding of holistic healthcare approaches.",
        "As healthcare continues to evolve, initiatives like this webinar play an important role in improving education, collaboration, and patient outcomes.",
      ],
    },
  ],
},    
{
  id: "iot-room-temperature-web-server",
  category: "IoT & Technology",
  title: "IoT Room Temperature Web Server Developed by ClueCode",
  author: "ClueCode",
  date: "2026",
  readTime: "6 min read",
  tags: ["IoT", "Smart Systems", "Web Server", "Embedded Systems"],
  sections: [
    {
      heading: "Introduction",
      content: [
        "The Internet of Things (IoT) continues to revolutionize how we interact with our environments, enabling real-time monitoring and intelligent automation.",
        "One of the practical innovations in this space is the IoT Room Temperature Web Server developed by ClueCode, a system designed to monitor and manage room temperature remotely through a web interface.",
        "This solution is particularly valuable in environments such as server rooms, offices, laboratories, and smart homes where maintaining optimal temperature is critical.",
      ],
    },
    {
      heading: "System Concept",
      content: [
        "The system is built on a simple but powerful workflow: temperature data is collected, transmitted over the internet, processed, and displayed on a web dashboard.",
        "This allows users to monitor room conditions in real time and take action when necessary, ensuring safety and efficiency.",
      ],
    },
    {
      heading: "System Architecture",
      list: [
        "Temperature sensors (DHT11, DHT22) for data collection",
        "Microcontrollers (ESP8266 or ESP32) for processing and communication",
        "Web server for data visualization and remote access",
      ],
    },
    {
      heading: "How It Works",
      list: [
        "The sensor measures the room temperature continuously",
        "The microcontroller reads and processes the data",
        "Data is transmitted via Wi-Fi to the web server",
        "The server displays real-time temperature on a dashboard",
        "Users access the dashboard remotely via a browser",
      ],
    },
    {
      heading: "Key Features",
      list: [
        "Real-time temperature monitoring",
        "Remote access via web browser",
        "Data logging and historical tracking",
        "Smart alerts for abnormal temperature levels",
        "Automation support for cooling systems",
      ],
    },
    {
      heading: "Technologies Used",
      content: [
        "The system integrates both hardware and software technologies to function effectively.",
      ],
      list: [
        "ESP32 / ESP8266 microcontrollers",
        "Temperature sensors (DHT series)",
        "HTML, CSS, JavaScript for frontend dashboard",
        "Node.js or Python for backend processing",
        "HTTP or MQTT communication protocols",
      ],
    },
    {
      heading: "Applications",
      list: [
        "Server room temperature monitoring",
        "Smart home climate control",
        "Laboratory environmental management",
        "Office and classroom comfort optimization",
      ],
    },
    {
      heading: "Benefits",
      list: [
        "Prevents overheating and equipment damage",
        "Improves system reliability and uptime",
        "Reduces maintenance costs",
        "Provides real-time insights and alerts",
        "Enables remote monitoring from anywhere",
      ],
    },
    {
      heading: "Challenges",
      content: [
        "Despite its advantages, the system may face challenges such as reliance on stable internet connectivity, initial setup complexity, and potential security risks if not properly configured.",
      ],
    },
    {
      heading: "Future Enhancements",
      list: [
        "AI-based predictive temperature control",
        "Mobile app integration",
        "Voice assistant compatibility",
        "Multi-room monitoring systems",
      ],
    },
    {
      heading: "Conclusion",
      content: [
        "The IoT Room Temperature Web Server developed by ClueCode demonstrates how smart technology can transform simple monitoring into an intelligent and automated system.",
        "By combining sensors, microcontrollers, and web technologies, this solution enhances efficiency, safety, and convenience across multiple environments.",
        "As IoT adoption grows, such systems will become essential in building smarter and more connected spaces.",
      ],
    },
  ],
},
  {
    id: "ai-is-transforming-agriculture-in-africa",
    category: "Technology & Agriculture",
    title: "How AI Is Transforming Agriculture in Africa",
    author: "Obed Otu Ayor",
    date: "2026",
    readTime: "5 min read",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Africa’s agricultural sector is undergoing a quiet but powerful revolution driven by artificial intelligence (AI).",
          "From predicting weather patterns to optimizing crop yields, AI is helping farmers make smarter, data-driven decisions.",
        ],
      },
      {
        heading: "Challenges in Agriculture",
        content: [
          "Agriculture remains the backbone of many African economies but faces challenges such as climate change, pests, and unpredictable rainfall.",
        ],
      },
      {
        heading: "AI Applications",
        list: [
          "Predictive analytics for weather and planting",
          "Crop health monitoring using image recognition",
          "Precision farming with sensors and drones",
        ],
      },
      {
        heading: "Conclusion",
        content: [
          "AI is empowering farmers, improving food security, and driving sustainable agricultural development across Africa.",
        ],
      },
    ],
  },

  {
    id: "web-development-webinar-2026",
    category: "Education & Technology",
    title: "Web Development Webinar 2026: Empowering 500 Ghanaian Students",
    author: "ClueCode",
    date: "2026",
    readTime: "3 min read",
    sections: [
      {
        heading: "Overview",
        content: [
          "ClueCode hosted a nationwide webinar training over 500 Ghanaian students in web development.",
        ],
      },
      {
        heading: "Learning Experience",
        content: [
          "Participants learned HTML, CSS, JavaScript, and modern frameworks through hands-on sessions.",
        ],
      },
      {
        heading: "Impact",
        content: [
          "Many students built functional projects and began their journey into tech careers.",
        ],
      },
    ],
  },

  {
    id: "smart-farming-drones",
    category: "Innovation",
    title: "Smart Farming Drones: Our Journey in Innovation",
    author: "ClueCode",
    date: "2026",
    readTime: "4 min read",
    sections: [
      {
        heading: "The Idea",
        content: [
          "ClueCode developed smart farming drones to address inefficient land monitoring.",
        ],
      },
      {
        heading: "Technology",
        content: [
          "Drones use sensors, cameras, and AI to analyze farmland and detect issues.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Faster land analysis",
          "Early pest detection",
          "Improved decision making",
        ],
      },
    ],
  },

  {
    id: "building-next-generation-african-tech-leaders",
    category: "Technology & Leadership",
    title: "Building the Next Generation of African Tech Leaders",
    author: "Kofi Asante",
    date: "2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Africa’s youth are driving the growth of the tech ecosystem through bootcamps and mentorship programs.",
        ],
      },
      {
        heading: "Skills Development",
        content: [
          "Programs focus on software development, data science, and entrepreneurship.",
        ],
      },
      {
        heading: "Impact",
        content: [
          "Graduates are launching startups and securing jobs in tech.",
        ],
      },
    ],
  },

  {
    id: "hydroponics-revolution",
    category: "Agriculture",
    title: "Hydroponics Revolution: Growing More with Less",
    author: "Ama Osei",
    date: "2026",
    readTime: "5 min read",
    sections: [
      {
        heading: "What is Hydroponics?",
        content: [
          "Hydroponics is a method of growing plants without soil using nutrient-rich water.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Faster growth",
          "Less water usage",
          "Higher yields",
        ],
      },
      {
        heading: "Future",
        content: [
          "Hydroponics is becoming key to food security in urban environments.",
        ],
      },
    ],
  },

  {
    id: "ai-for-business",
    category: "Business & AI",
    title: "AI for Business: Automation Success Stories",
    author: "Akosua Boateng",
    date: "2026",
    readTime: "5 min read",
    sections: [
      {
        heading: "Overview",
        content: [
          "Businesses in Ghana are leveraging AI to automate operations and improve efficiency.",
        ],
      },
      {
        heading: "Applications",
        list: [
          "Customer service chatbots",
          "Fraud detection",
          "Product recommendations",
        ],
      },
    ],
  },

  {
    id: "youth-robotics-competition",
    category: "Technology & Education",
    title: "Youth Robotics Competition Highlights",
    author: "Kofi Asante",
    date: "2026",
    readTime: "4 min read",
    sections: [
      {
        heading: "Event Overview",
        content: [
          "The competition showcased innovation among young tech enthusiasts.",
        ],
      },
      {
        heading: "Highlights",
        list: [
          "Autonomous robots",
          "Smart home systems",
          "Creative problem solving",
        ],
      },
    ],
  },

  {
    id: "soil-monitoring-tech",
    category: "Agriculture & Technology",
    title: "Soil Monitoring Tech: Data-Driven Farming",
    author: "Ama Osei",
    date: "2026",
    readTime: "5 min read",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Soil monitoring technology enables farmers to make data-driven decisions.",
        ],
      },
      {
        heading: "Technology",
        content: [
          "IoT sensors measure soil moisture, temperature, and nutrients in real time.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Optimized irrigation",
          "Improved crop health",
          "Higher yields",
        ],
      },
    ],
  },
{
  id: "smart-technology-africa-digital-transformation",
  category: "Technology",
  title: "Building the Future: How Smart Technology is Transforming Africa’s Digital Landscape",
  author: "Your Company Name",
  date: "March 2026",
  readTime: "5 min read",
  tags: ["Digital Transformation", "AI", "Innovation", "Africa Tech", "Cloud Computing"],
  sections: [
    {
      heading: "Introduction",
      content: [
        "Africa is undergoing a powerful digital transformation. From fintech innovations to AI-driven solutions, technology is no longer just a tool—it is the engine driving economic growth, innovation, and opportunity across the continent.",
        "At the heart of this revolution are forward-thinking tech companies building scalable, intelligent solutions tailored to real-world challenges.",
      ],
    },
    {
      heading: "The Rise of Smart Digital Solutions",
      content: [
        "Businesses today are no longer satisfied with basic digital tools. They demand scalable, intelligent, and data-driven systems that can adapt to their evolving needs.",
        "Modern technologies such as Artificial Intelligence, Cloud Computing, and Mobile Development are enabling companies to operate faster, smarter, and more efficiently than ever before.",
      ],
      list: [
        "Scalable systems that grow with business operations",
        "Intelligent automation that reduces manual work",
        "Data-driven insights for better decision-making",
      ],
    },
    {
      heading: "Why Innovation Matters More Than Ever",
      content: [
        "In today’s competitive environment, innovation is not optional—it’s essential.",
        "Organizations that invest in digital transformation gain significant advantages that position them for long-term success.",
      ],
      list: [
        "Increased productivity",
        "Enhanced customer experiences",
        "Stronger competitive advantage",
        "Long-term sustainability",
      ],
    },
    {
      heading: "Our Approach to Technology",
      content: [
        "At our core, we believe technology should solve real problems—not just look impressive.",
        "Our approach focuses on building impactful, scalable, and user-centered solutions.",
      ],
      list: [
        "Custom Software Development – High-performance web and mobile applications tailored to business needs",
        "Artificial Intelligence Solutions – Automation and predictive analytics for smarter decision-making",
        "Scalable Architecture – Systems designed for long-term growth, security, and reliability",
        "User-Centered Design – Intuitive and engaging user experiences",
      ],
    },
    {
      heading: "Impacting Businesses Across Africa",
      content: [
        "Technology is breaking barriers across multiple industries, transforming how businesses operate and deliver value.",
        "From finance to agriculture, digital solutions are unlocking new levels of efficiency and accessibility.",
      ],
      list: [
        "Finance: Enabling secure and fast digital transactions",
        "Healthcare: Improving access to care through digital platforms",
        "Education: Expanding learning opportunities through e-learning systems",
        "Agriculture: Enhancing productivity with smart farming solutions",
      ],
    },
    {
      heading: "Looking Ahead",
      content: [
        "The future of technology in Africa is bright—and full of opportunity.",
        "As innovation continues to accelerate, businesses that embrace smart digital solutions will lead the way. The question is no longer if you should adopt technology, but how fast you can adapt.",
      ],
    },
    {
      heading: "Conclusion",
      content: [
        "We are committed to building solutions that empower businesses, transform industries, and shape the future of the digital economy.",
        "Because at the end of the day, technology is not just about code—it’s about impact.",
      ],
    },
  ],
},
];

export default blogPosts;