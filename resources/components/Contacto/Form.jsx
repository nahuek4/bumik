import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FAQ from './FAQ';
import Lottie from 'lottie-react';
import LottieSuccess from '../../assets/img/lottie/success.json';
import Loader from '../../assets/img/loader.gif';

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [csrfToken, setCsrfToken] = useState('');
    const [showAnimation, setShowAnimation] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const token = document.querySelector('meta[name="csrf-token"]');
        if (token) {
            setCsrfToken(token.getAttribute('content'));
        }
    }, []);

    const onSubmit = async (data) => {
        if (!Object.keys(errors).length) {
            try {
                setIsLoading(true);
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
                setIsLoading(false);
            } catch (error) {
                console.error('Error al enviar la solicitud:', error);
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="fondoLottie">
            <div className='formularioContactoContainer'>
            {!showAnimation && (
                <div className="formContainer">
                    <div className="formContain">
                        <form className="form" id='contactForm' onSubmit={handleSubmit(onSubmit)}>
                            <div className="formNombreApellido">
                                {/* nombre */}
                                <div className="labelNombre">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" {...register("nombre", { required: true })} />
                                    {errors.nombre && <span className="error">Este campo es requerido</span>}
                                </div>
                                {/* Apellido */}
                                <div className="labelApellido">
                                    <label htmlFor="apellido">Apellido</label>
                                    <input type="text" {...register("apellido", { required: true })} />
                                    {errors.apellido && <span className="error">Este campo es requerido</span>}
                                </div>
                            </div>
                            {/* Email */}
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" {...register("email", { required: true })} />
                            {errors.email && <span className="error">Este campo es requerido</span>}
                            {/* Telefono */}
                            <label htmlFor="telefono">Telefono</label>
                            <input type="tel" {...register("telefono", { required: true })} />
                            {errors.telefono && <span className="error">Este campo es requerido</span>}
                            {/* Mensaje */}
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea rows="8" type="text" {...register("mensaje", { required: true })} />
                            {errors.mensaje && <span className="error">Este campo es requerido</span>}
                            <button className='buttonForm' id='buttonForm' disabled={isLoading}>
                                {isLoading ? <img src={Loader} alt="Loading..." /> : 'Enviar'}
                            </button>
                            <input type="hidden" name="_token" value={csrfToken} />
                        </form>
                    </div>
                </div>
            )}
            </div>
            <div className='lottieDiv'>
                {showAnimation && <Lottie animationData={LottieSuccess} loop='false'/>}
            </div>
                {showAnimation && (<p className='pLottie'>Informacion enviada exitosamente!</p>)}
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
