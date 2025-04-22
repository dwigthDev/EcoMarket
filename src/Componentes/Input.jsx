export function Input({ titulo, type, value, onChange }) {
    return (
        <div className="mb-2">
            <div className="d-flex">
                <label className="block">{titulo}:</label>
            </div>
            <input
                type={type}
                id={titulo}
                value={value}
                onChange={onChange}
                className="form-control d-block"
                placeholder={`Ingresa tu ${titulo}`}
            />
        </div>
    );
}
export default Input