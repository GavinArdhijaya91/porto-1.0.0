import { useRef, useEffect } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
    SiNodedotjs, SiPhp, SiLaravel, SiMysql, SiFigma,
    SiGit, SiPython
} from 'react-icons/si'

const skills =
    [
        { name: 'HTML5', icon: <SiHtml5 />, level: 90, color: '#e34f26' },
        { name: 'CSS3', icon: <SiCss3 />, level: 85, color: '#1572b6' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 80, color: '#f7df1e' },
        { name: 'React', icon: <SiReact />, level: 72, color: '#61dafb' },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 78, color: '#38bdf8' },
        { name: 'Node.js', icon: <SiNodedotjs />, level: 65, color: '#339933' },
        { name: 'PHP', icon: <SiPhp />, level: 70, color: '#777bb4' },
        { name: 'Laravel', icon: <SiLaravel />, level: 65, color: '#ff2d20' },
        { name: 'MySQL', icon: <SiMysql />, level: 70, color: '#4479a1' },
        { name: 'Python', icon: <SiPython />, level: 60, color: '#3776ab' },
        { name: 'Figma', icon: <SiFigma />, level: 68, color: '#f24e1e' },
    ]

function Counter({ from, to, suffix = '' }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    const count = useSpring(from, {
        stiffness: 40,
        damping: 15,
        restDelta: 0.001
    })

    const displayCount = useTransform(count, (latest) => Math.floor(latest) + suffix)

    useEffect(() => {
        if (inView) {
            count.set(to)
        }
    }, [inView, to, count])

    return <motion.span ref={ref}>{displayCount}</motion.span>
}

function SkillBar({ skill, index }) {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex items-center gap-3"
        >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-bg-card text-lg" style={{ color: skill.color }}>
                {skill.icon}
            </div>
            <div className="flex-1">
                <div className="flex justify-between text-xs text-text-muted mb-1">
                    <span className="font-medium text-text-soft">{skill.name}</span>
                    <span><Counter from={0} to={skill.level} suffix="%" /></span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.04, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } }
    }
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    }

    return (
        <section id="about" className="section-padding relative overflow-hidden">

            {/* Background glow */}
            <div className="blob w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2"
                style=
                {{
                    backgroundImage: 'url(dark_wallpaper.png)',
                    opacity: 0.6,
                    width: 780,
                    height: 920,
                    backgroundSize: 'cover',
                }} />

            {/* Video Animasi Garis (biar keren aja :v) */}
            <video
                src="/line_animation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
                style={{ mixBlendMode: 'screen', opacity: 0.3 }}
            />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Who Am I</p>
                    <h2 className="section-title text-gradient">About Me</h2>
                    <p className="section-subtitle">A quick dive into who I am and what I know</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}>


                        <motion.h3 variants={fadeUp} className="font-display font-bold text-2xl mb-4">
                            Hi, I'm <span className="text-gradient">Gavin 👋</span>
                        </motion.h3>

                        <motion.p variants={fadeUp} className="text-text-muted leading-relaxed mb-4">
                            I'm a college student with a strong passion for technology, particularly in <span className="text-text-soft">Web Development</span>, <span className="text-text-soft">Software Engineering</span>, <span className="text-text-soft">Data Science</span>, and <span className="text-text-soft">Graphic Design</span>.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-text-muted leading-relaxed mb-4">
                            I believe continuous learning is the key to growth in this rapidly evolving field. My vision is to use technology as a tool to help people by solving real-world problems and making daily life more efficient.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-text-muted leading-relaxed mb-8">
                            I enjoy turning creative ideas into practical, impactful products — from small-scale mini projects to larger, complex applications.
                        </motion.p>

                        {/* Stats */}
                        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
                            {[
                                { value: 2, suffix: '+', label: 'Projects Done' },
                                { value: 1, suffix: '+', label: 'Years Coding' },
                                { value: 5, suffix: '+', label: 'Tech Stacks' },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-bg-card rounded-xl p-4 border border-border-dark text-center">
                                    <div className="font-display font-bold text-2xl text-gradient">
                                        <Counter from={0} to={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-text-muted text-xs mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Skills */}
                    <div>
                        <h4 className="font-display font-semibold text-lg text-text-primary mb-6">Technical Skills</h4>
                        <div className="space-y-4">
                            {skills.map((skill, i) => (
                                <SkillBar key={skill.name} skill={skill} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
