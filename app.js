const path = require("path");

if (process.env.NODE_ENV === "production") {
	app.use(express.static("frontend/build"));
	app.get("/", (req, res) => {
		res.sendFile(
			path.resolve(__dirname, "frontend", "build", "index.html")
		);
	});
}

const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const port = process.env.PORT || 5000;

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB successfully!"))
	.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.listen(port, () => console.log(`Server is running on port ${port}`));
