const { Schema, model} = require("mongoose");


const movieSchema = new Schema ({
    name: {type: String, require: true},
    actors : [{type: String, require: true}],
    languages : [{type: String, require: true}],
    directors : [{type: String, require: true}],
    poster_url : [{type: String, require: true}],
    // user: {
    //     type: Schema.Types.ObjectId, ref:"user",
    // },
}, 
    {
        versionKey: false,
        timestamps: true,
    });


module.exports= model("movie", movieSchema)