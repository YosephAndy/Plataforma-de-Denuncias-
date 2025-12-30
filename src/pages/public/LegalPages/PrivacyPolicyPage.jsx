
import React from 'react';
import Header from '../../../components/common/Header/Header';
import { Link } from 'react-router-dom';
import '../../public/LandingPage/LandingPage.css';

const PrivacyPolicyPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                    <h1 className="section-title">Política de Privacidad</h1>
                    <p className="section-subtitle" style={{ marginLeft: 0 }}>
                        Última actualización: Diciembre 2024
                    </p>
                </div>

                <div className="terms-content-full">
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>1. Información que Recopilamos</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Para el funcionamiento de la Plataforma de Denuncias Ciudadanas, recopilamos diferentes tipos de información:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.7', color: '#475569' }}>
                            <li><strong>Datos de Identificación:</strong> Nombre, apellidos y correo electrónico (solo para usuarios registrados).</li>
                            <li><strong>Datos de Ubicación:</strong> Coordenadas geográficas necesarias para geolocalizar las denuncias.</li>
                            <li><strong>Evidencias:</strong> Fotografías subidas voluntariamente para respaldar los reportes.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>2. Uso de la Información</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Utilizamos su información exclusivamente para:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.7', color: '#475569' }}>
                            <li>Procesar y gestionar sus denuncias ciudadanas.</li>
                            <li>Notificarle sobre el estado y resolución de sus reportes.</li>
                            <li>Generar estadísticas anónimas para mejorar los servicios públicos.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>3. Protección de Datos</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. No compartimos su información personal con terceros con fines comerciales.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>4. Sus Derechos</h2>
                        <p style={{ lineHeight: '1.7', color: '#475569' }}>
                            Usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales. Puede ejercer estos derechos a través de su perfil de usuario o contactándonos directamente.
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

export default PrivacyPolicyPage;
