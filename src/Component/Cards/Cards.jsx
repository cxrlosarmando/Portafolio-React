import React from 'react'

export const Cards = () => {
    return (
        <>
            <section id='Proyectos' className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        
                    
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src=".../assets/img/Aca-estamos-Portada.png"></img>
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Aca estamos!</h2>
                            <p className="text-base leading-relaxed mt-2">Proyecto colaborativo para la Municipalidad de Renca, enfocado en crear un banco de talento que facilite a las empresas la búsqueda de candidatos. Este proyecto se desarrolló como parte de mi formación en Generation.</p>
                            <a className="text-indigo-400 inline-flex items-center mt-3" href="https://github.com/cxrlosarmando/Aca-Estamos-">Ver Más
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src=".../assets/img/TuReceta-Portada.png"></img>
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">TuReceta.cl</h2>
                            <p className="text-base leading-relaxed mt-2">Este proyecto fusiona dos de mis grandes pasiones: la programación y la cocina. Fue aquí donde di mis primeros pasos en el mundo del código, una experiencia que despertó en mí un profundo amor por la programación. Te invito a explorar recetas y descubrir uno de mis primeros proyectos, creado con dedicación y cariño.</p>
                            <a className="text-indigo-400 inline-flex items-center mt-3" href='https://cxrlosarmando.github.io/TuReceta.github.io/'>Ver Más
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src=".../assets/img/Zenit.png"></img>
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Grupo Zenit</h2>
                            <p className="text-base leading-relaxed mt-2">Uno de mis primeros desafíos profesionales fue rediseñar una página web en Figma y luego implementar los cambios en WordPress utilizando el plugin Avada. Este proyecto me permitió ampliar mis conocimientos y renovar la imagen de la empresa, alineándola mejor con lo que quería transmitir. </p>
                            <a className="text-indigo-400 inline-flex items-center mt-3" href='https://www.grupozenit.cl/'>Ver Más
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
