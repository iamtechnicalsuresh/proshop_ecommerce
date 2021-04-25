import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(
      `Database Connected Successfully on ${conn.connection.host}`.yellow
        .underline.bold
    );
  } catch (error) {
    console.log(
      `Database not connectes Successfully due to ${error}`.black.underline
        .bgRed
    );
  }
};

export default connectDB;
