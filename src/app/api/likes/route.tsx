import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const GetLikesFromPG = async () => {
  const users = await prisma.likes.findFirst();
  console.log(users);
  return { props: { users } };
};

export async function GET() {
  const data = await GetLikesFromPG();
  
  return NextResponse.json({ likes: data.props.users?.likes });
}

export async function POST(req: NextRequest) {
  const data = await GetLikesFromPG();
  console.log(req.cookies.getAll());
  await prisma.likes.update({
    where: {
      id: 1,
    },
    data: {
      likes: Number(data.props.users?.likes) + 1,
    },
  });
  return NextResponse.json("success");
}
