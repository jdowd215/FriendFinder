var friends = require("../data/friends.js");

// API GET Requests
module.exports = function(app){

// Displays all friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
  });

// API POST Requests
  // Object to hold the best match
   app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            matchDiff: 1000
        };

        // take result of user's survey and parse it
        var userData = req.body;
        var userScores = userData.scores;

        // calculate difference between user scores and scores of friends already in database
        var totalDiff = 0;

        // loop thru potential friends in database
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDiff = 0;
        

        // loop thru the scores of each friend
        for (var j = 0; j < friends[i].scores[j]; j++) {
            
            // calculate the difference between scores
            totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            //if sum of difference is less than differences of current best match
            if (totalDiff <= bestMatch.matchDiff) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.matchDiff = totalDiff;
            }
        }
    }
    
    // save user's data to database
    friends.push(userData);

    // return JSON with user's best match
    res.json(bestMatch);

    })
};    


