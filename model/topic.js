// import neccessry packages
const mongoose = require("mongoose");

// define schema
let topicSchema = mongoose.Schema({
    topics: [
        {
            author: {
                type: String,
                required: true
            },
            created: [
                {
                    title: {
                        type: String,
                        required: true
                    },
                    info: String,
                    date: Date,
                    options: [
                        {
                            item: String,
                            count: Number
                        }
                    ],
                    comments: [
                        {
                            name: {
                                type: String,
                                required: true
                            },
                            said: {
                                type: String,
                                required: true
                            },
                            date: Date
                        }
                    ]
                }
            ]
        }
    ]
});

// define model
let Topic = module.exports = mongoose.model("topics", topicSchema);

// METHODS
// get all topics
module.exports.getAllTopics = (callback) => {
    Topic.find((err, doc) => {
        // handle error
        if(err) {
            return callback("Error occured trying to get all topics");
        }
        // Else doc is avaliable, return doc
        callback(null, doc);
    })
}