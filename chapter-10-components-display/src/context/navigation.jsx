import { createContext, useEffect, useState } from "react";

const NagivationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NagivationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NagivationContext.Provider>
  );
};

export { NavigationProvider };
export default NagivationContext;
