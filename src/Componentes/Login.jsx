function Input({ titulo, type }) {
    return (
        <div className="mb-4">
                <div className="d-flex">
                    <label className="block" >{titulo}:</label>
                </div>
                <input type={type} id= {titulo} className="form-control d-block" />
        </div>
        
    );
}

export function Login(){
    return(
        <div className="container">
            <div >
                <h2 className="fw-bold fs-1 m-0">Inicio de Sesion</h2>
                <p>Ingresa con tu correo electronico y contraseña</p>
            </div>
            <div>
                <Input titulo={"Correo"} type={"email"}></Input>
                <Input titulo={"Contraseña"} type={"password"}></Input>

            </div>
        </div>
    );
}