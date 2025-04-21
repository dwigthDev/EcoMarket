
import '../Componentes/Header.jsx'
import Header from '../Componentes/Header.jsx';
export function Inicio() {
    return (
        <div className="container text-center py-5">
            <Header></Header>
            <footer className="mt-5 text-muted small">
                &copy; {new Date().getFullYear()} EcoMarket SPA · Todos los derechos reservados
            </footer>
        </div>
    );
}
export default Inicio
