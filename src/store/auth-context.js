import React, { useState, useEffect } from "react";

// Authcontext here is not directly a componenet, but an
//  object that contains a components
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

/*
    We can also manage the isLoggedIn state from 
    this auth context file, 
*/
const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

    const logoutHandler = () =>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler =() =>{
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }
  return <AuthContext.Provider> {props.children} </AuthContext.Provider>;
};
/*
 We will now need to import this context object and wrap it around all the most 
 top level components we wish to use it in 
*/
export default AuthContext;
