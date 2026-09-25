import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signinFn = (email, password) => {
        
        if (email === "starscript@gmail.com" && password === "1234") {
            const loggedInUser = {
                id: 2,
                name: "Test_Acc",
                email: email,
                role: "user"
            };
            setUser(loggedInUser);
            return loggedInUser;
        }

        if (email === "neptune@hotmail.com" && password === "1234") {
            const loggedInUser = {
                id: 3,
                name: "Jack",
                email: email,
                role: "user"
            };
            setUser(loggedInUser);
            return loggedInUser;
        }
        
        if (email === "ahzam003@gmail.com" && password === "1234") {
            const loggedInUser = {
                id: 1,
                name: "Ahzam",
                email: email,
                role: "admin"
            };
            setUser(loggedInUser);
            return loggedInUser;
        }

        return null;
    };

    const signoutFn = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signinFn, signoutFn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;