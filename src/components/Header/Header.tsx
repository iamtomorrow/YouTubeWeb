"use client";

import "./Header.css"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import MenuFillIcon from "remixicon-react/MenuFillIcon"
import SearchLineIcon from "remixicon-react/SearchLineIcon"
import Mic2FillIcon from "remixicon-react/Mic2FillIcon"
import CloneLineIcon from "remixicon-react/CloseLineIcon"
import VideoAddLine from "remixicon-react/VideoAddLineIcon"
import NotificationLineIcon from "remixicon-react/Notification2LineIcon"
import { useSidebarContext } from "@/contexts/SidebarContext";

export const Header = ( ) => {
    const [ query, setQuery ] = useState<string>("");

    const { toggled, updateToggle } = useSidebarContext( );

    return (
        <div
        style={{
            width: "100%",
            height: 70,
            // backgroundColor: "#000000"
        }}>
            <header
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div
                style={{
                    width: "auto",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    // backgroundColor: "red"
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

                    <div
                    style={{
                        width: 110,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Image 
                            src={"https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"}
                            alt="Logo"
                            width={1000}
                            height={1000}
                            style={{
                                width: 80,
                            }}
                        />
                    </div>
                </div>

                <nav
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div
                    style={{
                        maxWidth: "80%",
                        minWidth: "60%",
                        height: 34,
                        // backgroundColor: "red",
                        borderRadius: 20,
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        {   
                            <div
                            style={{
                                width: 40,
                                height: 34,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <SearchLineIcon 
                                    size={16}
                                    color="#000000"
                                />
                            </div>
                        }
                        <input 
                            onChange={ ( e ) => setQuery(e.target.value ) }
                            placeholder="Search..."
                            type="text"
                            value={ query }
                            style={{
                                paddingLeft: 10,
                                fontSize: 13,
                                background: "none",
                                width: "100%",
                                height: "100%",
                                border: "none",
                                outline: "none",
                                fontWeight: "600"
                            }}
                        />

                        {
                            query !== "" &&
                            <button
                            onClick={ ( ) => setQuery("") }
                            style={{
                                width: 34,
                                height: 34,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                // backgroundColor: "red"
                            }}>
                                <CloneLineIcon 
                                    size={20}
                                    color="#000000"
                                />
                            </button>
                        }

                        <button
                        style={{
                            minWidth: 50,
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <SearchLineIcon 
                                size={20}
                                color="#000000"
                            />
                        </button>
                    </div>

                    <button
                    style={{
                        minWidth: 34,
                        height: 34,
                        borderRadius: 20,
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 10,
                    }}>
                        <Mic2FillIcon 
                            size={20}
                            color="#000000"
                        />
                    </button>
                </nav>

                <div
                style={{
                    width: "auto",
                    paddingRight: 20,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>
                    <button
                    style={{
                        minWidth: 34,
                        height: 34,
                        borderRadius: 20,
                        // backgroundColor: "rgba(0, 0, 0, 0.1)",
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 5,
                        marginRight: 5
                    }}>
                        <VideoAddLine 
                            size={20}
                            color="#000000"
                        />
                    </button>

                    <button
                    style={{
                        minWidth: 34,
                        height: 34,
                        borderRadius: 20,
                        // backgroundColor: "rgba(0, 0, 0, 0.1)",
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 5,
                        marginRight: 5
                    }}>
                        <NotificationLineIcon 
                            size={20}
                            color="#000000"
                        />
                    </button>

                    <div
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: 17,
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        marginLeft: 5,
                        marginRight: 5
                    }}>

                    </div>
                </div>
            </header>
        </div>
    )
}