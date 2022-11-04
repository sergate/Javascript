/* Importacion de productos desde el local JSON */
const cargarDatos = async () => {
    const url = "./products.json";
    const res = await fetch(url);
    const datos = await res.json();
    console.log(datos);
  };
  cargarDatos();