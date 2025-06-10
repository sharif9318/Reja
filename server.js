const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://sharifdilmuratovich:c7wL2zBnVDrKrHid@cluster0.aoxyoqf.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.MongoClient.connect(connectionString, (err, client) => {
  if (err) {
    console.log("ERROR on connection MongoDB");
  } else {
    console.log("MongoDB connection succeed");

    module.exports.db = () => client.db("Reja");
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
      console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
      );
    });
  }
});
