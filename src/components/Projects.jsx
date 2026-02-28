import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
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

function ProjectCard({ project, index }) {
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
            {/* Featured badge */}
            {project.featured && (
                <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-accent/20 border border-border-accent text-accent-light text-xs font-medium">
                    Featured
                </div>
            )}

            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-bg-secondary">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />

                {/* Hover overlay links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-bg-primary/60 backdrop-blur-sm"
                >
                    <motion.a
                        href={project.github}
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
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-xl bg-accent text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FiExternalLink size={18} />
                    </motion.a>
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-text-primary mb-2 group-hover:text-accent-light transition-colors">
                    {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light border border-border-accent">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <div className="blob w-[400px] h-[400px] bg-accent-violet/8 top-0 right-0" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
                    <h2 className="section-title text-gradient">Projects</h2>
                    <p className="section-subtitle">A collection of my work — from personal projects to real-world applications</p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>

                {/* More button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10"
                >
                    <motion.a
                        href="https://github.com/gavinardhijaya"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-accent text-accent-light text-sm font-medium hover:bg-accent/10 transition-all"
                    >
                        <FiGithub size={16} />
                        View More on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
