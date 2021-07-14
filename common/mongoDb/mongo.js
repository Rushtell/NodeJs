import mongoose from "mongoose";

export function connectToDb () {
    return mongoose.connect('mongodb://localhost:27017/TestDb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}