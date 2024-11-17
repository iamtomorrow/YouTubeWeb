"use client";

import { ChildrenProps } from "@/types/Types";
import { createContext, useContext, useState } from "react";

interface SidebarContextProps {
    toggled: boolean
    updateToggle: ( ) => void
}

export const SidebarContext = createContext<SidebarContextProps>({ toggled: false, updateToggle: ( ) => { } })

export const SidebarContextProvider = ({ children }: ChildrenProps) => {
    const [ toggled, setToggled ] = useState<boolean>(false);

    const updateToggle = ( ) => {
        setToggled( prev => !prev );
    }

    return (
        <SidebarContext.Provider value={{
            toggled,
            updateToggle
        }}>
            { children }
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = ( ) => {
    return useContext( SidebarContext );
}