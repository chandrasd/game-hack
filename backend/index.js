const express = require("express");
const app = express();
const dbConnect = require("./connectMongoDB");
const User = require("./userTable");

dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/register", (request, response) => {
  const user = new User({
    username: request.body.username,
    score: request.body.score || 0,
  });
  response.json(user);

  User.findOne({ username: request.body.username })
    .then((result) => {
      if (result) {
        console.log("already registered");
        return response.status(200).send({
          message: "old user",
        });
      } else {
        console.log("New user");
        //console.log(user);
        user
          .save()
          .then((savedUser) => {
            response.status(200).send({
              message: "New user saved to MongoDB",
            });
          })
          .catch((e) => {
            response.status(404).send({
              message: "New user was not saved",
            });
          });
      }
    })
    .catch((error) => {
      response.status(404).send({
        message: "Can not register",
        error,
      });
    });
});

app.get("/api/leaderboard", (request, response) => {
  let arr = [];
  User.find({})
    .then((result) => {
      result.forEach((note) => {
        arr.push(note);
      });
    })
    .then(() => {
      arr.sort(function (a, b) {
        return a.score - b.score;
      });
      arr.reverse();
      console.log(arr);
      response.send(arr.slice(0,9));
    });
 

});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
