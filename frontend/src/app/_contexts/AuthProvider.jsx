"use client";
/**
 * Basic authentication using cookie session data
 * Works by decrypting cookie and using permission level
 * Use the AuthenticationProviderContext to render conditionals
 */
import { createContext, useState } from "react";

/**
 * AuthenticationProviderContext
 * React global context holding global user values
 */
export const AuthenticationProviderContext = createContext(null);

/**
 * Use as a wrapper for children components in a Layout.jsx
 * ie.
 * <AuthenticationProvider>
 *      {children}
 * </AuthenticationProvider>
 * @param {childrenObj} childrenObj
 */
export default function AuthenticationProvider({ children }) {
    const [user, setUser] = useState({});

    return (
        <AuthenticationProviderContext.Provider value={{ user }}>
            {children}
        </AuthenticationProviderContext.Provider>
    );
}
