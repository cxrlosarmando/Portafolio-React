import React from 'react'
import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa';

export const SocialButtons = () => {
    return (
        <>
            <div className="flex justify-center space-x-4 mt-8">
                {/* LinkedIn Button */}
                <a
                    href="https://www.linkedin.com/in/carlos-romero-025364238/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-700 text-white font-bold py-4 px-6 rounded-full hover:bg-blue-800 transition-colors"
                >
                    <FaLinkedin className="mr-2" size={24} />
                    LinkedIn
                </a>

                {/* GitHub Button */}
                <a
                    href="https://github.com/cxrlosarmando"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-slate-600 text-white font-bold py-4 px-6 rounded-full hover:bg-gray-900 transition-colors"
                >
                    <FaGithub className="mr-2" size={24} />
                    GitHub
                </a>

                {/* Figma Button */}
                <a
                    href="https://www.figma.com/design/Agbtt9dJ9M35lZyGCVZDjW/Portafolio-Carlos-Romero-UX%2FUI-Designer?m=auto&t=931rPLnOxJUIp4Rn-6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-pink-500 text-white font-bold py-4 px-6 rounded-full hover:bg-pink-600 transition-colors"
                >
                    <FaFigma className="mr-2" size={24} />
                    Figma
                </a>
            </div>
        </>
    )
}
