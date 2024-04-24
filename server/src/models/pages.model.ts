import mongoose, { Schema, Document } from 'mongoose';

enum Fonts {
	Default = 'Default',
	Serif = 'serif',
	Mono = 'Mono',
}

export interface PageSettingsType {
	font: Fonts;
	smallText: boolean;
	fullWidth: boolean;
	lock: boolean;
}

export interface ContentType {
	type: string;
	content: unknown[];
}

export interface PageDocument extends Document {
	title: string;
	icon: string;
	coverPicture: string;
	content: ContentType;
	pageSettings: PageSettingsType;
	path: string | null;
	workspaceId: mongoose.Schema.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
	folderId: mongoose.Schema.Types.ObjectId;
}

const PageSettingsSchema: Schema<PageSettingsType> = new Schema({
	font: { type: String, enum: Object.values(Fonts), default: Fonts.Default },
	smallText: { type: Boolean, default: false },
	fullWidth: { type: Boolean, default: false },
	lock: { type: Boolean, default: false },
});

const ContentSchema: Schema<ContentType> = new Schema({
	type: { type: String, required: true },
	content: { type: [mongoose.Schema.Types.Mixed], default: [] },
});

const PageSchema: Schema<PageDocument> = new Schema(
	{
		title: { type: String, default: 'Untitled', required: true },
		icon: { type: String, required: true },
		coverPicture: { type: String, required: true },
		content: ContentSchema,
		pageSettings: PageSettingsSchema,
		path: { type: String },
		workspaceId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Workspace',
		},
		folderId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Folder',
		},
	},
	{
		timestamps: true,
	}
);

const PageModel: mongoose.Model<PageDocument> = mongoose.model<PageDocument>(
	'Page',
	PageSchema
);

export default PageModel;
