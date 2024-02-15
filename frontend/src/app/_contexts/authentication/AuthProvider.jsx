"use client";
import { getCookie } from "cookies-next";
/**
 * Basic authentication using cookie session data
 * Works by decrypting cookie and using permission level
 * Use the AuthenticationProviderContext to render conditionals
 */
import { AuthenticationProviderContext } from "./AuthenticationContext";

/**
 * Use as a wrapper for children components in a Layout.jsxz
 * ie.
 * <AuthenticationProvider>
 *      {children}
 * </AuthenticationProvider>
 * @param {childrenObj} childrenObj
 */
export default function AuthenticationProvider({ children }) {
    const permissions = getCookie("permissions");

    return (
        <AuthenticationProviderContext.Provider value={{permissions}}>
            {children}
        </AuthenticationProviderContext.Provider>
    );
}
