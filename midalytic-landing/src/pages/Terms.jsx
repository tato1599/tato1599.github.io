import React, { useEffect } from 'react';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-background-light dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Términos y Condiciones</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
                    <p>
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>
                    <p>
                        Por favor lea estos términos y condiciones cuidadosamente antes de usar nuestro servicio.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Aceptación de los Términos</h2>
                    <p>
                        Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Propiedad Intelectual</h2>
                    <p>
                        El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de Midalytic y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas y otras leyes tanto de México como de países extranjeros.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Enlaces a Otros Sitios Web</h2>
                    <p>
                        Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por Midalytic. Midalytic no tiene control ni asume responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios web o servicios de terceros.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Limitación de Responsabilidad</h2>
                    <p>
                        En ningún caso Midalytic, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo, sin limitación, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) su acceso o uso o la imposibilidad de acceder o usar el Servicio; (ii) cualquier conducta o contenido de terceros en el Servicio; (iii) cualquier contenido obtenido del Servicio; y (iv) acceso no autorizado, uso o alteración de sus transmisiones o contenido.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Cambios</h2>
                    <p>
                        Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es importante, intentaremos proporcionar un aviso con al menos 30 días de antelación antes de que entren en vigor los nuevos términos.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">6. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre estos Términos, contáctenos en: <a href="mailto:contacto@midalytic.me" className="text-primary hover:underline">contacto@midalytic.me</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
