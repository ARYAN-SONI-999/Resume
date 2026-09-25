import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';
import ClientLayout from '../components/layout/ClientLayout';
import { inter, instrumentSerif, playfairDisplay } from './fonts';



export const metadata = {
    metadataBase: new URL('https://github.com/ARYAN-SONI-999'),
    title: {
        default: 'Aryan Fichadiya — Full Stack & AI Developer',
        template: '%s | Aryan Fichadiya'
    },
    description: 'Motivated Computer Science Engineering student specialising in Data Science at LJ University. Building full-stack applications, AI-powered tools, and data-driven solutions.',
    keywords: ['Aryan Fichadiya', 'Full Stack Developer', 'Python Developer', 'React Developer', 'AI Developer', 'Data Science', 'Portfolio', 'LJ University', 'Ahmedabad', 'Gujarat', 'India'],
    authors: [{ name: 'Aryan Fichadiya' }],
    creator: 'Aryan Fichadiya',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://github.com/ARYAN-SONI-999',
        title: 'Aryan Fichadiya — Full Stack & AI Developer',
        description: 'Building full-stack applications, AI-powered tools, and data-driven solutions. Explore my projects and engineering journey.',
        siteName: 'Aryan Fichadiya',
        images: [
            {
                url: '/og-image.png', // Ensure this image exists in public folder
                width: 1200,
                height: 630,
                alt: 'Aryan Fichadiya - Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aryan Fichadiya — Full Stack & AI Developer',
        description: 'Building AI-powered tools and full-stack applications.',
        images: ['/og-image.png'],
        creator: '@ARYAN_SONI_999',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google04e24580823c8b31',
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.variable} ${instrumentSerif.variable} ${playfairDisplay.variable}`}
        >
            <head>
                {/* DNS Prefetch for external resources */}
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://i.pinimg.com" />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    const savedTheme = localStorage.getItem('theme');
                                    if (savedTheme === 'dark' || (!savedTheme)) {
                                        document.documentElement.classList.add('dark');
                                    } else {
                                        document.documentElement.classList.remove('dark');
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-92FT4Y8L8T"
                    strategy="lazyOnload"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-92FT4Y8L8T');
                    `}
                </Script>
            </head>
            <body className="antialiased">
                <Providers>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </Providers>
            </body>
        </html>
    );
}
