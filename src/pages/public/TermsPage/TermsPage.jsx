
import React from 'react';
import Header from '../../../components/common/Header/Header';
import { Link } from 'react-router-dom';
import '../../../pages/public/LandingPage/LandingPage.css'; // Reusing landing page basic styles

const TermsPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                    <h1 className="section-title">Términos y Condiciones</h1>
                    <p className="section-subtitle" style={{ marginLeft: 0 }}>
                        Última actualización: Diciembre 2024
                    </p>
                </div>

                <div className="terms-content-full">
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>1. Aceptación de los Términos</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Al acceder y utilizar la Plataforma de Denuncias Ciudadanas, usted acepta cumplir y estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>2. Descripción del Servicio</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            La Plataforma permite a los ciudadanos reportar incidencias urbanas (baches, basura, alumbrado, etc.) de manera geolocalizada, adjuntando evidencias y realizando un seguimiento del estado de su reporte.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>3. Uso Adecuado</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Usted se compromete a utilizar la plataforma únicamente para fines legales y de acuerdo con estos términos. Queda prohibido:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.7', color: '#475569' }}>
                            <li>Realizar denuncias falsas o malintencionadas.</li>
                            <li>Subir contenido ofensivo, violento o inapropiado.</li>
                            <li>Intentar vulnerar la seguridad de la plataforma.</li>
                            <li>Usar la plataforma para publicidad o spam.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>4. Privacidad y Datos Personales</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Su privacidad es importante para nosotros. Recopilamos y utilizamos sus datos personales de acuerdo con nuestra Política de Privacidad. Al usar la plataforma, usted consiente dicho procesamiento. Las denuncias marcadas como "Anónimas" no mostrarán públicamente su identidad.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>5. Limitación de Responsabilidad</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Esta plataforma actúa como un canal de comunicación. No garantizamos que todas las denuncias sean resueltas en un plazo específico, ya que la ejecución depende de las autoridades competentes y sus recursos disponibles.
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

export default TermsPage;
