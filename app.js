require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cacheControl = require("express-cache-controller");

const app = express();

const { CandidateRoutes } = require('./routes');

// Connect To Database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.kDatabasePath + process.env.kDatabaseName, {
	keepAlive: true,
	reconnectTries: Number.MAX_VALUE,
	useNewUrlParser: true,
	useCreateIndex: true, //To remove warning collection.ensureIndex is deprecated
	useFindAndModify: false
});

// On Connection
mongoose.connection.on("connected", () => {
	console.log("Connected to database ");
});

// On Error
mongoose.connection.on("error", err => {
	console.log("Database error: " + err);
});

// cache Middleware
app.use(cacheControl({
	maxAge: 1,
	private: true
})
);

// Morgan Middleware for logging
app.use(morgan("dev"));

// Security helmet
app.use(helmet({
	frameguard: false
})
);

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

// Index Route
app.get("/", (req, res) => {
	res.send("Invalid Endpoint");
});
app.use("/api", CandidateRoutes);


app.get("*", (req, res) => {
	res.send("Invalid Endpoint");
});



let appListenCallBack = async () => {
	try {
		console.log("Server started on port " + process.env.port);
	} catch (error) {
		console.log("Server started on port " + process.env.port + " with error " + error);
	}
};

app.listen(process.env.port, appListenCallBack);
