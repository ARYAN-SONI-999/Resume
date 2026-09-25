'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, FileText, Check, Copy, ExternalLink, ArrowUpRight, Instagram, Calendar, MessageCircleMore } from 'lucide-react';
import GithubIcon from '../../icons/GithubIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import GmailIcon from '../../icons/GmailIcon';
import FileDescriptionIcon from '../../icons/FileDescriptionIcon';


import SectionHeading from '../../ui/SectionHeading';
import { ShimmeringText } from '../../ui/ShimmeringText';

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const socialLinks = [
    {
        id: 'github',
        label: 'GitHub',
        icon: GithubIcon,
        href: 'https://github.com/ARYAN-SONI-999',
        type: 'card',
        card: {
            title: 'Aryan Fichadiya',
            handle: '@ARYAN-SONI-999',
            badge: 'GitHub',
            desc: '5+ Projects in AI, Full-Stack, Machine Learning & Automation',
            meta: 'View GitHub Profile',
            color: 'text-zinc-200'
        },
        color: 'group-hover:text-black group-hover:dark:text-white group-hover:border-black/20 group-hover:dark:border-white/20 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: LinkedinIcon,
        href: 'https://www.linkedin.com/in/aryan-soni-411745332/',
        type: 'card',
        card: {
            title: 'Aryan Fichadiya',
            handle: 'aryan-soni-411745332',
            badge: 'LinkedIn',
            desc: 'B.Tech CSE (Data Science) @ LJIT · Ahmedabad, Gujarat',
            meta: 'Connect on LinkedIn',
            color: 'text-blue-400'
        },
        color: 'group-hover:text-blue-500 group-hover:border-blue-500/20 bg-blue-600/5 hover:bg-blue-600/10'
    },
    {
        id: 'mail',
        label: 'Email',
        icon: GmailIcon,
        href: 'mailto:aryan.fichadiya.999@gmail.com',
        type: 'copy',
        content: 'aryan.fichadiya.999@gmail.com',
        color: 'group-hover:text-emerald-400 group-hover:border-emerald-400/20 bg-emerald-500/5 hover:bg-emerald-500/10'
    }
];

const meetingLinks = [
    {
        id: 'meeting',
        label: 'Schedule a Call',
        icon: Calendar,
        href: 'mailto:aryan.fichadiya.999@gmail.com?subject=Schedule%20a%20Call%20with%20Aryan%20Fichadiya&body=Hi%20Aryan,%0A%0AI%20would%20like%20to%20schedule%20a%20meeting%20with%20you.%0A%0ABest%20regards,',
        type: 'meeting',
        card: {
            title: 'Aryan Fichadiya',
            role: 'Data Science & Full Stack Developer',
            duration: '30 Min Call',
            mode: 'Google Meet / Cal Video',
            timezone: 'Asia/Kolkata (IST)',
            meta: 'Schedule a Call'
        },
        color: 'group-hover:text-blue-600 group-hover:border-blue-600/20 bg-blue-600/5 hover:bg-blue-600/10'
    }
];

const resumeLinks = [
    {
        id: 'resume',
        label: 'Resume',
        icon: FileDescriptionIcon,
        href: '/resume.pdf',
        type: 'card',
        card: {
            title: 'Fichadiya Aryan Mayurbhai',
            handle: 'B.Tech CSE (Data Science) · CGPA: 8.29',
            badge: 'Resume PDF',
            desc: 'Updated Resume with ARVIS, HarvestLink, AgroVision & Achievements',
            meta: 'Download Resume PDF',
            color: 'text-orange-400'
        },
        color: 'group-hover:text-orange-400 group-hover:border-orange-400/20 bg-orange-500/5 hover:bg-orange-500/10'
    }
];

const texting = [
    {
        id: 'WhatsApp',
        label: 'WhatsApp',
        icon: MessageCircleMore,
        href: 'https://wa.me/919537502906',
        type: 'card',
        card: {
            title: 'Aryan Fichadiya',
            handle: '+91 9537502906',
            badge: 'WhatsApp',
            desc: 'Available for direct chat, queries, and project collaboration',
            meta: 'Message on WhatsApp',
            color: 'text-green-400'
        },
        color: 'group-hover:text-green-600 group-hover:border-green-600/20 bg-green-600/5 hover:bg-green-600/10'
    }
];

