// import neccessry packages
const mongoose = require("mongoose");

// const User = require("./user");

// define schema
let topicSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    topic: [
        {
            title: {
                type: String,
                required: true,
                unique: true
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
                    },
                    said: {
                        type: String,
                    },
                    date: Date
                }
            ]
        }
    ]
});

// define model
let Topic = module.exports = mongoose.model("topic", topicSchema);

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

module.exports.createPoll = (username, topicData, callback) => {
    Topic.findOne({author: username}, (err, doc) => {
        if(err) {
            return callback("An error occurred trying to find username");
        }

        if(doc) {
            let opt = [];
            topicData.options.forEach((item) => {
                opt.push({
                    item: item.trim(),
                    count: 0
                })
            })
            doc.topic.push({
                title: topicData.title,
                info: topicData.info,
                date: topicData.date,
                options: opt
            });
            doc.save((err, doc) => {
                if(err) {
                    return callback("Error modifyng")
                }
                callback(null, "Dat saved");
            })
        }else {
            let opt = [];
            topicData.options.forEach((item) => {
                opt.push({
                    item: item.trim(),
                    count: 0
                })
            });
            newTopic = new Topic({
                author: username,
                topic: [{
                    title: topicData.title,
                    info: topicData.info ? topicData.info : "No info for this topic",
                    date: topicData.date,
                    options: opt,
                    comments: []
                }]
            });
            newTopic.save((err, doc) => {
                if(err) {
                    return callback("Failed to save topic");
                }

                callback(null, "Saved");
            })
        }
    })
}

// get single
module.exports.getSingleTopic = (username, topic, callback) => {
    Topic.findOne({author: username}, (err, doc) => {
        if(err) {
            return callback("Error getting topic");
        }

        if(doc) {
            let found = doc.topic.find((tp) => {
                return tp.title == topic
            });
            callback(null, found);
        }else{
            callback("User not found");
        }
    })
}

// comment
module.exports.onComment = (data, callback) => {
    Topic.findOne({author: data.username}, (err, doc) => {
        if(err) {
            return callback("Error find user");
        }

        if(doc) {
            doc.topic.find((tp) => {
                if(tp.title == data.topic) {
                    tp.comments.push({
                        name: data.name,
                        said: data.comment,
                        date: Date.now()
                    });
                    doc.save((err, doc) => {
                        if(err) {
                            return callback("Error saving comment");
                        }
        
                       return callback(null, tp);
                    })
                }
            });
         
        }else{
            callback("User does'nt exist");
        }
    })
}

// add options
module.exports.onAdd = (data, callback) => {
    Topic.findOne({author: data.username}, (err, doc) => {
        if(err) {
            return callback("Error finding user");
        }

        if(doc) {
            doc.topic.find((tp) => {
                if(tp.title == data.topic) {
                    data.options.forEach((option) => {
                        tp.options.push({
                            item: option.trim(),
                            count: 0
                        });
                    });
                    doc.save((err, doc) => {
                        if(err) {
                            return callback("Error saving options");
                        }
        
                       return callback(null, tp)
                    })
                }
            });
            
        }else{
            callback("No doc found")
        }
    })
}

// vote
module.exports.onVote = (data, callback) => {
    Topic.findOne({author: data.username}, (err, doc) => {
        if(err) {
            return callback("Error finding user");
        }

        if(doc) {
            doc.topic.find((tp) => {
                if(tp.title == data.topic) {
                   tp.options.find((item) => {
                       if(item.item == data.voted) {
                           item.count+= 1;
                       }
                   })
                   doc.save((err, doc) => {
                        if(err) {
                            return callback("Error saving vote");
                        }
        
                        return callback(null, tp)
                    })    
                }
            });
            
        }else{
            callback("No doc found")
        }
    })
}