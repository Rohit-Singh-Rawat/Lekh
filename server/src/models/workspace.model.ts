import mongoose, { Schema } from 'mongoose';

interface WorkspaceDocument extends mongoose.Document {
	workspace_owner: mongoose.Schema.Types.ObjectId;
	title: string;
	data: string;
	banner_url: string;
	in_trash: string;
	icon_id: string;
	logo: string;
    
}

const workspaceSchema: mongoose.Schema<WorkspaceDocument> = new Schema(
	{
		workspace_owner: { type: mongoose.Schema.Types.ObjectId, required: true },
		title: { type: String, required: true },
		data: String,
		banner_url: String,
		in_trash: String,
		icon_id: { type: String, required: true },
		logo: String,
        
	},
	{
		timestamps: true,
	}
);
// const _preDelete = async function(this:WorkspaceDocument, next){
// }
// workspaceSchema.pre<WorkspaceDocument>('deleteOne',_preDelete )

const Workspace = mongoose.model<WorkspaceDocument>('Workspace', workspaceSchema)

export default Workspace