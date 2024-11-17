"use client";

import "./Sidebar.css"

import MenuFillIcon from "remixicon-react/MenuFillIcon"
import HomeLineIcon from "remixicon-react/Home2LineIcon"
import CompassLineIcon from "remixicon-react/Compass3LineIcon"
import SubscriptionsOutlined from "@mui/icons-material/SubscriptionsOutlined";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon"
import PlaylistPlayOutlined from "@mui/icons-material/PlaylistPlayOutlined"
import VideoLineIcon from "remixicon-react/VideoLineIcon"
import LightBulbLineIcon from "remixicon-react/LightbulbFillIcon"
import TimeLineIcon from "remixicon-react/TimeLineIcon"
import ThumbUpLineIcon from "remixicon-react/ThumbUpLineIcon"
import ScissorLineIcon from "remixicon-react/ScissorsLineIcon"
import { WhatshotSharp } from "@mui/icons-material";
import { MusicNoteSharp } from "@mui/icons-material";
import { MovieSharp } from "@mui/icons-material";
import { OnlinePredictionSharp } from "@mui/icons-material";
import { VideogameAssetSharp } from "@mui/icons-material";
import { NewspaperSharp } from "@mui/icons-material";
import { EmojiEventsSharp } from "@mui/icons-material";
import { PodcastsSharp } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { FlagOutlined } from "@mui/icons-material";
import { HelpOutline } from "@mui/icons-material";
import FeedbackIcon from "remixicon-react/FeedbackLineIcon"

import { SidebarOption } from "../SidebarOption/SidebarOption";
import { useSidebarContext } from "@/contexts/SidebarContext";
import { SidebarChannelItem } from "../SidebarChannelItem/SidebarChannelItem";

export const Sidebar = ( ) => {
    const { toggled, updateToggle } = useSidebarContext( );

    return (
        <div
        className={`${ toggled ? "yt-sidebar--container" : "yt-sidebar--container--off"}`}
        style={{

        }}>
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div
                style={{
                    width: "100%",
                    height: 80,
                }}>
                    <div
                    style={{
                        width: 50,
                        height: "100%",
                        // backgroundColor: "yellow",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <button
                        onClick={ updateToggle }
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            // backgroundColor: "blue"
                        }}>
                            <MenuFillIcon 
                                size={20}
                                color="#000000"
                            />
                        </button>
                    </div>
                </div>

                <div
                className="yt-sidebar-section--container">
                    <SidebarOption 
                        icon={ <HomeLineIcon size={20} /> }
                        title="Home"
                        href="/"
                    />

                    <SidebarOption 
                        icon={ <SubscriptionsOutlined style={{ fontSize: 20 }} />  }
                        title="Subscriptions"
                        href="/subscriptions"
                    />

                    <SidebarOption 
                        icon={ <CompassLineIcon style={{ fontSize: 20 }} />  }
                        title="Explore"
                        href="/explore"
                    />
                </div>

                <div
                className="yt-bar-line--container">

                </div>

                <div
                className="yt-sidebar-section--container">
                    <SidebarOption 
                        icon={ <HistoryLineIcon size={20} /> }
                        title="History"
                        href="/history"
                    />

                    <SidebarOption 
                        icon={ <PlaylistPlayOutlined style={{ fontSize: 20 }} /> }
                        title="Playlists"
                        href="/playlists"
                    />

                    <SidebarOption 
                        icon={ <VideoLineIcon size={20} /> }
                        title="Your videos"
                        href="yourvideos"
                    />

                    <SidebarOption 
                        icon={ <LightBulbLineIcon size={20} /> }
                        title="Your courses"
                        href="/courses"
                    />

                    <SidebarOption 
                        icon={ <TimeLineIcon size={20} /> }
                        title="Watch later"
                        href="/watchlater"
                    />

                    <SidebarOption 
                        icon={ <ThumbUpLineIcon size={20} /> }
                        title="Liked videos"
                        href="/likedvideos"
                    />

                    <SidebarOption 
                        icon={ <ScissorLineIcon size={20} /> }
                        title="Your clips"
                        href="/yourclips"
                    />
                </div>

                <div
                className="yt-bar-line--container">

                </div>

                <div
                className="yt-sidebar-section--container">
                    <div
                    style={{
                        width: "100%",
                        height: 30,
                        paddingLeft: 10,
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <h1
                        style={{
                            fontSize: 13,
                            fontWeight: "bold"
                        }}>Subscriptions</h1>
                    </div>

                    <SidebarChannelItem
                        title="Avicii"
                    />

                    <SidebarChannelItem
                        title="Veritassium"
                    />

                    <SidebarChannelItem
                        title="ScienceClic"
                    />

                    <SidebarChannelItem
                        title="Vsauce"
                    />
                </div>

                <div
                className="yt-bar-line--container">

                </div>

                <div
                className="yt-sidebar-section--container">
                    <div
                    style={{
                        width: "100%",
                        height: 30,
                        paddingLeft: 10,
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <h1
                        style={{
                            fontSize: 13,
                            fontWeight: "bold"
                        }}>Explore</h1>
                    </div>

                    <SidebarOption 
                        icon={ <WhatshotSharp style={{ fontSize:20  }} /> }
                        title="Trending"
                        href="/trendind"
                    />

                    <SidebarOption 
                        icon={ <MusicNoteSharp style={{ fontSize:20  }} /> }
                        title="Music"
                        href="/music"
                    />

                    <SidebarOption 
                        icon={ <MovieSharp style={{ fontSize:20  }} /> }
                        title="Movies"
                        href="/movies"
                    />

                    <SidebarOption 
                        icon={ <OnlinePredictionSharp style={{ fontSize:20  }} /> }
                        title="Live"
                        href="/live"
                    />

                    <SidebarOption 
                        icon={ <VideogameAssetSharp style={{ fontSize:20  }} /> }
                        title="Gaming"
                        href="/gaming"
                    />

                    <SidebarOption 
                        icon={ <NewspaperSharp style={{ fontSize:20  }} /> }
                        title="News"
                        href="/news"
                    />

                    <SidebarOption 
                        icon={ <EmojiEventsSharp style={{ fontSize:20  }} /> }
                        title="Sports"
                        href="/sports"
                    />

                    <SidebarOption 
                        icon={ <PodcastsSharp style={{ fontSize:20  }} /> }
                        title="Podcasts"
                        href="/podcasts"
                    />
                </div>

                <div
                className="yt-bar-line--container">

                </div>

                <div
                className="yt-sidebar-section--container">
                    <SidebarOption 
                        icon={ <SettingsOutlined style={{ fontSize: 20 }} /> }
                        title="Settings"
                        href="/"
                    />

                    <SidebarOption 
                        icon={ <FlagOutlined style={{ fontSize: 20 }} />  }
                        title="Reports"
                        href="/reports"
                    />

                    <SidebarOption 
                        icon={ <HelpOutline style={{ fontSize: 20 }} />  }
                        title="Help"
                        href="/help"
                    />

                    <SidebarOption 
                        icon={ <FeedbackIcon size={20} /> }
                        title="Send feedback"
                        href="/sendfeedback"
                    />
                </div>
            </div>
        </div>
    )
}