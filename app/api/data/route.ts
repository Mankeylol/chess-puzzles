import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const fid = searchParams.get("fid");

    if (!fid) {
      return NextResponse.json({ error: "Missing fid" }, { status: 400 });
    }

    const userScore = await prisma.userScore.findUnique({ where: { fid } });

    return NextResponse.json({
      fid,
      score: userScore ? userScore.score : 0,
    });
  } catch (error) {
    console.error("Error fetching user score:", error);
    return NextResponse.json({ error: "Failed to fetch user score" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { fid, scoreToAdd } = await req.json();

    if (!fid || typeof scoreToAdd !== "number") {
      return NextResponse.json(
        { error: "Missing fid or scoreToAdd" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.userScore.findUnique({
      where: { fid },
    });

    // ✅ Use Prisma's upsert API properly
    const updatedUser = await prisma.userScore.upsert({
      where: { fid },
      update: {
        score: { increment: scoreToAdd }, // ✅ Prisma's way to $inc
        highScore: {
          set: scoreToAdd > (existingUser?.highScore ?? 0)
            ? scoreToAdd
            : undefined,
        },
      },
      
      create: {
        fid,
        score: scoreToAdd,
        highScore: scoreToAdd,
      },
    });

    return NextResponse.json({
      success: true,
      fid,
      totalScore: updatedUser.score,
      highScore: updatedUser.highScore,
        });
  } catch (error) {
    console.error("Error updating user score:", error);
    return NextResponse.json(
      { error: "Failed to update user score" },
      { status: 500 }
    );
  }
}

