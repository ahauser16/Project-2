//we took in data on the front end and this is where we're making the comparison.

// LOAD DATA from our friends.js file
const friendData = require("../data/friends");


// ROUTING
module.exports = (app) => {

    // API GET Requests - we take friendData and put it in a JSON package
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    // API POST Requests - we take friendData and create more variables
    app.post("/api/friends", (req, res) => {
        let userScore = req.body.scores; //
        const scoresArr = []; //create a score array where we will be putting in the differences between arrays  
        let bestMatch = 0; //dependent on which person we get back


        for (var i = 0; i < friendData.length; i++) { //(1)loop through the friend data length...
            var scoreDiff = 0; //(2)... creating a score difference
            for (var j = 0; j < userScore.length; j++) { //(3)we loop through the user score and give that a value
                //(4) then we take the score difference and create an array based on the difference between scoreDiff and userScore
                scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScore[j])))
                //math.abs was used to focus solely on the value difference betwen two numbers and not whether a number is pos or neg
            }
            //(5) then we push our scoreDiff onto our scoresArr
            scoresArr.push(scoreDiff);
        }

        //(6)we loop through the scoreArr to find our best match
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        // return the best match
        let soulMate = friendData[bestMatch];
        res.json(soulMate);

        //we push new friend data to the body so when we deploy to Heroku we can add everyone to the database
        friendData.push(req.body)

    });


    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};