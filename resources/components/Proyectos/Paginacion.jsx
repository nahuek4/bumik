import { parse } from 'postcss';
import React, { useState } from 'react'

const Paginacion = ({ pagina, setPagina, maximo }) => {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(input + 1)
        setPagina(pagina + 1);
    }

    const previousPage = () => {
        setInput(input - 1)
        setPagina(pagina - 1);
    }

    const onKeyDown = e => {
        if (e.keyCode == 13) {
            setPagina(parseInt(e.target.value));
            if (parseInt(e.target.value < 1) || parseInt(e.target.value) > Math.cei(maximo) || isNaN(parseInt(e.targe.value))) {
                setPagina(1);
                setInput(1);
            } else {
                setPagina(parseInt(e.target.value))
            }
        }
    }

    const onChange = e => {
        setInput(e.target.value)
    }

    return (
        <div>
            <div className="paginacionContain">
                <button onClick={previousPage}>-</button>
                <input onChange={(e) => onChange(e)} onKeyDown={(e) => onKeyDown(e)} name='page' autoComplete='off' value={input} />
                <p>de {maximo}</p>
                <button onClick={nextPage}>+</button>
            </div>
        </div>
    )
}

export default Paginacion;