
import '../Componentes/Header.jsx'
import Populares from '../Componentes/Populares.jsx';
import Header from '../Componentes/Header.jsx';
export function Inicio() {
    return (
        <div className="container text-center py-5">
            <Header></Header>
            <Populares></Populares>
        </div>
    );
}
export default Inicio
