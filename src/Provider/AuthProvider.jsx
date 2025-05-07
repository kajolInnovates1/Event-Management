import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth/web-extension';
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        return signOut(auth);
    }

    const emailverify = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const updatePro = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
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
        emailverify,
        resetPass,
        updatePro

    }
    return <AuthContext value={authData}>
        {
            children
        }
    </AuthContext>
};

export default AuthProvider;