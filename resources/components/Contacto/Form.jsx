import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FAQ from './FAQ';
import Lottie from 'lottie-react';
import LottieSuccess from '../../assets/img/lottie/success.json';

const Form = () => {


    const { register, handleSubmit } = useForm();
    const [csrfToken, setCsrfToken] = useState('');
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const token = document.querySelector('meta[name="csrf-token"]');
        if (token) {
            setCsrfToken(token.getAttribute('content'));
        }
    }, []);

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            setShowAnimation(true);
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <div>
            {!showAnimation && (
                <div className="formContainer">
                    <div className="formContain">
                        <form className="form" id='contactForm' onSubmit={handleSubmit(onSubmit)}>
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
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" {...register("email")} />
                            {/* Telefono */}
                            <label htmlFor="telefono">Telefono</label>
                            <input type="tel" {...register("telefono")} />
                            {/* Mensaje */}
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea rows="8" type="text" {...register("mensaje")} />
                            <button className='buttonForm'>Enviar</button>
                            <input type="hidden" name="_token" value={csrfToken} />
                        </form>
                    </div>
                </div>
            )}
            {showAnimation && <Lottie animationData={LottieSuccess} />}
            <div className="textButton">
                <p>¿Tenes alguna consulta de cómo podrías llevar tu proyecto adelante?</p>
                <p>Envíanos un mensaje a <span className='spanRosa'>estudiobumik@gmail.com</span> o completá el formulario</p>
                <p>y te responderemos a la brevedad.</p>
                <div className="botonService">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZL63YOXJUQ2Ee7VYszlfoi8bPjeuZvujjGCmt-j_ewmTi5A/viewform?usp=sf_link" target="_blank" rel="noreferrer"><button className='botonServicios'>¡Cotizá tu proyecto!</button></a>
                </div>
            </div>
            <FAQ />
        </div>
    );
};

export default Form;