const SocialPill = ({ link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [copied, setCopied] = useState(false);
    const iconRef = React.useRef(null);

    const handleAction = (e) => {
        if (link.type === 'copy') {
            e.preventDefault();
            navigator.clipboard.writeText(link.content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (typeof iconRef.current?.startAnimation === 'function') {
            iconRef.current.startAnimation();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (typeof iconRef.current?.stopAnimation === 'function') {
            iconRef.current.stopAnimation();
        }
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* --- TOOLTIP --- */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 pointer-events-none"
                    >
                        {link.type === 'meeting' ? (
                            // DEDICATED MEETING CARD WITH ARYAN'S IDENTITY
                            <div className="w-[280px] p-4 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 shadow-2xl text-left">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-emerald-500/40 shrink-0 shadow-sm">
                                        <img src="/Profile.jpg" alt="Aryan Fichadiya" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-zinc-900" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1">
                                            <h4 className="text-[13px] font-semibold text-white truncate">Aryan Fichadiya</h4>
                                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">30 Min</span>
                                        </div>
                                        <p className="text-[11px] text-zinc-400 font-light truncate">1-on-1 Discussion &amp; Intro</p>
                                    </div>
                                </div>
                                <div className="space-y-1.5 py-2 border-t border-zinc-800/80 text-[11px] text-zinc-300">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                        <span>Google Meet / Video Call</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        <span>Asia/Kolkata (IST Timezone)</span>
                                    </div>
                                </div>
                                <div className="mt-2 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-emerald-400 font-medium">
                                    <span>Click to Schedule &rarr;</span>
                                    <span className="text-zinc-500">aryan.fichadiya.999</span>
                                </div>
                            </div>
                        ) : link.type === 'card' ? (
                            // DYNAMIC PROFILE CARD WITH ARYAN'S IDENTITY
                            <div className="w-[270px] p-4 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 shadow-2xl text-left">
                                <div className="flex items-center gap-3 mb-2.5">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0 shadow-sm">
                                        <img src="/Profile.jpg" alt="Aryan Fichadiya" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1">
                                            <h4 className="text-[13px] font-semibold text-white truncate">{link.card.title}</h4>
                                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/10">{link.card.badge}</span>
                                        </div>
                                        <p className="text-[10px] font-mono text-zinc-400 truncate">{link.card.handle}</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-zinc-300 font-light line-clamp-2 mb-2">
                                    {link.card.desc}
                                </p>
                                <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-zinc-800 text-zinc-400">
                                    <span className={`${link.card.color} font-medium`}>{link.card.meta}</span>
                                    <ArrowUpRight size={13} className="text-zinc-400" />
                                </div>
                            </div>
                        ) : (
                            // TEXT TOOLTIP (Email)
                            <div className="flex items-center gap-3 py-2 px-4 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-xl whitespace-nowrap">
                                <div className={`p-1 rounded-md ${copied ? 'text-emerald-500' : 'text-zinc-400'}`}>
                                    {copied ? <Check size={14} /> : <Copy size={14} />}
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${copied ? 'text-emerald-500' : 'text-zinc-500'}`}>
                                        {copied ? 'Copied!' : 'Copy Email'}
                                    </span>
                                    <span className="text-xs font-mono text-zinc-300">
                                        {link.content}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-zinc-800" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- PILL BUTTON --- */}
            <motion.a
                href={link.href}
                target={link.type === 'copy' ? undefined : "_blank"}
                rel="noopener noreferrer"
                onClick={handleAction}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`group relative flex items-center gap-2.5 px-5 py-3 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${link.color}`}
            >
                <div className="relative z-10">
                    <link.icon
                        ref={iconRef}
                        size={18}
                        strokeWidth={2}
                        className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300 group-hover:text-current"
                    />
                </div>
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors z-10">
                    {link.label}
                </span>
            </motion.a>
        </div>
    );
};


const Contact = () => {
    return (
        <motion.section
            variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: "easeOut" } }
            }}
        >
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionHeading>Contact</SectionHeading>

                <div className="flex flex-col items-start gap-12 mt-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-instrument italic font-normal text-gray-900 dark:text-white tracking-tight leading-tight transition-colors">
                            Let's build something <br />
                            <span className="text-gray-400 dark:text-zinc-500 font-inter not-italic font-light">extraordinary <ShimmeringText text="together." className="font-instrument italic font-normal text-gray-900 dark:text-white inline-block" /></span>
                        </h2>
                    </div>

                    <div className="w-full space-y-10">
                        {/* 1. Social Links */}
                        <div className="space-y-4">
                            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 block ml-1">
                                Social Links
                            </span>
                            <div className="flex flex-wrap items-center gap-3">
                                {socialLinks.map((link) => (
                                    <SocialPill key={link.id} link={link} />
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* 2. Meeting */}
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 block ml-1">
                                    Meeting
                                </span>
                                <div className="flex flex-wrap items-center gap-3">
                                    {meetingLinks.map((link) => (
                                        <SocialPill key={link.id} link={link} />
                                    ))}
                                </div>
                            </div>

                            {/* 3. Resume */}
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 block ml-1">
                                    Resume
                                </span>
                                <div className="flex flex-wrap items-center gap-3">
                                    {resumeLinks.map((link) => (
                                        <SocialPill key={link.id} link={link} />
                                    ))}
                                </div>
                            </div>
                            {/* 4. Texting */}
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 block ml-1">
                                    Texting
                                </span>
                                <div className="flex flex-wrap items-center gap-3">
                                    {texting.map((link) => (
                                        <SocialPill key={link.id} link={link} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;