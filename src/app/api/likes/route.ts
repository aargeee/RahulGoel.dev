import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

const GetLikesFromPG = async () => {
  const users = await prisma.likes.findFirst();
  console.log(users);
  return { props: { users } };
};

var likes = 0;

export async function GET() {
  const data = await GetLikesFromPG();
  console.log(data);

  return NextResponse.json({ likes: data.props.users?.likes });
}

export async function POST() {
  const data = await GetLikesFromPG();

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
