import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUserScore extends Document {
  fid: string; // Farcaster ID
  score: number; // Total score
  highScore: number; // High score
}

const UserScoreSchema = new Schema<IUserScore>(
  {
    fid: { type: String, required: true, unique: true },
    score: { type: Number, required: true, default: 0 },
    highScore: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

// Avoid recompiling the model during hot reloads in dev
const UserScore: Model<IUserScore> =
  mongoose.models.UserScore || mongoose.model<IUserScore>("UserScore", UserScoreSchema);

export default UserScore;
