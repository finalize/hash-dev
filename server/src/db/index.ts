import { connect } from "mongoose";

const server = "127.0.0.1:27017";
const database = "hash";

class HashDB {
  constructor() {
    this._connect();
  }

  _connect() {
    connect(
      `mongodb://${server}/${database}`,
      { useNewUrlParser: true }
    )
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err: any) => {
        console.error("Database connection error");
      });
  }
}

export default new HashDB();
