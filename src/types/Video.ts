
export interface VideoCardProps {
    key: string,
    id: string,
    title: string,
    channel: {
        name: string,
        id: string,
        profileUrl: string,
    },
    views: number,
    postedAt: string,
    duration: number,
    thumbnailUrl: string,
    videoUrl: string
}