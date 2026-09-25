'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Github, Globe, ArrowUpRight, X, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { getTechInfo } from '../../../lib/techIcons';

const ProjectCard = ({ project, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const stackItems = (project.stack || []).map(techName => getTechInfo(techName));
    const shortTitle = project.title.split('—')[0].split('–')[0].split('-')[0].split(':')[0].trim();

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -7 }}
                onMouseMove={handleMouseMove}
                onClick={() => setIsModalOpen(true)}
                className="group relative flex flex-col cursor-pointer select-none"
            >
                {/* Image/Gradient Area with Floating Browser Feel */}
                <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900/90 border border-black/[0.07] dark:border-white/[0.08] transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:border-black/20 dark:group-hover:border-white/25 group-hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.18)] dark:group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.75)]">

                    {/* Cursor Follow Spotlight Glow */}
                    <div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        style={{
                            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.18), transparent 65%)`,
                        }}
                    />

                    {/* Ambient Theme Glow on Hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-35 transition-opacity duration-700 blur-3xl pointer-events-none z-0"
                        style={{ background: `radial-gradient(circle at 50% 50%, ${project.bgColor || '#10b981'}, transparent 70%)` }}
                    />

                    {/* Main Image Container */}
                    <div className="absolute inset-3.5 md:inset-5 bottom-0 rounded-t-2xl overflow-hidden bg-white dark:bg-zinc-800 shadow-2xl transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-1 group-hover:scale-[1.015]">
                        {/* Interactive Browser Bar */}
                        <div className="h-8 w-full bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between px-3.5 shrink-0 z-20">
                            {/* Window Action Dots */}
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/40 dark:bg-red-400/25 group-hover:bg-red-500 transition-colors duration-300" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40 dark:bg-amber-400/25 group-hover:bg-amber-400 transition-colors duration-300" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40 dark:bg-emerald-400/25 group-hover:bg-emerald-500 transition-colors duration-300" />
                            </div>

                            {/* Center URL / Path Indicator */}
                            <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 opacity-60 group-hover:opacity-100 transition-opacity tracking-wider">
                                {project.id.toLowerCase()}.app
                            </div>

                            <div className="w-8" />
                        </div>

                        {/* Project Preview Area */}
                        <div className="relative w-full h-full">
                            {project.img ? (
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    quality={85}
                                    sizes="(max-width: 768px) 90vw, 45vw"
                                    className="object-contain transition-all duration-700 ease-out group-hover:scale-[1.04]"
                                />
                            ) : (
                                <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${project.gradient || 'from-zinc-700 to-zinc-900'} p-6 text-center shadow-inner relative overflow-hidden`}>
                                    {/* Light sweep animation on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                                    <span className="text-2xl md:text-3xl font-instrument italic text-white/95 drop-shadow-md group-hover:scale-105 transition-transform duration-500">
                                        {shortTitle}
                                    </span>
                                    <span className="text-[10px] font-mono tracking-widest text-white/80 mt-2 uppercase px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm border border-white/10 group-hover:border-white/25 transition-colors">
                                        {project.role}
                                    </span>
                                </div>
                            )}

                            {/* Floating "Explore Project" Pill on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none z-20">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 dark:bg-white/95 text-white dark:text-zinc-950 backdrop-blur-md shadow-2xl border border-white/20 dark:border-black/10 text-xs font-inter font-medium transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                                    <span>Explore Project</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Subtle Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="pt-6 px-1 space-y-3.5">
                    <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                            <h3 className="text-2xl md:text-3xl font-instrument italic text-zinc-900 dark:text-zinc-100 tracking-tight leading-none group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                                {project.role}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-2.5 rounded-full border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/10 hover:scale-110 active:scale-95 transition-all text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                                    aria-label="GitHub"
                                >
                                    <Github size={16} strokeWidth={1.5} />
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-110 active:scale-95 transition-all shadow-lg"
                                    title="View Deployed Website"
                                    aria-label="Deployed Website"
                                >
                                    <ExternalLink size={16} strokeWidth={2} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-sm font-inter font-light text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech Stack Symbols & Interactive Explore Badge */}
                    <div className="flex items-center justify-between pt-1.5 border-t border-black/[0.04] dark:border-white/[0.04]">
                        <div className="flex flex-wrap gap-1.5 items-center">
                            {stackItems.map((tech, i) => (
                                <TechCircle key={i} tech={tech} index={i} total={stackItems.length} />
                            ))}
                        </div>
                        <div className="flex items-center gap-2 ml-2 shrink-0">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 hover:text-white dark:hover:text-zinc-950 bg-emerald-500/10 hover:bg-emerald-600 dark:hover:bg-emerald-400 border border-emerald-500/30 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all duration-300 shadow-xs hover:scale-105 active:scale-95"
                                    title="Open Deployed Website"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Deployed</span>
                                    <ExternalLink size={11} />
                                </a>
                            )}
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 bg-zinc-100/80 dark:bg-zinc-800/80 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 border border-black/5 dark:border-white/5 transition-all duration-300">
                                <span>Details</span>
                                <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Full Project Details Modal */}
            <ProjectDetailsModal
                project={project}
                shortTitle={shortTitle}
                stackItems={stackItems}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

