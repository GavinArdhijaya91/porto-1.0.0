import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30)

            const sections = ['home', 'about', 'projects', 'contact']
            const current = sections.find(id => {
                const el = document.getElementById(id)
                if (!el) return false
                const rect = el.getBoundingClientRect()
                return rect.top <= 100 && rect.bottom >= 100
            })
            if (current) setActiveSection(current)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = (href) => {
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-glass-nav shadow-lg shadow-black/20' : 'bg-transparent'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-[72px]">
                       
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="font-display font-bold text-xl cursor-pointer"
                            onClick={() => handleLinkClick('#home')}
                        >
                            <span className="text-gradient">Portfolio</span>
                            <span className="text-accent">.</span>
                        </motion.div>

                        
                        <ul className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => handleLinkClick(link.href)}
                                        className={`text-sm font-medium transition-colors duration-200 relative group ${activeSection === link.href.slice(1)
                                            ? 'text-accent-light'
                                            : 'text-text-soft hover:text-text-primary'
                                            }`}
                                    >
                                        {link.label}
                                        <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-200 ${activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`} />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* CV nya mana woii */}
                        <motion.a
                            href="/CV4_HieronimusGavinArdhijaya.pdf"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-border-accent text-accent-light text-sm font-medium btn-glow"
                        >
                            Download CV
                        </motion.a>

                        {/* Hamburger */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden text-text-primary p-2"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Versi Mobile */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-[72px] left-0 right-0 z-40 bg-glass-nav border-b border-border-dark py-6"
                    >
                        <div className="container-custom flex flex-col gap-5">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`text-left text-base font-medium ${activeSection === link.href.slice(1) ? 'text-accent-light' : 'text-text-soft'
                                        }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <a
                                href="/CV4_HieronimusGavinjArdhijaya.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="w-fit px-4 py-2 rounded-lg border border-border-accent text-accent-light text-sm font-medium mt-2"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
