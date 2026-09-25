import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signinFn = (email, password) => {
        
        if (email === "starscript@gmail.com" && password === "1234") {
            setUser({
                id: 2,
                name: "Test_Acc",
                email: email,
                role: "user"
            });
            return true;
        }

        if (email === "neptune@hotmail.com" && password === "1234") {
            setUser({
                id: 3,
                name: "Jack",
                email: email,
                role: "user"
            });
            return true;
        }
        
        if (email === "ahzam003@gmail.com" && password === "1234") {
            setUser({
                id: 1,
                name: "Ahzam",
                email: email,
                role: "admin"
            });
            return true;
        }

        return false;
    };

    return (
        <AuthContext.Provider value={{ user, signinFn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;