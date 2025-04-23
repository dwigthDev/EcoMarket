
import Populares from '../Componentes/Inicio/Populares.jsx';
import Header from '../Componentes/Inicio/Header.jsx';
import Opiniones from '../Componentes/Inicio/Opiniones.jsx';
import Mapa from '../Componentes/Inicio/Mapa.jsx';

export function Inicio() {
    return (
        <div className="container text-center py-5">
            <Header></Header>
            <Populares></Populares>
            <Opiniones></Opiniones>
            <Mapa></Mapa>
        </div>
    );
}
export default Inicio
