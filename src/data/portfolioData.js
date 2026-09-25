// Aryan Fichadiya's Portfolio Data

export const roles = [];

export const studies = [
  {
    school: "Dayamayi Mata High School (Surendranagar, Gujarat)",
    course: "Secondary School Certificate & Primary Foundation (LKG – Class X)",
    date: "2010 — 2022",
    logo: "DMS",
    status: "completed",
    gradeLabel: "Board",
    grade: "GSEB (English Medium)",
    description:
      "Completed foundational and secondary schooling from kindergarten to Standard 10 in English Medium under the Gujarat Board (GSEB). Developed essential communication, logical problem-solving, and disciplined academic habits through active involvement in coursework and co-curricular activities.",
  },
  {
    school: "Ultra Vision Academy (Surendranagar, Gujarat)",
    course: "Higher Secondary Certificate (Class XI – XII)",
    date: "2022 — 2024",
    logo: "UVA",
    status: "completed",
    gradeLabel: "Board",
    grade: "GSEB (English Medium)",
    description:
      "Completed Higher Secondary education in English Medium under the Gujarat Board (GSEB). Built strong core competencies in mathematics, analytical reasoning, and scientific principles that formed the launching pad for engineering and computer science studies.",
  },
  {
    school: "LJ Institute of Technology",
    course: "B.Tech – Computer Science & Engineering (Data Science)",
    date: "Jul 2024 — Jun 2028 (Expected)",
    logo: "LJIT",
    status: "in-progress",
    gradeLabel: "CGPA",
    grade: "8.29 / 10.0",
    description:
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOPs), Database Management Systems (DBMS), Computer Networks, Full-Stack Development, Backend Development. Certifications & Achievements: Tic Tech Toe '26 Hackathon (IEEE & DA-IICT), Hex-Hunt Cybersecurity Event, Exploratory Data Analysis for Machine Learning, Inheritance and Data Structures in Java, Introduction to Java, Introduction to HTML, CSS, and JavaScript.",
  },
];

