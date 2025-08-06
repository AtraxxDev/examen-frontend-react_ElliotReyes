import './InputButton.css'
// Componente: InputButton
// Se representa un input de tipo boton 

// Los props utilizados son los siguientes:
// name: el cual hace referencia a un identificador
// labelText: esto es el valor del texto que aparecera
// onClick: activa el evento del boton al interactuar con el
// type: hace referencia al tipo de input que es por defecto se le pone button
export function InputButton({ name, labelText, onClick, type = "button"}) {
    return (
        <input name={name} className="inputButton" type={type} value={labelText} onClick={onClick}/>
    )
}