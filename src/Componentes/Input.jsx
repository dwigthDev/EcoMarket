export function Input({ titulo, type, value, onChange }) {
    return (
        <div className="mb-4">
            <div className="d-flex">
                <label className="block">{titulo}:</label>
            </div>
            <input
                type={type}
                id={titulo}
                value={value}
                onChange={onChange}
                className="form-control d-block"
            />
        </div>
    );
}
export default Input