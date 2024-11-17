"use client";

import { ChildrenProps } from "@/types/Types";
import { VideoCardProps } from "@/types/Video";
import { createContext, useContext, useEffect, useState } from "react";

interface VideosContextProps {
    videos: VideoCardProps[]

    updateVideos: ( ) => void
}

const VideosContextInitialState: VideosContextProps = {
    videos: [],
    updateVideos: ( ) => { }
}

export const VideosContext = createContext<VideosContextProps>(VideosContextInitialState);

export const VideosContextProvider = ({ children }: ChildrenProps) => {
    const [ videos, setVideos ] = useState<VideoCardProps[]>([]);

    const updateVideos = async ( ) => {
        const response = await fetch("/api/api?query=${Avicii}");
        const data = await response.json();
        console.log("DATA: ", data);
        setVideos( prev => data as VideoCardProps[] );
    }

    useEffect(( ) => {
        updateVideos( );
        console.log("...");
    }, [ ])

    return (
        <VideosContext.Provider value={{
            videos,
            updateVideos
        }}>
            { children }
        </VideosContext.Provider>
    )
}

export const useVideosContext = ( ) => {
    return useContext( VideosContext );
}