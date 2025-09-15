import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    try {
    const users = await prisma.userScore.findMany({
        orderBy: { score: "desc" },
        take: 2,
    });
    return NextResponse.json(users);    
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        return NextResponse.json(
            { error: "Failed to fetch leaderboard" },
            { status: 500 }
        );
    }
}
