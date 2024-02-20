// ToggleMenuContext.js
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const ToggleMenuContext = createContext();

// Proveedor de contexto
export const ToggleMenuProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ToggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useToggleMenu = () => useContext(ToggleMenuContext);
