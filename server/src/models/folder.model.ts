import mongoose, { Schema } from 'mongoose';

export interface FolderDocument extends mongoose.Document {
	title: string;
	data: string;
	banner_url: string;
	in_trash: string;
	icon_id: string;
}

export const FolderSchema: mongoose.Schema<FolderDocument> = new Schema(
	{
		
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
