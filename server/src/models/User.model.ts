import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
	name: string;
	email: string;
	password: string;
	isDarkMode: boolean;
	profilePicture: string;
	workspaces: mongoose.Schema.Types.ObjectId[];
	createdAt: Date;
	updatedAt?: Date;
}

export const UserSchema: mongoose.Schema<UserDocument> = new mongoose.Schema(
	{
		name: { type: String, required: true },
		isDarkMode: { type: Boolean, default: false },
		profilePicture: String,
		email: { type: String, required: true },
		password: { type: String, required: true },
		workspaces: {
			type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' }],

			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const _preDelete = async function (
	this: UserDocument,
	next: mongoose.CallbackWithoutResultAndOptionalError
) {
	console.log(this);
};
UserSchema.pre<UserDocument>(
	'deleteOne',
	{ document: false, query: true },
	_preDelete
);

const User: mongoose.Model<UserDocument> = mongoose.model<UserDocument>(
	'User',
	UserSchema
);
export default User;
