import express, { Application } from 'express';
import connection from "./utils/connection";
import logger from "./utils/logger";
import config from "./config";
import cors from "cors";

import volunteerController from './routes/volunteerPOST';
// import reviewController from '../routes/review';
// import messageController from '../routes/message';
// import profileController from '../routes/profile';
// import rentalUnitController from '../routes/rentalUnit';
// import maintenanceController from '../routes/maintenance';

const PORT:number = config.PORT;
const app:Application = express();

app.use(express.json());

// origin = the domains you are allowing to communicate with.
app.use(cors({
    origin: ["http://localhost:3000", "*"],
}));

app.get('/', function (req, res) {
  res.send('Hello Worlds')
})


app.use('/volunteer', volunteerController);
// app.use('/rentals', rentalController);
// app.use('/profile', profileController);
// app.use('/message', messageController);
// app.use('/rentalUnit', rentalUnitController);
// app.use('/maintenance', maintenanceController);

app.listen(PORT || 5000, async () => {
    logger.info(`backend is running on Port : ${PORT}`);
    await connection();
});