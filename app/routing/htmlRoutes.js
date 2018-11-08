var path = require("path");

module.exports = function(app){

    //HTML Routes
    // 1. Create a GET route for the root path
    // 2. callback function takes in a request and response object from express that we use the response object to send back HTML

app.get("/survey", function(req, res) {
    console.log(res)
    // Use express .sendFile method which takes the path of the file we want to serve to the client
    // The path.join() method joins all given path segments together
    // __dirname returns the path of the current application
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
