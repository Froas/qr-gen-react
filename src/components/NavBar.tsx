import { Book, Github, Menu, Play, QrCode, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

type NavBarProps = {}

export const NavBar = ({}: NavBarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
            isActive ? "bg-black/20" : "hover:bg-black/10"
        }`;

    const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors w-full ${
            isActive ? "bg-black/20" : "hover:bg-black/10"
        }`;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-gradient-to-r from-red-800/30 to-blue-600/30 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <QrCode className="w-8 h-8" />
                        <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                            QRify
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
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

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md hover:bg-black/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-white/20">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavLink 
                                to="/" 
                                className={mobileLinkClasses}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Play className="w-4 h-4" />
                                <span>Home</span>
                            </NavLink>
                        
                            <NavLink 
                                to="/docs" 
                                className={mobileLinkClasses}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Book className="w-4 h-4" />
                                <span>Documentation</span>
                            </NavLink>
                            
                            <a
                                href="https://github.com/Froas/qr-gen-react"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors w-full"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Github className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};