// Full Project Details Modal Component
const ProjectDetailsModal = ({ project, shortTitle, stackItems, isOpen, onClose }) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const hasGallery = project.images && project.images.length > 0;
    const currentImg = hasGallery ? project.images[activeImgIndex] : project.img;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-99999 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-3xl shadow-2xl overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col"
                >
                    {/* Header Banner / Image Viewer */}
                    <div className="relative w-full h-56 md:h-72 bg-zinc-950 flex flex-col justify-between p-4 md:p-6 shrink-0 overflow-hidden border-b border-zinc-800">
                        {currentImg ? (
                            <div className="absolute inset-0 w-full h-full bg-zinc-950 flex items-center justify-center">
                                <Image
                                    src={currentImg}
                                    alt={`${project.title} screenshot ${activeImgIndex + 1}`}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    className="object-contain"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-black/40 pointer-events-none" />
                            </div>
                        ) : (
                            <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${project.gradient || 'from-zinc-700 to-zinc-900'}`} />
                        )}

                        {/* Top Bar Controls */}
                        <div className="flex items-center justify-between w-full z-10">
                            <span className="text-[10px] font-mono tracking-widest text-white uppercase px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-md">
                                {project.role}
                            </span>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-black/60 text-white/90 hover:text-white hover:bg-black/90 transition-all cursor-pointer backdrop-blur-md shadow-md"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Short Title overlay */}
                        <div className="z-10 mt-auto">
                            <h2 className="text-3xl md:text-4xl font-instrument italic text-white drop-shadow-lg">
                                {shortTitle}
                            </h2>
                        </div>
                    </div>

                    {/* Gallery Thumbnail Strip (if screenshots available) */}
                    {hasGallery && (
                        <div className="p-3 bg-zinc-950 border-b border-zinc-800 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-thin">
                            {project.images.map((imgUrl, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImgIndex(i)}
                                    className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${activeImgIndex === i ? 'border-emerald-500 scale-105 shadow-md' : 'border-zinc-800 opacity-60 hover:opacity-100'}`}
                                >
                                    <Image
                                        src={imgUrl}
                                        alt={`Thumb ${i + 1}`}
                                        fill
                                        unoptimized
                                        sizes="80px"
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Content Body */}
                    <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-left">
                        {/* Full Title & Description */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-instrument italic text-white leading-snug mb-3">
                                {project.title}
                            </h3>
                            <p className="text-sm font-inter text-zinc-300 font-light leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Key Technical Features */}
                        {project.features && project.features.length > 0 && (
                            <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold flex items-center gap-2">
                                    <Sparkles size={14} /> Key Technical Highlights
                                </h4>
                                <ul className="space-y-2.5">
                                    {project.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-inter text-zinc-300 font-light">
                                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Complete Technologies Used */}
                        <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                                Technologies & Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {stackItems.map((tech, idx) => (
                                    <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-medium text-zinc-200">
                                        {typeof tech.icon === 'function' ? (
                                            <tech.icon size={14} style={tech.color ? { color: tech.color } : undefined} />
                                        ) : typeof tech.icon === 'string' ? (
                                            <img src={tech.icon} alt={tech.name} className="w-3.5 h-3.5 object-contain" />
                                        ) : null}
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="p-4 md:p-6 bg-zinc-950/80 border-t border-zinc-800 flex items-center justify-between shrink-0 gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-md hover:scale-105"
                                >
                                    <ExternalLink size={15} /> Deployed Website
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-all border border-zinc-700"
                                >
                                    <Github size={15} /> View Code on GitHub
                                </a>
                            )}
                        </div>

                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        >
                            Close [ESC]
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

// Clean Circular Stack Item with high quality tool symbols
const TechCircle = ({ tech, index, total }) => {
    // Determine tooltip position alignment
    let tooltipPosClass = "left-1/2 -translate-x-1/2";
    let arrowPosClass = "left-1/2 -translate-x-1/2";

    if (index === 0) {
        tooltipPosClass = "left-0 translate-x-0";
        arrowPosClass = "left-4 -translate-x-1/2";
    } else if (index === total - 1) {
        tooltipPosClass = "right-0 translate-x-0 left-auto";
        arrowPosClass = "right-4 translate-x-1/2";
    }

    const isComponentIcon = typeof tech.icon === 'function' || (typeof tech.icon === 'object' && tech.icon !== null && !('src' in tech.icon));

    return (
        <div className="group/tech relative flex items-center justify-center w-8.5 h-8.5 rounded-full bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-400 dark:hover:border-zinc-500 hover:z-20 transition-all duration-300 hover:scale-110 cursor-help shadow-2xs shrink-0">
            {tech.icon ? (
                isComponentIcon ? (
                    <tech.icon
                        size={16}
                        strokeWidth={1.75}
                        style={tech.color ? { color: tech.color } : undefined}
                        className="text-zinc-700 dark:text-zinc-300 opacity-90 group-hover/tech:opacity-100 transition-opacity"
                    />
                ) : (
                    <>
                        <img
                            src={typeof tech.icon === 'string' ? tech.icon : tech.icon.src}
                            alt={tech.name}
                            className={`w-4.5 h-4.5 object-contain ${tech.darkIcon ? 'dark:hidden' : (tech.invertDark ? 'dark:invert' : '')} opacity-85 group-hover/tech:opacity-100 transition-opacity`}
                            loading="lazy"
                        />
                        {tech.darkIcon && (
                            <img
                                src={tech.darkIcon}
                                alt={tech.name}
                                className="w-4.5 h-4.5 object-contain hidden dark:block opacity-85 group-hover/tech:opacity-100 transition-opacity"
                                loading="lazy"
                            />
                        )}
                    </>
                )
            ) : (
                <span className="text-[9px] font-mono font-bold text-zinc-600 dark:text-zinc-400 uppercase">
                    {tech.name.slice(0, 2)}
                </span>
            )}

            {/* Tooltip popping up on hover */}
            <div className={`absolute bottom-full mb-2 px-2.5 py-1 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-[10px] font-medium font-inter rounded-md opacity-0 group-hover/tech:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-30 shadow-lg ${tooltipPosClass}`}>
                {tech.name}
                {/* Tooltip Arrow */}
                <div className={`absolute top-full border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100 ${arrowPosClass}`} />
            </div>
        </div>
    );
};

export default ProjectCard;
