import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,    signInWithEmailAndPassword,    signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";

const auth = getAuth(app);

export const  AuthContext = createContext(null) ;

const AuthProvider = ({children}) => {
   
    const [user, setUser] =useState(null) ;

    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
     
    const logOut = () =>{
        return signOut(auth)
    };

    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    };



    useEffect(  ()  =>{
  const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    console.log('User in the auth state change', currentUser)
    setUser(currentUser) ;
   });

   return () =>{
    unsubscribe ;
   }

    }
        ,[])

   const authInfo = {
       user,
       createUser,
       logOut,
       signIn
   }

    return (
        <div>
          <AuthContext.Provider  value={authInfo}>
            {children}
          </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;