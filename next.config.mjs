import fs from 'node:fs';
import path from 'node:path';

// Synchronize uploaded screenshots and latest resume to public directory
try {
    const uploadedDir = 'C:/Users/vatsa/.gemini/antigravity/brain/e796ab2f-2f94-478b-bae4-6ea946183c54/.user_uploaded';
    const possiblePublicDirs = [
        path.resolve(process.cwd(), 'public'),
        path.resolve(process.cwd(), 'myportfolio-main', 'public'),
        'e:/myportfolio-main/myportfolio-main/public',
    ];

    for (const pubDir of possiblePublicDirs) {
        if (fs.existsSync(pubDir)) {
            const agroDir = path.join(pubDir, 'projects', 'agrovision');
            if (!fs.existsSync(agroDir)) {
                fs.mkdirSync(agroDir, { recursive: true });
            }

            const assets = [
                { src: path.join(uploadedDir, 'media_1788376066044.png'), dest: path.join(agroDir, 'landing.png') },
                { src: path.join(uploadedDir, 'media_1788376066238.png'), dest: path.join(agroDir, 'dashboard.png') },
                { src: path.join(uploadedDir, 'media_1788376066260.png'), dest: path.join(agroDir, 'market_prices.png') },
                { src: path.join(uploadedDir, 'media_1788376066279.png'), dest: path.join(agroDir, 'crop_recommendations.png') },
                { src: path.join(uploadedDir, 'media_1788376066360.png'), dest: path.join(agroDir, 'disease_diagnostic.png') },
                { src: path.join(uploadedDir, 'media_1788376366277.pdf'), dest: path.join(pubDir, 'resume.pdf') },
            ];

            for (const item of assets) {
                if (fs.existsSync(item.src)) {
                    fs.copyFileSync(item.src, item.dest);
                }
            }
            break;
        }
    }
} catch (e) {
    // Non-fatal
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Performance optimizations
    compress: true,
    poweredByHeader: false,

    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        qualities: [75, 80, 90, 95],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                port: '',
                pathname: '/**',
            },
        ],
    },

    // Package import optimization for faster dev and build times
    experimental: {
        optimizePackageImports: [
            'lucide-react',
            'framer-motion',
            'motion',
            'date-fns',
            'clsx',
            'tailwind-merge'
        ],
    },

    // Explicitly define workspace root for Turbopack to prevent multi-lockfile warnings
    turbopack: {
        root: process.cwd(),
    },

    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
};

export default nextConfig;

