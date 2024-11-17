
import Background from "../../assets/background.jpg";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { VideoGrid } from "@/components/VideoGrid/VideoGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div
    style={{
      width: "100%",
      height: "100%",
    }}>
      <Header /> 

      <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.025)"
      }}>
        <Sidebar />

        <VideoGrid />
      </div>
    </div>
  );
}
