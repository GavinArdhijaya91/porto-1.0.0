import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BsWhatsapp, BsInstagram, BsEnvelope } from 'react-icons/bs'
import { FiLinkedin, FiSend } from 'react-icons/fi'

const socials = [
    { label: 'WhatsApp', icon: <BsWhatsapp size={20} />, href: 'https://wa.me/6289523774286', color: '#25d366' },
    { label: 'Instagram', icon: <BsInstagram size={20} />, href: 'https://instagram.com/gavin.ardhijaya', color: '#e1306c' },
    { label: 'LinkedIn', icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/gavinardhijaya1', color: '#0077b5' },
    { label: 'Email', icon: <BsEnvelope size={20} />, href: 'mailto:gavin.ardhijaya@gmail.com', color: '#6366f1' },
]

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)

        await new Promise(r => setTimeout(r, 1500))
        setSending(false)
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 4000)
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    }

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="blob w-[500px] h-[300px] bg-accent/8 bottom-0 left-1/2 -translate-x-1/2" />

            <div className="container-custom relative z-10" ref={ref}>
              
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
                    <h2 className="section-title text-gradient">Contact Me</h2>
                    <p className="section-subtitle max-w-xl mx-auto">
                        Have a project in mind or just want to say hello? My inbox is always open. I'll get back to you as soon as possible!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Medsos bagian Kiri */}
                    <motion.div
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        className="flex flex-col justify-center"
                    >
                        <motion.h3 variants={fadeUp} className="font-display font-semibold text-xl text-text-primary mb-3">
                            Let's connect 🚀
                        </motion.h3>
                        <motion.p variants={fadeUp} className="text-text-muted leading-relaxed mb-8">
                            I'm currently open for freelance work, internship opportunities, or just a good tech conversation. Feel free to reach out through any of these channels:
                        </motion.p>

                        <motion.div variants={fadeUp} className="space-y-4">
                            {socials.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border-dark hover:border-border-accent transition-all group"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${s.color}18`, color: s.color }}
                                    >
                                        {s.icon}
                                    </div>
                                    <span className="text-text-soft font-medium group-hover:text-text-primary transition-colors">{s.label}</span>
                                    <span className="ml-auto text-text-muted text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Formulir bagian Kanan */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-bg-card border border-border-dark rounded-2xl p-6 md:p-8 space-y-5">
                            <div>
                                <label className="block text-text-muted text-sm mb-2 font-medium">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Gavin Ardhijaya"
                                    required
                                    className="w-full bg-bg-secondary border border-border-dark rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-text-muted text-sm mb-2 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="gavin@example.com"
                                    required
                                    className="w-full bg-bg-secondary border border-border-dark rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-text-muted text-sm mb-2 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full bg-bg-secondary border border-border-dark rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={sending}
                                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm disabled:opacity-70 transition-all"
                            >
                                {sending ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    />
                                ) : sent ? (
                                    <span>✅ Message Sent!</span>
                                ) : (
                                    <>
                                        <FiSend size={16} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            <p className="text-center text-text-muted text-xs">
                                * This form is for demo purposes. Connect via the social links above for direct contact.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
