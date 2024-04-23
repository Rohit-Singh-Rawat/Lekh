import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document{
    fullName: string,
    avatarUrl: string,
    email:string,
    password:string,
}

export const UserSchema: mongoose.Schema<UserDocument> = new mongoose.Schema({
	fullName: { type: String, required: true },
	avatarUrl: String,
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User  = mongoose.model<UserDocument>('User', UserSchema)
export default User