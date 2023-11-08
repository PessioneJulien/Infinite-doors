import { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext({
    user: null,
    setUser: () => { },
    admin: false,
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user && user.emailVerified) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        // Clean up: unsubscribe from the event when no longer needed
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
