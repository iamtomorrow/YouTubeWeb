
import "./SidebarOption.css"

interface Props {
    title: string 
    href: string
    icon: any
}

export const SidebarOption = ({ title, href, icon }: Props) => {

    return (
        <a
        href={ href }
        className="yt-sidebar-option--container"
        style={{
            // backgroundColor: "red"
        }}>
            <div
            style={{
                width: 60,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                { icon }
            </div>

            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                // backgroundColor: "blue",
                paddingLeft: 10,
            }}>
                <p
                style={{
                    fontSize: 13,
                    fontWeight: "600"
                }}>{ title }</p>
            </div>
        </a>
    )
}