import express from 'express';
import 'dotenv/config';
import connectDB from './db';
import app from './app';

connectDB()
	.then(() => {
		app.listen(process.env.PORT || 3000, () => {
			console.log(`Server is running at port : ${process.env.PORT}`);
		});
	})
	.catch((error: Error) => {
		console.error(error);
	});
