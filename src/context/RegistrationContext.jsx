import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const registerStudent = (form) => {
    setRegisteredCourses((prev) => [...prev, form]);
  };


  
  const unregisterStudent = (indexToRemove) => {
    setRegisteredCourses((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };


      return (
    <RegistrationContext.Provider
      value={{ registeredCourses, registerStudent, unregisterStudent }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
