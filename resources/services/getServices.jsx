import datos from "../data/data.json"
import equipo from "../data/equipo.json"

export const getServices = async () => {
    const response = await fetch('/api/icons');
    const data = await response.json();
    return data;
};

export const getMarcas = async () => {
    const response = await fetch('/api/marcas');
    const data = await response.json();
    return data;
};


export const getProyectos = async () => {
    const response = await fetch('/api/proyectos');
    const data = await response.json();
    return data;
};

export const getDesplegable = () => {
    return datos;
};

export const getEquipo = () => {
    return equipo;
}