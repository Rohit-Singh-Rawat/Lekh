import mongoose, { Schema } from 'mongoose';

interface FolderDocument extends mongoose.Document {
	workspaceId: mongoose.Schema.Types.ObjectId;
	title: string;
	data: string;
	banner_url: string;
	in_trash: string;
	icon_id: string;
}

export const FolderSchema: mongoose.Schema<FolderDocument> = new Schema(
	{
		workspaceId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'workspace',
		},
		title: { type: String, required: true },
		data: String,
		banner_url: String,
		in_trash: String,
		icon_id: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Folder = mongoose.model<FolderDocument>('Folder', FolderSchema);
export default Folder;
