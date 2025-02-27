const express = require("express");
const app = express();
const config = require("config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { logger } = require("./lib/utils");
const db = config.get("db_conf");
const cors = require("cors");

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use("/doc", express.static("doc"));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(db.port, function (err, res) {
  logger.info(`Application is runnig on PORT = ${process.env.PORT || db.port}`);
});

// let mongoURL = 'mongodb://' + db.host + ':' + db.mongo_port + '/' + db.default_database
let mongoURL =
  "mongodb+srv://parthlakhanii:parthlakhani@cluster0.9smulwl.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = async () => {
  console.log("in connect");
  await mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        logger.info("Successfully connected to Mongodb");
      },
      (err) => {
        console.error(err);
        throw err;
      }
    );
};

dbConnect();

require("./routes")(app);

module.exports = app;
