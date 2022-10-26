import React, { useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true)

  const userLoginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
    setLoading(true)
  };

  const userLoginWithGithub = (provider) => {
    return signInWithPopup(auth, provider);
    setLoading(true)
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true)
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true)
  };

  const updateUserInfo = (profile)=>{
    return updateProfile(auth.currentUser, profile)
  }

  const userLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    userLoginWithGoogle,
    userLoginWithGithub,
    userLogout,
    createUser,
    userLogin,
    updateUserInfo,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
