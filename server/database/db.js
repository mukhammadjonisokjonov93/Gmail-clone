import mongoose from 'mongoose';


const Connection = () => {
    const DB_URI = `mongodb://isokjonov93:applicant@ac-xvizctk-shard-00-00.q93f6jx.mongodb.net:27017,ac-xvizctk-shard-00-01.q93f6jx.mongodb.net:27017,ac-xvizctk-shard-00-02.q93f6jx.mongodb.net:27017/?ssl=true&replicaSet=atlas-1b8h0p-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default Connection;