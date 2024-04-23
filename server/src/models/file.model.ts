import mongoose, { Schema } from 'mongoose';

export interface FileDocument extends mongoose.Document {
	workspaceId: mongoose.Schema.Types.ObjectId;
	title: string;
	data: string;
	banner_url: string;
	in_trash: string;
	icon_id: string;
	folderId: mongoose.Schema.Types.ObjectId;
}

export const FileSchema: mongoose.Schema<FileDocument> = new Schema(
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
		folderId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'folder',
		},
	},
	{
		timestamps: true,
	}
);

const File = mongoose.model<FileDocument>('File', FileSchema);
export default File;
