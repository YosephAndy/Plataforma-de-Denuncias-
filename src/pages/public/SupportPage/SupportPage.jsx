
import React, { useState } from 'react';
import Header from '../../../components/common/Header/Header';
import { Link } from 'react-router-dom';
import '../../public/LandingPage/LandingPage.css'; // Reutilizar estilos base

const SupportPage = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: 'consulta',
        mensaje: ''
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulación de envío
        console.log('Formulario de soporte enviado:', formData);
        setEnviado(true);
        // Aquí iría la llamada al backend real
    };

    return (
        <div className="landing-page">
            <Header />
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                    <h1 className="section-title">Centro de Soporte</h1>
                    <p className="section-subtitle" style={{ marginLeft: 0 }}>
                        ¿Tienes algún problema o duda? Estamos aquí para ayudarte.
                    </p>
                </div>

                <div className="support-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    {/* Formulario de Contacto */}
                    <div className="contact-form-container">
                        {enviado ? (
                            <div style={{
                                backgroundColor: '#f0fdf4',
                                border: '1px solid #bbf7d0',
                                borderRadius: '0.5rem',
                                padding: '2rem',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                <h3 style={{ color: '#166534', marginBottom: '0.5rem' }}>¡Mensaje Enviado!</h3>
                                <p style={{ color: '#15803d' }}>
                                    Gracias por contactarnos. Nuestro equipo revisará tu caso y te responderá a la brevedad.
                                </p>
                                <button
                                    onClick={() => setEnviado(false)}
                                    className="primary-button"
                                    style={{ marginTop: '1.5rem', width: '100%' }}
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
                                        placeholder="nombre@ejemplo.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="asunto" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Asunto</label>
                                    <select
                                        id="asunto"
                                        name="asunto"
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', backgroundColor: 'white' }}
                                    >
                                        <option value="consulta">Consulta General</option>
                                        <option value="tecnico">Problema Técnico</option>
                                        <option value="denuncia">Problemas con una Denuncia</option>
                                        <option value="cuenta">Problemas con mi Cuenta</option>
                                        <option value="sugerencia">Sugerencia</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Mensaje</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', resize: 'vertical' }}
                                        placeholder="Describe tu problema o consulta con detalle..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="primary-button" style={{ width: '100%' }}>
                                    Enviar Mensaje
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Información de Contacto */}
                    <div className="contact-info">
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#1e293b' }}>Otros Canales de Atención</h3>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>📞 Atención Telefónica</h4>
                            <p style={{ color: '#475569' }}>(01) 234-5678</p>
                            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Lunes a Viernes de 8:00 am a 6:00 pm</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>📍 Oficina Principal</h4>
                            <p style={{ color: '#475569' }}>Av. Principal 123, Centro Cívico</p>
                            <p style={{ color: '#475569' }}>Lima, Perú</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>📧 Correo Directo</h4>
                            <p style={{ color: '#475569' }}>soporte@denunciasciudadanas.gov</p>
                        </div>

                        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f1f5f9', borderRadius: '0.5rem' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>¿Problemas con el inicio de sesión?</h4>
                            <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '1rem' }}>
                                Si has olvidado tu contraseña, puedes recuperarla fácilmente.
                            </p>
                            <Link to="/forgot-password" style={{ color: '#2563eb', fontWeight: '500', textDecoration: 'none' }}>
                                Recuperar Contraseña &rarr;
                            </Link>
                        </div>
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

export default SupportPage;
