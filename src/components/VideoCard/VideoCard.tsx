"use client";

interface VideoCardProps {
    title: string 
    channelTitle: string 
}

export const VideoCard = ({ title }: VideoCardProps) => {
    return (
        <div
        style={{
            width: 260,
            height: 200,
            backgroundColor: "blue"
        }}>
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}>
                <p>{ title }</p>
            </div>
        </div>
    )
}