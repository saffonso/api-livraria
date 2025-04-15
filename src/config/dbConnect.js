import mongoose, {mongo} from "mongoose";

async function conectanaDB() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);


    return mongoose.connection;

};

export default conectanaDB;