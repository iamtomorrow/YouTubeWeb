
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyALCb09HUmzFXF1qwPvyLv_DoyxWh7pDX0";

export async function GET( req: NextRequest ) {
    const response = await fetch(`${BASE_URL}/search?part=snippet&maxResults=${5}&q=${"Avicii"}&type=${"snippet"}&key=${API_KEY}`)
    const data = await response.json( );

    return NextResponse.json( data );
} 