import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_DB_URI as string);

    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
