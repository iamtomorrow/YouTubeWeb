"use client";

import { useVideosContext } from "@/contexts/VideosContext"
import { VideoCard } from "../VideoCard/VideoCard";
import { useEffect, useState } from "react";
import { VideoCardProps } from "@/types/Video";

const API_KEY = "AIzaSyALCb09HUmzFXF1qwPvyLv_DoyxWh7pDX0";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const VideoGrid = ( ) => {
    const { videos } = useVideosContext( );
    // const [ videos, setVideos ] = useState<VideoCardProps[]>([]);

    return (
        <div
        style={{
            width: "100%",
            height: "auto",
            // backgroundColor: "red"
        }}>
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
                {
                    videos ?
                    videos.map((item) => (
                        <VideoCard 
                            title={ item.title }
                            channelTitle={ item.channel.name }
                        />
                    ))
                    : <p>No videos found</p>
                }
            </div>
        </div>
    )
}