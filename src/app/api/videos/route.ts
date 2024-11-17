
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = "AIzaSyALCb09HUmzFXF1qwPvyLv_DoyxWh7pDX0";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

interface ParamsProps {
    params: {
        query: string
    }
}

export async function GET( req: NextRequest, res: NextResponse, { params }: ParamsProps ) {
    const { query } = params;
    
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                part: "snippet",
                q: query,
                key: API_KEY,
                maxResults: 8
            },
        });

        return NextResponse.json( response.data );
    } catch(err) {
        console.error(err);
        return NextResponse.json({ error: "ERROR tryiong to fetch data from YouTube V3 API."});
    }
}
