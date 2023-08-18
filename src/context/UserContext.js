import React from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ name: '', token: ' ', auth: false });


    const login = (name, token) => {
        setUser((user) => ({
            name: name,
            token: token,
            auth: true,
        }));
        localStorage.setItem('token', token);
        localStorage.setItem('name', name);
    };



    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');

        setUser((user) => ({
            name: '',
            token: '',
            auth: false,
        }));
    };



    return (
        <UserContext.Provider value={ { user, login, logout } }>
            { children }
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };