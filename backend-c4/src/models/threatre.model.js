const { Schema, model} = require("mongoose");


const threatreSchema = new Schema ({
    name: {type: String, require: true},
    location : [{type: String, require: true}],
}, {
    versionKey: false,
    timestamps: true,
});


module.exports= model("threatre", threatreSchema)