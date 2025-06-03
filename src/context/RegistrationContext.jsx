import React, { createContext, useState } from "react";

// Skapa context
export const RegistrationContext = createContext();

// Provider-komponent
export const RegistrationProvider = ({ children }) => {
  const [registrations, setRegistrations] = useState([]);

  const registerStudent = (newRegistration) => {
    setRegistrations((prev) => [...prev, newRegistration]);
  };

  return (
    <RegistrationContext.Provider value={{ registrations, registerStudent }}>
      {children}
    </RegistrationContext.Provider>
  );
};
