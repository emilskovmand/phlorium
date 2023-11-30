import mongoose, { ConnectOptions } from "mongoose";

mongoose.set("debug", process.env.NODE_ENV !== "production");

mongoose.set("autoIndex", true);

mongoose.set("maxTimeMS", 10000);

let connection: typeof import("mongoose") | undefined;

async function disconnect() {
  console.log("Close mongodb connection");

  await connection?.disconnect();

  connection = undefined;
}

async function connect(cb?: () => Promise<void>) {
  // Hvis der ikke er en connection, så set Timeout til 20 sekunder
  if (connection == null) {
    const options: ConnectOptions = {
      serverSelectionTimeoutMS: 2000,
    };

    // Pass vores Environment variabel
    let uri = process.env.MONGODB_URI as string;

    // Hvis der ikke er en URI, så kast en fejl
    if (!uri) {
      throw "DB_URI is not configured";
    }

    // Hvis der er en URI, så log den
    process.env.LOG && console.log("connection to", uri);

    // Forbind til vores database
    connection = await mongoose.connect(uri, options);

    console.log("Connected to MongoDB!");

    // Hvis der er en callback, så kør den
    if (cb) await cb();
  }

  return connection;
}

export { connect, disconnect };
