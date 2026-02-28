import { FiGithub } from 'react-icons/fi'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="border-t border-border-dark py-8">
            <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-display font-bold text-lg">
                    <span className="text-gradient">Portfolio</span>
                    <span className="text-accent">.</span>
                </div>
                <p className="text-text-muted text-sm text-center">
                    © {year} Gavin Ardhijaya Production.
                </p>
                <a
                    href="https://github.com/gavinardhijaya91"
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted hover:text-accent-light transition-colors"
                    aria-label="GitHub"
                >
                    <FiGithub size={20} />
                </a>
            </div>
        </footer>
    )
}
