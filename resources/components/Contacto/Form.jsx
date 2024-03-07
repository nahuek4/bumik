import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit } = useForm();


    return (
        <div>
            <div className="formContainer">
                <div className="formContain">
                    <form onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}>
                        {/* nombre */}
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" {...register("nombre")} />
                        {/* Apellido */}
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" {...register("apellido")} />
                        {/* Email */}
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="text" {...register("email")} />
                        {/* Telefono */}
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" {...register("telefono")} />
                        {/* Mensaje */}
                        <label htmlFor="mensaje">Mensaje</label>
                        <input type="text" {...register("mensaje")} />
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form