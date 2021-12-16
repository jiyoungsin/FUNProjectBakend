import mongoose from 'mongoose';
import config from "../config";
import logger from "./logger";

const connection = async () => {
    const MONGO_URI:string =  config.db_uri;
    try{
        mongoose.connect(MONGO_URI);
        logger.info('connected to Mongo database')
    }catch(error){
        logger.error('Error occurred connecting to Database.' + error);
        process.exit(1);
    }
    
}

export default connection;
