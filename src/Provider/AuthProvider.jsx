import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider, sendPasswordResetEmail } from 'firebase/auth/web-extension';
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // console.log(user);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        return signOut(auth);
    }


    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const updatepro = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }



    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        logout,

        resetPass,
        updatepro,
        loading,
        setLoading


    }
    return <AuthContext.Provider value={authData}>
        {
            children
        }
    </AuthContext.Provider>
};

export default AuthProvider;