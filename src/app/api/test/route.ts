import { NextRequest, NextResponse } from "next/server";

const products = [
    "fsf", "vdfv", "ssdv"
]

export async function GET( req: NextRequest, ) {

    if ( !products ) {
        return NextResponse.json({ error: "Product code have not match product."}, { status: 404 });
    }
    return NextResponse.json( products );
}