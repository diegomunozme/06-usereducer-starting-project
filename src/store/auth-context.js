import React from "react";

// Authcontext here is not directly a componenet, but an 
//  object that contains a components
const AuthContext = React.createContext({
    isLoggedIn: false
});
/*
 We will now need to import this context object and wrap it around all the most 
 top level components we wish to use it in 
*/
export default AuthContext;