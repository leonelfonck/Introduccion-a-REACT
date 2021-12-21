import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => { //espera 1 segundo antes de ejecutar el efecto
      try {
        const localStorageItem = localStorage.getItem(itemName);  //OBTIENE LO QUE GUARDAMOS EN LOCAL STORAGE
        let parsedItem;  //variable para guardar lo que este en local storage

        if (!localStorageItem) { //SI ES LA PRIMERA VEZ QUE LO USAMOS Y NO HAY NADA
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //ENTONCES GUARDAMOS UN ELEMENTO INICIAL QUE PUEDE SER UN ARREGLO VACIO
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem); //SI YA HAY ALGO EN LOCAL STORAGE TRAEMOS LA INFORMACION HACIENDO UN PARSE
        }

        setItem(parsedItem);  //ponemos en item lo que guardamos
        setLoading(false);  //cambiamos el estado ya no esta cargando
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
