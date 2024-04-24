import mongoose, { Schema } from 'mongoose';

export interface WorkspaceDocument extends mongoose.Document {
	name: string;
	icon: string;
	members: mongoose.Schema.Types.ObjectId[];
	pages: mongoose.Schema.Types.ObjectId[];
	favourites: mongoose.Schema.Types.ObjectId[];
	createdAt: Date;
	updatedAt?: Date;
}

export const workspaceSchema: mongoose.Schema<WorkspaceDocument> = new Schema(
	{
		name: { type: String, required: true },
		icon: { type: String, required: true },
		members: {
			type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
			required: true,
		},
		pages: {
			type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }],
			required: true,
		},
		favourites: {
			type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
// const _preDelete = async function(this:WorkspaceDocument, next){
// }
// workspaceSchema.pre<WorkspaceDocument>('deleteOne',_preDelete )

const Workspace :mongoose.Model<WorkspaceDocument> = mongoose.model<WorkspaceDocument>(
	'Workspace',
	workspaceSchema
);

export default Workspace;
