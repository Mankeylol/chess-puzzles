import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongo"; // your dbConnect file
import UserScore from "@/app/models/UserScore";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const fid = searchParams.get("fid");

    if (!fid) {
      return NextResponse.json({ error: "Missing fid" }, { status: 400 });
    }

    const userScore = await UserScore.findOne({ fid });

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
    await dbConnect();
    const { fid, scoreToAdd } = await req.json();

    if (!fid || typeof scoreToAdd !== "number") {
      return NextResponse.json({ error: "Missing fid or scoreToAdd" }, { status: 400 });
    }

    // Find existing user or create new one
    const updatedUser = await UserScore.findOneAndUpdate(
      { fid },
      { $inc: { score: scoreToAdd } }, // increment score
      { upsert: true, new: true } // create if doesn't exist, return updated doc
    );

    return NextResponse.json({
      success: true,
      fid,
      totalScore: updatedUser.score,
    });
  } catch (error) {
    console.error("Error updating user score:", error);
    return NextResponse.json({ error: "Failed to update user score" }, { status: 500 });
  }
}
