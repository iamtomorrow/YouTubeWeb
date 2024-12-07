"use client";

import { ChildrenProps } from "@/types/Types";
import { VideoCardProps } from "@/types/Video";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface VideosContextProps {
    videos: VideoCardProps[]
}

const VideosContextInitialState: VideosContextProps = {
    videos:  []
}

export const VideosContext = createContext<VideosContextProps | null>(null);

export const VideosContextProvider = ({ children }: ChildrenProps) => {
    const [ videos, setVideos ] = useState<VideoCardProps[]>([ ]);

    useEffect(( ) => {
        updateVideos( );
    }, [ ]);

    const updateVideos = async ( ) => {
        const data = await fetch("/api/videos");
        console.log("DATA: ", data);
    }

    return (
        <VideosContext.Provider value={{
            videos
        }}>
            { children }
        </VideosContext.Provider>
    )
}

export const useVideosContext = ( ) => {
    return useContext( VideosContext );
}