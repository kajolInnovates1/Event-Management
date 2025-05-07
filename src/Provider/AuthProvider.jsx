import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
        logout

    }
    return <AuthContext value={authData}>
        {
            children
        }
    </AuthContext>
};

export default AuthProvider;