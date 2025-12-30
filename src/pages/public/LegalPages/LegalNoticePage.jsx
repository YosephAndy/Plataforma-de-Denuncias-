
import React from 'react';
import Header from '../../../components/common/Header/Header';
import { Link } from 'react-router-dom';
import '../../public/LandingPage/LandingPage.css';

const LegalNoticePage = () => {
    return (
        <div className="landing-page">
            <Header />
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                    <h1 className="section-title">Aviso Legal</h1>
                    <p className="section-subtitle" style={{ marginLeft: 0 }}>
                        Información legal y administrativa
                    </p>
                </div>

                <div className="terms-content-full">
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>1. Titularidad</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            La Plataforma de Denuncias Ciudadanas es una iniciativa tecnológica gestionada por la entidad municipal correspondiente, con el objetivo de fomentar la participación ciudadana y mejorar la gestión de los servicios públicos.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>2. Propiedad Intelectual</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            El código fuente, los diseños gráficos, las imágenes, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en este sitio web están protegidos por la legislación sobre propiedad intelectual e industrial.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>3. Exención de Responsabilidad</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            El titular de la plataforma no se hace responsable de los contenidos de los enlaces externos que puedan aparecer en el sitio web, ni de las opiniones vertidas por los usuarios a través de las herramientas de participación.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>4. Ley Aplicable y Jurisdicción</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación vigente, a la que se someten expresamente las partes.
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

export default LegalNoticePage;
