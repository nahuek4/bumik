import datos from "../data/data.json"

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


export const getDesplegable = () => {
    return datos;
};