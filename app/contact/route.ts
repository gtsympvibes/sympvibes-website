import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.redirect(`mailto:gtsympvibes@gmail.com`);
}
