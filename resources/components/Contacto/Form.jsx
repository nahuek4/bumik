import React from 'react'
import { useForm } from 'react-hook-form'
import FAQ from './FAQ';

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
                                <label htmlFor="nombre">Nombre <input type="text" {...register("nombre")} /></label>
                            </div>
                            {/* Apellido */}
                            <div className="labelApellido">
                                <label htmlFor="apellido">Apellido <input type="text" {...register("apellido")} /></label>
                            </div>
                        </div>
                        {/* Email */}
                        <label htmlFor="email">Correo electrónico <input type="email" {...register("email")} /></label>
                        {/* Telefono */}
                        <label htmlFor="telefono">Telefono <input type="tel" {...register("telefono")} /></label>
                        {/* Mensaje */}
                        <label htmlFor="mensaje">Mensaje <input type="text" {...register("mensaje")} /></label>
                        <button className='buttonForm'>Enviar</button>
                    </form>
                </div>
            </div>
            <div className="textButton">
                <p>¿Tenes alguna consulta de cómo podrías llevar Tu proyecto adelante?</p>
                <p>Envíanos un mensaje a estudiobumik@gmail.com o completá el formulario</p>
                <p>y te responderemos a la brevedad.</p>
                <div className="botonService">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZL63YOXJUQ2Ee7VYszlfoi8bPjeuZvujjGCmt-j_ewmTi5A/viewform?usp=sf_link" target="_blank" rel="noreferrer"><button className='botonServicios'>¡Cotizá tu proyecto!</button></a>
                </div>
            </div>
            <FAQ />
        </div>
    )
}

export default Form