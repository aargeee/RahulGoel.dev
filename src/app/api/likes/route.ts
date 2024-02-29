import {NextResponse} from "next/server"

var likes = 0;

export function GET() {
    return NextResponse.json({'likes': likes});
}

export function POST() {
    likes++;
    return NextResponse.json("success")
}