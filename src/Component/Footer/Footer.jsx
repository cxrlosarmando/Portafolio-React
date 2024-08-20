import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className="text-gray-400  body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    
                        <span className="ml-3 text-xl">Gracias por llegar hasta acá❤️</span>
                    </a>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                        © 2024 Carlos Romero —
                        <a href="https://www.linkedin.com/in/carlos-romero-025364238/" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">
                            @cxrlosarmando
                        </a>
                    </p>
                   
                </div>
            </footer>
        </>
    )
}
