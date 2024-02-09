import React, { createContext, useState } from "react";
import app from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //user crate
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //user login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    user,
    createUser,
    userLogin,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
