import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
    {
        company: 'Youth Ranger Indonesia',
        role: 'Backend Developer',
        period: 'Des 2025 - Present',
        description: 'Developed and maintained the organizations web platform, including an admin dashboard, event management system, and article CMS.',
        type: 'Organization',
        rotation: '-rotate-2', 
        yOffset: '0px',
    },
    {
        company: 'Pagelaran Tari Seni Budaya',
        role: 'Event Organizer',
        period: 'Nov 2024 - Feb 2025',
        description: 'Participated in community outreach programs and assisted in organizing local events for youth empowerment.',
        type: 'Volunteer',
        rotation: 'rotate-3',
        yOffset: '40px', 
    },
]

function PolaroidCard({ exp, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    // kanan kanan kiri (asekk)
    const isEven = index % 2 === 0
    const xAnimation = isEven ? -50 : 50

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: xAnimation, scale: 0.9 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', bounce: 0.4 }}
            className={`relative w-full md:w-[45%] ${isEven ? 'self-start md:mr-auto' : 'self-end md:ml-auto'} max-w-sm`}
            style={{ marginTop: exp.yOffset }}
        >
            {/* Benang Merah menuju Pin Merah*/}
            <svg className="absolute hidden md:block w-[150%] h-[150%] pointer-events-none z-0 opacity-80"
                style={{
                    top: '10px',
                    left: isEven ? '50%' : '-100%',
                    transform: isEven ? 'none' : 'scaleX(-1)' 
                }}
            >
                <path
                    d="M 0 0 C 80 20, 120 150, 200 200"
                    fill="transparent"
                    stroke="#D90429"
                    strokeWidth="3"
                    strokeDasharray="5,5" 
                />
            </svg>

            {/* Kartu Polaroid */}
            <div className={`relative bg-white p-4 pb-12 rounded-sm shadow-xl transform transition-transform hover:scale-105 z-10 ${exp.rotation} border border-gray-200`}>

                {/* Pin Merah 3d */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 z-20">
                    {/* Kepala Pin Merah */}
                    <div className="w-4 h-4 rounded-full bg-red-600 shadow-md absolute top-0 left-1 translate-x-px" style={{ boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.5), 2px 4px 6px rgba(0,0,0,0.3)' }}></div>
                    {/* Jarum Pin Merah */}
                    <div className="w-1 h-3 bg-gray-400 absolute top-3 left-1/2 -translate-x-1/2 -z-10" style={{ transform: 'rotate(-15deg)' }}></div>
                </div>

                {/* Selotip */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/40 backdrop-blur-sm transform -rotate-2 z-10 hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}></div>

                {/* Isian dari Foto (bisa berupa gambar atau video, yg penting estetik)*/}
                <div className="bg-gray-100 w-full h-40 mb-4 flex items-center justify-center p-4 rounded-sm border border-gray-300 shadow-inner overflow-hidden relative">
                    <div className="text-center z-10 relative">
                        <h3 className="text-xl font-bold text-gray-800 mb-1 font-display" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.7)' }}>{exp.role}</h3>
                        <p className="text-sm text-gray-600 font-medium">{exp.company}</p>
                    </div>
                </div>

                {/* Handwritten-style bottom text */}
                <div className="px-2">
                    <p className="text-[#333] text-sm leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                        "{exp.description}"
                    </p>
                    <div className="flex justify-between items-end mt-4">
                        <span className="text-red-700 font-bold text-xs transform -rotate-2 inline-block px-2 py-1 border-2 border-red-700 rounded-md opacity-80" style={{ fontFamily: 'Courier, monospace' }}>
                            {exp.period}
                        </span>
                        <span className={`px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold tracking-wider ${exp.type === 'work' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                            }`}>
                            {exp.type}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Experience() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="experience" className="section-padding relative overflow-hidden">

            {/* Campuran Background Gelap */}
            <div className="absolute inset-0 bg-bg-primary z-0"></div>

            {/* Bulletin Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0"
                style={{
                    backgroundImage: 'url(/blue_texture.png)', 
                    backgroundSize: 'cover',
                    filter: 'contrast(1.5) grayscale(100%)', 
                }}
            />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 relative"
                >
                    <div className="inline-block bg-white text-black px-8 py-4 transform -rotate-1 shadow-lg border-2 border-gray-300 relative">
                       
                        <div className="absolute -top-3 -left-4 w-12 h-6 bg-yellow-100/50 rotate-45 backdrop-blur-sm shadow-sm"></div>
                        <div className="absolute -bottom-3 -right-4 w-12 h-6 bg-yellow-100/50 rotate-45 backdrop-blur-sm shadow-sm"></div>

                        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest" style={{ fontFamily: 'Courier, monospace' }}>Struktur Organisasi & Pengalaman</h2>
                    </div>
                </motion.div>

                {/* Timeline (perjalanan waktu)*/}
                <div className="relative max-w-5xl mx-auto flex flex-col md:gap-8 px-4 py-10">

                    {/* Benang Vertikal (Mobile fallback / guiding line) */}
                    <div className="absolute left-[15%] md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-red-600/50 -translate-x-1/2 z-0" />

                    {experiences.map((exp, i) => (
                        <PolaroidCard key={exp.company + exp.period} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
