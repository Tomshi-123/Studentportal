import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const registerStudent = (form) => {
    setRegisteredCourses((prev) => [...prev, form]);
  };

  return (
    <RegistrationContext.Provider value={{ registeredCourses, registerStudent }}>
      {children}
    </RegistrationContext.Provider>
  );
};
