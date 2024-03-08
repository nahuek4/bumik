import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit } = useForm();


    return (
        <div>
            <div className="formContainer">
                <div className="formContain">
                    <form className="form" onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}>
                        <div className="formNombreApellido">
                            {/* nombre */}
                            <div className="labelNombre">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" {...register("nombre")} />
                            </div>
                            {/* Apellido */}
                            <div className="labelApellido">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" {...register("apellido")} />
                            </div>
                        </div>
                        {/* Email */}
                        <div className="formResto">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" {...register("email")} />
                            {/* Telefono */}
                            <label htmlFor="telefono">Telefono</label>
                            <input type="tel" {...register("telefono")} />
                            {/* Mensaje */}
                            <label htmlFor="mensaje">Mensaje</label>
                            <input height="200px" type="text" {...register("mensaje")} />
                            <button className='buttonForm'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form