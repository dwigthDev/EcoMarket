
import Populares from '../Componentes/Inicio/Populares.jsx';
import Header from '../Componentes/Inicio/Header.jsx';
export function Inicio() {
    return (
        <div className="container text-center py-5">
            <Header></Header>
            <Populares></Populares>
        </div>
    );
}
export default Inicio
