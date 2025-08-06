import React from 'react'
import './InputText.css'
// Componente: InputText
// Representa un input de tipo texto por defecto que tiene estructura con un placeholder y un icono opcional

// Los props utilizados son los siguientes:
// placeHolder: hace referencia al texto que aparecera pro defecto antes de escribir
// type: hace referencia al tipo de input que es por defecto se le pone text
// name: el cual hace referencia a un identificador

export const InputText = React.forwardRef(({ type = "text", name, placeHolder = 'text', ...rest }, ref) => {
    return (
        <article className='inputText-Box'>
            <span className='inputText-Icon'></span>
            <input ref={ref} className='inputText-placeHolder' type={type} name={name} placeholder={placeHolder} {...rest} />
        </article>
    )
})

InputText.displayName = 'InputText';
