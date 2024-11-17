"use client";

import { ChildrenProps } from "@/types/Types";
import { createContext, useState } from "react";

interface RouteContextProps {
    currentRoute: string 
    updateRoute: ( route: string ) => void 
}

const RouteContextInitialState: RouteContextProps = {
    currentRoute: "/",
    updateRoute: ( ) => { },
}

const RouteContext = createContext<RouteContextProps>( RouteContextInitialState );

export const RouteContextProvider = ({ children }: ChildrenProps ) => { 
    const [ currentRoute, setCurrentRoute ] = useState("");

    const updateRoute = ( route: string ) => {
        setCurrentRoute( route );
    }

    return (
        <RouteContext.Provider value={{
            currentRoute,
            updateRoute,
        }}>
            { children }
        </RouteContext.Provider>
    )
}