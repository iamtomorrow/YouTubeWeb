
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyALCb09HUmzFXF1qwPvyLv_DoyxWh7pDX0";


export async function GET( req: NextRequest ) {
    const response = await fetch(`http://localhost:3200/videos`);
    const data = await response.json( );

    return NextResponse.json(data);
}