export const projects = [
  {
    id: "ARVIS",
    title: "ARVIS – Local Agentic AI Assistant with Multi-LLM Routing & Sandboxed Execution",
    role: "AI / Full Stack Developer",
    description:
      "Multi-LLM routing engine supporting 4 cloud providers (Groq, Gemini, Claude, OpenRouter) plus offline Ollama execution, with automatic fallback. Features keyword-based RAG memory over SQLite, AST-based security sandbox, and a real-time Flask + Socket.IO dashboard with 8 callable tool skills — file management, system control, code execution, email, web search, scheduling, and voice I/O.",
    features: [
      "Multi-LLM routing supporting Groq, Gemini, Claude, OpenRouter, and offline Ollama execution with automatic failover.",
      "Keyword-based Retrieval-Augmented Generation (RAG) memory powered by SQLite.",
      "AST (Abstract Syntax Tree) static analysis and security sandbox for safe code execution.",
      "Real-time Flask + Socket.IO dashboard with 8 callable tool skills including voice I/O and web search."
    ],
    stack: [
      "Python",
      "Flask",
      "Flask-SocketIO",
      "SQLite",
      "AST",
      "Groq",
      "Gemini",
      "Claude",
      "OpenRouter",
      "Ollama",
      "Speech Recognition",
    ],
    gradient: "from-violet-500 to-indigo-600",
    bgColor: "#0d0a1a",
    img: "/projects/arvis/landing.png",
    images: [
      "/projects/arvis/landing.png",
      "/projects/arvis/dashboard.png",
      "/projects/arvis/react_loop.png",
      "/projects/arvis/builtin_tools.png",
      "/projects/arvis/core_modules.png",
    ],
    live: null,
    github: "https://github.com/ARYAN-SONI-999/ARVIS-AI",
  },
  {
    id: "HarvestLink",
    title: "HarvestLink — Farm-to-Consumer Trading Platform",
    role: "Full Stack Developer",
    description:
      "Multi-role Python enterprise system enabling secure direct-to-consumer trading by bypassing supply-chain intermediaries. Features MySQL connection pooling, secure password hashing, simulated 2FA OTP login, CRUD inventory controls with low-stock warnings, a multi-item shopping cart with payment simulation & invoice generation, and Matplotlib revenue graphs with CSV export.",
    features: [
      "Enterprise direct-to-consumer trading architecture bypassing supply-chain intermediaries.",
      "MySQL connection pooling with password hashing and simulated 2FA OTP login.",
      "CRUD inventory control with low-stock warnings and multi-item shopping cart.",
      "Automated invoice generation and revenue visualization using Matplotlib & CSV export."
    ],
    stack: ["Python", "MySQL", "Matplotlib", "CSV", "Hashlib"],
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "#0f1a14",
    img: "/projects/harvestlink/landing.png",
    images: [
      "/projects/harvestlink/landing.png",
      "/projects/harvestlink/dashboard.png",
      "/projects/harvestlink/marketplace.png",
      "/projects/harvestlink/checkout.png",
      "/projects/harvestlink/customer_orders.png",
      "/projects/harvestlink/orders.png",
      "/projects/harvestlink/inventory_audit.png",
      "/projects/harvestlink/financials.png",
      "/projects/harvestlink/user_management.png",
      "/projects/harvestlink/platform_overview.png",
    ],
    live: "https://agriconnect-streamlit.onrender.com",
    github: "https://github.com/ARYAN-SONI-999/AgriConnect",
  },
  {
    id: "AgroVision",
    title: "AgroVision — AI-Powered Precision Agriculture Platform for Gujarat Farmers",
    role: "Full Stack Developer",
    description:
      "Full-stack agri-tech platform with JWT auth, live district-wise weather data for all 33 Gujarat districts, and a MongoDB backend. Scikit-learn decision tree models for crop recommendation & market price prediction, live APMC mandi prices for 17+ crops across 9+ markets, plant disease detection with confidence scores, AI chatbot, and expense-tracking bill manager with PDF download.",
    features: [
      "Scikit-learn decision tree ML models for intelligent crop recommendation & market price forecasting.",
      "Live APMC mandi pricing for 17+ crops across 9+ markets and live weather for 33 Gujarat districts.",
      "Plant disease detection with confidence scoring & AI assistant chatbot.",
      "Expense-tracking bill manager with PDF invoice downloads and MongoDB backend."
    ],
    stack: [
      "React (Vite)",
      "Django REST Framework",
      "MongoDB",
      "JWT",
      "Scikit-learn",
      "Leaflet API",
      "BeautifulSoup",
      "Recharts",
    ],
    gradient: "from-green-500 to-emerald-600",
    bgColor: "#0a140a",
    img: "/projects/agrovision/landing.png",
    images: [
      "/projects/agrovision/landing.png",
      "/projects/agrovision/dashboard.png",
      "/projects/agrovision/market_prices.png",
      "/projects/agrovision/crop_recommendations.png",
      "/projects/agrovision/disease_diagnostic.png",
    ],
    live: "https://agriconnect-8oqb.onrender.com",
    github: "https://github.com/ARYAN-SONI-999/Agro_Vision",
  },
  {
    id: "ShriHariJewellers",
    title: "Shri Hari Jewellers — Live Precious Metal Intelligence",
    role: "Backend Developer",
    description:
      "Fully automated CLI tool that scrapes live gold/silver rates via REST API and computes real-time jewellery prices with GST. Features a PostgreSQL-backed rate-history module for daily snapshots & trend queries, Claude API integration for natural-language price summaries and rate-change alerts, and is packaged as a pip-installable standalone utility.",
    features: [
      "Automated web scraper for real-time gold/silver rates and GST calculation logic.",
      "PostgreSQL rate-history module for daily snapshots and historical trend analysis.",
      "Claude API integration for natural-language price summaries and rate change alerts.",
      "Packaged as a standalone, pip-installable CLI utility."
    ],
    stack: ["Python", "REST APIs", "Web Scraping", "PostgreSQL", "CLI", "Claude API"],
    gradient: "from-yellow-400 to-orange-500",
    bgColor: "#1a1200",
    img: "/projects/jewellery/showroom_heritage.png",
    images: [
      "/projects/jewellery/showroom_heritage.png",
      "/projects/jewellery/product_pricing_modal.png",
    ],
    live: "https://shri-hari-jewellers-1.onrender.com",
    github: "https://github.com/ARYAN-SONI-999/Shri-Hari-Jewellers",
  },
  {
    id: "GlobeTrotter",
    title: "GlobeTrotter — Smart Travel Planning & Itinerary Management System",
    role: "Full Stack Developer",
    description:
      "Smart travel planning and itinerary management system built with React 18, Vite, and Node.js/Express REST APIs. Features modular routing, SQLite database with JWT authentication, Axios client integration, and custom React Context state management.",
    features: [
      "Smart travel itinerary planner built with React 18, Vite, and Express REST APIs.",
      "SQLite database persistence with secure JWT authentication and password protection.",
      "Modular client routing using React Router v6 & custom React Context state hooks.",
      "Clean Axios integration for RESTful API data fetching."
    ],
    stack: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "SQLite",
      "JWT",
      "Axios",
    ],
    gradient: "from-sky-400 to-blue-600",
    bgColor: "#0c1b2e",
    img: "/projects/globetrotter/dashboard.png",
    images: [
      "/projects/globetrotter/dashboard.png",
      "/projects/globetrotter/trip_planner.png",
      "/projects/globetrotter/ai_itinerary.png",
      "/projects/globetrotter/itinerary_daily_schedule.png",
      "/projects/globetrotter/places_to_visit.png",
      "/projects/globetrotter/accommodation_transit.png",
      "/projects/globetrotter/weather_export_tools.png",
      "/projects/globetrotter/outfit_budget_breakdown.png",
      "/projects/globetrotter/travel_circuits.png",
    ],
    live: "https://globetrotter-frontend-k4nr.onrender.com/",
    github: "https://github.com/ARYAN-SONI-999",
  },
];

export const techStack = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://www.python.org",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    url: "https://www.java.com",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    url: "https://isocpp.org",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://react.dev",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    url: "https://nodejs.org",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    url: "https://expressjs.com",
    invertDark: true,
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    url: "https://flask.palletsprojects.com",
    invertDark: true,
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    url: "https://www.djangoproject.com",
    invertDark: true,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    url: "https://www.mysql.com",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    url: "https://www.mongodb.com",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org",
  },
  {
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    url: "https://www.sqlite.org",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    url: "https://git-scm.com",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    url: "https://github.com",
    invertDark: true,
  },
  {
    name: "Socket.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    url: "https://socket.io/",
    invertDark: true,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    url: "https://tailwindcss.com",
  },
  {
    name: "Jupyter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    url: "https://jupyter.org",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    url: "https://code.visualstudio.com",
  },
  {
    name: "IntelliJ IDEA",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    url: "https://www.jetbrains.com/idea",
  },
];

export const socialLinks = {
  site: "https://github.com/ARYAN-SONI-999",
  github: "https://github.com/ARYAN-SONI-999",
  twitter: null,
  linkedin: "https://www.linkedin.com/in/aryan-soni-411745332/",
  instagram: null,
  email: "mailto:aryan.fichadiya.999@gmail.com",
  phone: "+91 9537502906",
};

