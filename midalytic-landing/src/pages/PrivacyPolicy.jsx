import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-background-light dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Aviso de Privacidad</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
                    <p>
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>
                    <p>
                        En Midalytic, respetamos su privacidad y estamos comprometidos a proteger sus datos personales.
                        Este aviso de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web
                        y le informará sobre sus derechos de privacidad y cómo la ley lo protege.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Información que recopilamos</h2>
                    <p>
                        Podemos recopilar, utilizar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Datos de Identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.</li>
                        <li><strong>Datos de Contacto:</strong> incluye dirección de correo electrónico y números de teléfono.</li>
                        <li><strong>Datos Técnicos:</strong> incluye dirección de protocolo de internet (IP), sus datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a este sitio web.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Cómo utilizamos sus datos</h2>
                    <p>
                        Solo utilizaremos sus datos personales cuando la ley lo permita. Normalmente, utilizaremos sus datos personales en las siguientes circunstancias:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Donde necesitemos realizar el contrato que estamos a punto de celebrar o que hemos celebrado con usted.</li>
                        <li>Donde sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos fundamentales no prevalezcan sobre esos intereses.</li>
                        <li>Donde necesitemos cumplir con una obligación legal o reglamentaria.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Seguridad de los datos</h2>
                    <p>
                        Hemos implementado medidas de seguridad adecuadas para evitar que sus datos personales se pierdan accidentalmente, se utilicen o se acceda a ellos de forma no autorizada, se alteren o se divulguen. Además, limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tengan una necesidad comercial de conocerlos.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre este aviso de privacidad o nuestras prácticas de privacidad, contáctenos en: <a href="mailto:contacto@midalytic.me" className="text-primary hover:underline">contacto@midalytic.me</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
