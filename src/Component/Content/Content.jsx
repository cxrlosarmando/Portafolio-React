import React from 'react';

export const Content = () => {
    return (
        <div id='Inicio' className="w-full max-w-4xl mx-auto p-4 pt-20">

            <div className="flex justify-center mb-6">
                <img
                    src="/A7306861.jpg"
                    alt="Perfil"
                    className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
                />
            </div>

            <div className="text-center mb-8">
                <h1 className="text-2xl font-extrabold text-white mb-2 sm:text-3xl md:text-4xl lg:text-4xl">Carlos Romero</h1>
                <h2 className="text-xl text-white sm:text-1xl md:text-2xl">UX/UI Developer and Full-Stack Developer</h2>
            </div>

            <div className="text-center">
                <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl">
                    Apasionado por la creación de experiencias digitales impactantes combinando de manera eficiente el diseño atractivo con un código sólido. Con formación en UX/UI y Desarrollo Full Stack, me especializo en elevar la usabilidad y la innovación en proyectos tecnológicos.
                    Explora mis proyectos de programación y diseño en Figma.
                </p>
            </div>
        </div>
    );
};
