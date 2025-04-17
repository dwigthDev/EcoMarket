import EcoMarketLogo from '../assets/EcoMarket-logo.webp';

export function Inicio() {
    return (
        <div className="container text-center py-5">
            <div className="mb-4">
                <img src={EcoMarketLogo} alt="EcoMarket Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
            </div>

            <h1 className="display-4 fw-bold text-success mb-3">¡Bienvenido a EcoMarket!</h1>
            <p className="lead text-muted mb-4">
                Tu lugar favorito para productos ecológicos, saludables y responsables con el planeta 🌱.
            </p>

            <div className="d-flex justify-content-center gap-3">
                <a href="/login" className="btn btn-success btn-lg">
                    Iniciar Sesión
                </a>
                <a href="/registro" className="btn btn-outline-success btn-lg">
                    Crear Cuenta
                </a>
            </div>

            <footer className="mt-5 text-muted small">
                &copy; {new Date().getFullYear()} EcoMarket SPA · Todos los derechos reservados
            </footer>
        </div>
    );
}
export default Inicio
