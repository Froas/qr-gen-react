import { Book, Github, Code, Play } from 'lucide-react';
import { NavLink } from "react-router-dom";

type NavBarProps = {}

export const NavBar = ({}: NavBarProps) => {
    const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
      isActive ? "bg-black/20" : "hover:bg-black/10"
    }`;

    return (
        <>
            <nav className="bg-gradient-to-r from-black/30 to-blue-600/30 text-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Code className="w-8 h-8" />
                        <span className="text-xl font-bold">QRify</span>
                    </div>
                    <div className="flex space-x-8">
                        <NavLink to="/" className={linkClasses}>
                            <Play className="w-4 h-4" />
                            <span>Home</span>
                        </NavLink>
                    
                        <NavLink to="/docs" className={linkClasses}>
                            <Book className="w-4 h-4" />
                            <span>Documentation</span>
                         </NavLink>
                        <a
                        href="https://github.com/Froas/qr-gen-react"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                        >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                        </a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
};