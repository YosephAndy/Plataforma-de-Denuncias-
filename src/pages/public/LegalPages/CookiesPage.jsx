
import React from 'react';
import Header from '../../../components/common/Header/Header';
import { Link } from 'react-router-dom';
import '../../public/LandingPage/LandingPage.css';

const CookiesPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                    <h1 className="section-title">Política de Cookies</h1>
                    <p className="section-subtitle" style={{ marginLeft: 0 }}>
                        Última actualización: Diciembre 2024
                    </p>
                </div>

                <div className="terms-content-full">
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>1. ¿Qué son las cookies?</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Las cookies son pequeños archivos de texto que los sitios web que visita guardan en su ordenador. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>2. Cookies que utilizamos</h2>
                        <div style={{ marginTop: '1rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#334155' }}>Cookies Esenciales</h3>
                            <p style={{ lineHeight: '1.7', color: '#475569', marginBottom: '1rem' }}>
                                Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Usualmente solo se configuran en respuesta a acciones realizadas por usted, como iniciar sesión o rellenar formularios.
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#334155' }}>Cookies de Funcionalidad</h3>
                            <p style={{ lineHeight: '1.7', color: '#475569', marginBottom: '1rem' }}>
                                Estas cookies permiten que el sitio web recuerde las elecciones que usted hace (como su nombre de usuario, idioma o la región en la que se encuentra) y proporcionan características mejoradas y más personales.
                            </p>
                        </div>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>3. Gestión de cookies</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            La mayoría de los navegadores web permiten cierto control de la mayoría de las cookies a través de la configuración del navegador. Para obtener más información sobre cómo ver qué cookies se han establecido, visite www.aboutcookies.org o www.allaboutcookies.org.
                        </p>
                    </section>

                    <div style={{ marginTop: '4rem', borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
                        <Link to="/" className="primary-button">
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="footer" style={{ marginTop: 'auto' }}>
                <div className="container">
                    <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem' }}>
                        &copy; 2025 <strong>Denuncias Ciudadanas</strong>. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default CookiesPage;
