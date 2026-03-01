import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
    {
        title: 'Martabak Kuy Shop',
        description: 'A personal shop website so customers can order food online without visiting the store. Features a menu catalog, order form, and real-time order tracking.',
        image: '/C-shop2.JPG',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        github: '#',
        demo: '#',
        featured: true,
    },
    {
        title: 'Medical Monitoring Web',
        description: 'A medical website for monitoring patient recognition results remotely, accessible across any device with responsive design and real-time data.',
        image: '/medical-web.JPG',
        tags: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#',
        featured: false,
    },
    {
        title: 'Personal Portfolio v1',
        description: 'My first portfolio website featuring smooth animations, glassmorphism effects, and a fully responsive design with a dark elegant theme.',
        image: '/porto 1.0.PNG',
        tags: ['HTML', 'CSS', 'JavaScript', 'Swiper.js'],
        github: 'https://github.com/gavinardhijaya',
        demo: '#',
        featured: false,
    },
    {
        title: 'Youth Ranger Indonesia',
        description: 'Full-stack web application for Youth Ranger Indonesia organization. Features admin dashboard, article management, event system, and applicant data management.',
        image: '/experience.png',
        tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
        github: '#',
        demo: '#',
        featured: true,
    },
]

const certificates = [
    {
        title: 'Fullstack Web Development',
        issuer: 'Udemy',
        date: '2023',
        image: '/porto 1.0.PNG',
        link: '#',
    },
    {
        title: 'Responsive Web Design',
        issuer: 'FreeCodeCamp',
        date: '2022',
        image: '/medical-web.JPG',
        link: '#',
    },
]

function ProjectCard({ item, index, isCertificate }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const [hovered, setHovered] = useState(false)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
        setTilt({ x, y })
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
            className="group relative bg-bg-card rounded-2xl border overflow-hidden cursor-pointer"
            style={{
                boxShadow: hovered ? '0 20px 60px rgba(99,102,241,0.15)' : '0 4px 24px rgba(0,0,0,0.4)',
                borderColor: hovered ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.06)',
                transform: hovered
                    ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(-6px)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
                transition: 'all 0.3s ease',
            }}
        >

            {/* Featured badge / Certificate Info */}
            {!isCertificate ? (
                item.featured && (
                    <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-accent/20 border border-border-accent text-accent-light text-xs font-medium">
                        Featured
                    </div>
                )
            ) : (
                <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                    Verified
                </div>
            )}

            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-bg-secondary">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />

                {/* Hover overlay links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-bg-primary/60 backdrop-blur-sm"
                >
                    {!isCertificate ? (
                        <>
                            <motion.a
                                href={item.github}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 rounded-xl bg-bg-card border border-border-accent text-text-primary hover:text-accent-light transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FiGithub size={18} />
                            </motion.a>
                            <motion.a
                                href={item.demo}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 rounded-xl bg-accent text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FiExternalLink size={18} />
                            </motion.a>
                        </>
                    ) : (
                        <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-medium transition-all"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View Credentials <FiExternalLink size={16} />
                        </motion.a>
                    )}
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-text-primary mb-2 group-hover:text-accent-light transition-colors line-clamp-1">
                    {item.title}
                </h3>
                {!isCertificate ? (
                    <>
                        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                            {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light border border-border-accent">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col gap-1 mt-2">
                        <p className="text-accent-light font-medium text-sm">{item.issuer}</p>
                        <p className="text-text-muted text-xs uppercase tracking-widest">{item.date}</p>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [activeTab, setActiveTab] = useState('projects')

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: 'url(/blue_texture.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.35,
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
                }}
            />

            {/* Aset dekoratif */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-10 right-[-40px] md:right-[5%] w-32 md:w-48 opacity-40 md:opacity-60 z-20 pointer-events-none hidden sm:block"
            >
                <img src="/ufo.png" alt="UFO" className="w-full h-auto drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
            </motion.div>

            <motion.div
                animate={{
                    x: [-10, 10, -10],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[20%] left-[-100px] w-64 md:w-80 opacity-10 z-0 pointer-events-none"
            >
                <img src="/cloud.png" alt="Cloud" className="w-full h-auto" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 12, 0],
                    x: [0, -5, 0],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                className="absolute top-[45%] right-[-60px] md:right-[-20px] w-40 md:w-56 opacity-50 md:opacity-80 z-20 pointer-events-none hidden md:block"
                style={{ rotate: -12 }}
            >
                <img src="/AS-Card.png" alt="Decorative Card" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>

            <motion.div
                animate={{
                    x: [10, -10, 10],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-0 right-[-100px] w-80 md:w-[500px] opacity-10 z-0 pointer-events-none"
            >
                <img src="/cloud.png" alt="Cloud" className="w-full h-auto scale-x-[-1]" />
            </motion.div>

            <div className="blob w-[400px] h-[400px] bg-accent-violet/8 top-0 right-0" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 text-gradient">Showcase</p>
                    <h2 className="section-title text-gradient">Projects & Certificates</h2>
                </motion.div>

                {/* Untuk Filtering */}
                <div className="flex items-center justify-center gap-4 mb-14">
                    {['projects', 'certificates'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${activeTab === tab
                                ? 'bg-accent/20 border-border-accent text-accent-light shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                                : 'bg-transparent border-transparent text-text-muted hover:text-text-soft'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Grid Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {activeTab === 'projects' ? (
                            projects.map((project, i) => (
                                <ProjectCard key={project.title} item={project} index={i} isCertificate={false} />
                            ))
                        ) : (
                            certificates.map((cert, i) => (
                                <ProjectCard key={cert.title} item={cert} index={i} isCertificate={true} />
                            ))
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* github lover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/gavinardhijaya"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-accent text-accent-light text-sm font-medium hover:bg-accent/10 transition-all backdrop-blur-sm"
                    >
                        <FiGithub size={16} />
                        View More on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
