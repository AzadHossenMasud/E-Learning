import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useContext } from 'react';
import { useState } from 'react';



export const AuthContext= createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)


    const userLoginWithGoogle = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const userLoginWithGithub = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);

        });

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {user, userLoginWithGoogle, userLoginWithGithub}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;