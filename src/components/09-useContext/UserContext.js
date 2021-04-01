import { createContext } from "react";

export const UserContext = createContext(null);



//UserContext se utiliza para manejar datos entre componentes

//Cuando context sufre una modificación notifica a todos sus hijos con el respectivo cambio,
//eso va a forzar el redibujo de los componentes que utilizan el context