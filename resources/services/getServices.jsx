import imagenes from "../data/imagenes.json"


export const getServices = async () => {
    const response = await fetch('/api/icons');
    const data = await response.json();
    return data;
};

export const getImages = () => {
    return imagenes;
};