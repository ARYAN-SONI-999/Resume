import {
    Mic,
    ShieldCheck,
    Terminal,
    FileSpreadsheet,
    LineChart,
    SearchCode,
    Webhook,
    Bot,
    Cpu,
    Mail,
    Waypoints,
    Code2
} from 'lucide-react';
import { techStack } from '../data/portfolioData';

// Comprehensive Icon and Style registry for all tools and technologies
const iconRegistry = {
    // AI / LLM & Specialized APIs
    'groq': { name: 'Groq', icon: Cpu, color: '#f55036' },
    'gemini': { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
    'google gemini': { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
    'claude': { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic' },
    'claude api': { name: 'Claude API', icon: 'https://cdn.simpleicons.org/anthropic' },
    'openrouter': { name: 'OpenRouter', icon: Waypoints, color: '#6366f1' },
    'ollama': { name: 'Ollama', icon: 'https://cdn.simpleicons.org/ollama', invertDark: true },
    'speech recognition': { name: 'Speech Recognition', icon: Mic, color: '#38bdf8' },

    // Data / ML / Analytics
    'matplotlib': { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
    'scikit-learn': { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    'scikitlearn': { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    'csv': { name: 'CSV', icon: FileSpreadsheet, color: '#10b981' },
    'hashlib': { name: 'Hashlib', icon: ShieldCheck, color: '#8b5cf6' },
    'recharts': { name: 'Recharts', icon: LineChart, color: '#22d3ee' },
    'beautifulsoup': { name: 'BeautifulSoup', icon: SearchCode, color: '#f59e0b' },
    'web scraping': { name: 'Web Scraping', icon: Bot, color: '#a855f7' },
    'rest apis': { name: 'REST APIs', icon: Webhook, color: '#06b6d4' },
    'rest api': { name: 'REST API', icon: Webhook, color: '#06b6d4' },
    'cli': { name: 'CLI', icon: Terminal, color: '#22c55e' },
    'jwt': { name: 'JWT', icon: 'https://cdn.simpleicons.org/jsonwebtokens', invertDark: true },

    // Web / Backend / Database
    'axios': { name: 'Axios', icon: 'https://cdn.simpleicons.org/axios/5A29E4' },
    'ast': { name: 'AST', icon: Code2, color: '#38bdf8' },
    'flask-socketio': { name: 'Flask-SocketIO', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', invertDark: true },
    'socket.io': { name: 'Socket.io', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', invertDark: true },
    'nodemailer': { name: 'Nodemailer', icon: Mail, color: '#22c55e' },
    'leaflet api': { name: 'Leaflet API', icon: 'https://cdn.simpleicons.org/leaflet' },
    'leaflet': { name: 'Leaflet', icon: 'https://cdn.simpleicons.org/leaflet' },
    'sequelize orm': { name: 'Sequelize ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
    'sequelize': { name: 'Sequelize', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
    'django rest framework': { name: 'Django REST Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', invertDark: true },
    'react (vite)': { name: 'React (Vite)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    'express.js': { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertDark: true },
    'vite': { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' }
};

/**
 * Returns tool icon metadata for any given tool name.
 * Checks iconRegistry, techStack list, normalized names, or provides a clean fallback.
 */
export function getTechInfo(techName) {
    if (!techName) return { name: 'Tool', icon: Code2 };

    const lower = techName.toLowerCase().trim();

    // 1. Direct match in registry
    if (iconRegistry[lower]) {
        return { ...iconRegistry[lower], name: techName };
    }

    // 2. Match in techStack from portfolioData
    const foundInStack = techStack.find(t => t.name.toLowerCase() === lower);
    if (foundInStack) {
        return { ...foundInStack, name: techName };
    }

    // 3. Partial / normalized matches
    if (lower.includes('react')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' };
    }
    if (lower.includes('django')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', invertDark: true };
    }
    if (lower.includes('express')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertDark: true };
    }
    if (lower.includes('flask')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', invertDark: true };
    }
    if (lower.includes('socket')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', invertDark: true };
    }
    if (lower.includes('python')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' };
    }
    if (lower.includes('mysql')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' };
    }
    if (lower.includes('postgres')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' };
    }
    if (lower.includes('sqlite')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' };
    }
    if (lower.includes('mongo')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' };
    }
    if (lower.includes('tailwind')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' };
    }
    if (lower.includes('node')) {
        return { name: techName, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' };
    }

    // 4. Default fallback icon (never returns null/invisible)
    return {
        name: techName,
        icon: Code2,
        color: '#71717a'
    };
}
