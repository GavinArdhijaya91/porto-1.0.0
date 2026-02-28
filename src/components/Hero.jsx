import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

const roles = ['Web Developer', 'UI/UX Enthusiast', 'Software Engineer', 'Creative Coder']

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        const role = roles[currentRole]
        let timeout
        if (typing) {
            if (displayed.length < role.length) {
                timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70)
            } else {
                timeout = setTimeout(() => setTyping(false), 1800)
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
            } else {
                setCurrentRole((prev) => (prev + 1) % roles.length)
                setTyping(true)
            }
        }
        return () => clearTimeout(timeout)
    }, [displayed, typing, currentRole])

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.2 } }
    }
    const item = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="blob w-[500px] h-[500px] bg-accent/10 top-[-120px] left-[-120px]" />
            <div className="blob w-[350px] h-[350px] bg-accent-violet/10 bottom-0 right-0" style={{ animationDelay: '3s' }} />

            <div
                className="absolute inset-0 opacity-[0.02] z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.06] pointer-events-none z-0"
                style={{
                    webkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
                }}
            >
                <img
                    src="/artric-monkey.gif"
                    alt="Decorative Background"
                    className="w-full h-full object-contain filter invert opacity-40"
                />
            </div>

            <div className="relative z-10 w-full pt-24 pb-12 px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 max-w-[1300px] mx-auto">


                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex-1 flex flex-col items-start text-left"
                    >
                    
                        <motion.div
                            variants={item}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-accent bg-accent/5 text-accent-light text-xs font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Available for opportunities
                        </motion.div>

                       
                        <motion.p
                            variants={item}
                            className="text-text-muted text-lg font-medium mb-1 font-sans"
                        >
                            Hello, I'm
                        </motion.p>

                        
                        <motion.h1
                            variants={item}
                            className="font-sans font-extrabold leading-none mb-4"
                            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
                        >
                            Gavin<br />
                            <span className="text-gradient">Ardhijaya</span>
                        </motion.h1>

                    
                        <motion.div
                            variants={item}
                            className="flex items-center gap-2 text-lg md:text-xl text-text-soft font-medium mb-5 h-8 font-sans"
                        >
                            <span className="text-accent-violet">I am a </span>
                            <span className="text-text-primary">{displayed}</span>
                            <span className="typing-cursor" />
                        </motion.div>

                       
                        <motion.p
                            variants={item}
                            className="text-text-muted text-base leading-relaxed max-w-lg mb-9"
                        >
                            A passionate college student who loves building elegant, high-performance web
                            experiences. I combine creativity with clean code to craft products that matter.
                        </motion.p>

                        
                        <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm transition-all btn-glow"
                            >
                                View My Work
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 rounded-xl border border-border-accent text-accent-light font-semibold text-sm hover:bg-accent/10 transition-all"
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>

                       
                        <motion.div variants={item} className="flex gap-3">
                            {[
                                { href: 'https://github.com/gavinardhijaya', icon: <FiGithub size={20} />, label: 'GitHub' },
                                { href: 'https://linkedin.com/in/gavinardhijaya1', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
                                { href: 'https://instagram.com/gavin.ardhijaya', icon: <BsInstagram size={20} />, label: 'Instagram' },
                                { href: 'https://wa.me/6289523774286', icon: <BsWhatsapp size={20} />, label: 'WhatsApp' },
                            ].map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-xl border border-border-dark bg-bg-card flex items-center justify-center text-text-muted hover:text-accent-light hover:border-border-accent transition-all"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                        className="flex-shrink-0 flex justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -16, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            {/* Soft glow behind the photo */}
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent/20 via-accent-violet/15 to-transparent blur-3xl scale-90 translate-y-8" />
                                <img
                                    src="/Gavin-Photo-removebg-preview.png"
                                    alt="Gavin Ardhijaya"
                                    className="relative z-10 w-[280px] md:w-[340px] lg:w-[400px] xl:w-[440px] object-contain drop-shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs"
            >
                <span>Scroll down</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <HiArrowDown size={18} />
                </motion.div>
            </motion.button>
        </section>
    )
}
