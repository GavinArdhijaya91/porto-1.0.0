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
                timeout = setTimeout(() => {
                    setDisplayed(role.slice(0, displayed.length + 1))
                }, 70)
            } else {
                timeout = setTimeout(() => setTyping(false), 1800)
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(displayed.slice(0, -1))
                }, 40)
            } else {
                setCurrentRole((prev) => (prev + 1) % roles.length)
                setTyping(true)
            }
        }
        return () => clearTimeout(timeout)
    }, [displayed, typing, currentRole])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    }
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background blobs */}
            <div className="blob w-[500px] h-[500px] bg-accent/10 top-[-100px] left-[-100px]" />
            <div className="blob w-[400px] h-[400px] bg-accent-violet/10 bottom-[-50px] right-[-50px]" style={{ animationDelay: '3s' }} />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] z-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="container-custom relative z-10 pt-20 pb-10">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
                    {/* Badge */}
                    <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-accent bg-accent/5 text-accent-light text-xs font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Available for opportunities
                    </motion.div>

                    {/* Greeting */}
                    <motion.p variants={item} className="text-text-muted text-lg font-medium mb-2">
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={item}
                        className="font-display font-extrabold leading-none mb-4"
                        style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '-0.03em' }}
                    >
                        Gavin<br />
                        <span className="text-gradient">Ardhijaya</span>
                    </motion.h1>

                    {/* Typing role */}
                    <motion.div variants={item} className="flex items-center gap-2 text-xl md:text-2xl text-text-soft font-medium mb-6 h-10">
                        <span className="text-accent-violet">I am a </span>
                        <span className="text-text-primary">{displayed}</span>
                        <span className="typing-cursor" />
                    </motion.div>

                    {/* Bio */}
                    <motion.p variants={item} className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl mb-10">
                        A passionate college student who loves building elegant, high-performance web experiences.
                        I combine creativity with clean code to craft products that matter.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
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
                            className="px-6 py-3 rounded-xl border border-border-accent text-accent-light font-semibold text-sm transition-all hover:bg-accent/10"
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div variants={item} className="flex gap-4">
                        {[
                            { href: 'https://github.com/gavinardhijaya91', icon: <FiGithub size={20} />, label: 'GitHub' },
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

                {/* Floating photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                    className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative"
                    >
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-violet/30 blur-3xl scale-110" />
                        {/* Photo container */}
                        <div className="relative w-[280px] h-[280px] xl:w-[340px] xl:h-[340px] rounded-full border-2 border-border-accent overflow-hidden bg-bg-card">
                            <img
                                src="/Gavin-Photo-removebg-preview.png"
                                alt="Gavin Ardhijaya"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
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
