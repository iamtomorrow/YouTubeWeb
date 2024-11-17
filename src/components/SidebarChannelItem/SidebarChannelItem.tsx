
interface Props {
    title: string
}

export const SidebarChannelItem = ({ title }: Props) => {

    return (
        <div
        style={{
            width: "90%",
            height: 50,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <div
            style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                backgroundColor: "rgba(0, 0, 0, 0.05)"
            }}>

            </div>

            <div
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                paddingLeft: 20,
            }}>
                <p
                style={{
                    fontSize: 13,
                    fontWeight: 600
                }}>{ title }</p>
            </div>
        </div>
    )
}