import express, { Router, Response, Request } from 'express';
import mongoose from 'mongoose';
import logger from "../utils/logger";
import Volunteer from '../models/volunteerApplications';

const router:Router = express.Router();

router.post('/volunteerPost', async (req:Request, res:Response) => {
    // const { userName } = req.body.user;
    try {
        const xxxxxxx = new Volunteer({
            uid: new mongoose.Types.ObjectId(),
            FirstName: "Paul",
            LastName: "Sin",
            Email: "sins0113@gmail.com",
            SchoolName: "Seenca College",
            Graduation: "2021",
            LinkedIn: "linkedinURL",
            Age: "24",
        });
        xxxxxxx.save();
        logger.info("Creating a volunteer post")
        res.sendStatus(200);
    } catch(error) {
        logger.error(error)
        logger.error("Error while adding a volunteer application");
        res.sendStatus(500);
    }
});

export default router;