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
        try {
            const response = await axios.get("http://localhost:3200/videos");
            const data = await response.data( );
    
            console.log("DATA: ", data);
            setVideos( data.data.items as VideoCardProps[] );
        } catch(error) {
            console.log("ERROR: ", error);
            setVideos( prev => [] );
        } finally {
            console.log("Request finished.");
        }
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